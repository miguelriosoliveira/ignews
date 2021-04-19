import { buffer } from 'micro';
import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

import { stripe } from '../../services/stripe';
import { saveSubscription } from '../_lib/manageSubscription';

export const config = {
	api: {
		bodyParser: false,
	},
};

const relevantEvents = new Set(['checkout.session.completed']);

export default async (request: NextApiRequest, response: NextApiResponse) => {
	if (request.method === 'POST') {
		const buf = await buffer(request);
		const secret = request.headers['stripe-signature'];
		let event: Stripe.Event;

		try {
			event = stripe.webhooks.constructEvent(buf, secret, process.env.STRIPE_WEBHOOK_SECRET);
		} catch (err) {
			response.status(400).send(`Webhook error: ${err.message}`);
			return;
		}

		if (relevantEvents.has(event.type)) {
			try {
				switch (event.type) {
					case 'checkout.session.completed':
						const checkoutSession = event.data.object as Stripe.Checkout.Session;
						await saveSubscription({
							subscriptionId: String(checkoutSession.subscription),
							customerId: String(checkoutSession.customer),
						});
						break;
					default:
						throw new Error('Unhandled event');
				}
			} catch (err) {
				response.json({ error: 'Webhook handler failed.' }); // not a error response because it's a response to Stripe, not to us.
				return;
			}
		}

		response.status(200).json({ received: true });
	} else {
		response.setHeader('Allow', 'POST');
		response.status(405).end('Method not allowed');
	}
};
