import { signin, useSession } from 'next-auth/client';

import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';

import styles from './styles.module.scss';

interface Props {
	priceId: string;
}

interface CheckoutSessionProps {
	sessionId: string;
}

export function SubscribeButton({ priceId }: Props) {
	const [session] = useSession();

	async function handleSubscribe() {
		if (!session) {
			signin('github');
			return;
		}

		try {
			const response = await api.post<CheckoutSessionProps>('/create-checkout-session');
			const { sessionId } = response.data;
			console.log({ sessionId });
			const stripe = await getStripeJs();
			await stripe.redirectToCheckout({ sessionId });
		} catch (err) {
			console.error(err);
		}
	}

	return (
		<button type="button" className={styles.subscribeButton} onClick={handleSubscribe}>
			Subscribe now
		</button>
	);
}
