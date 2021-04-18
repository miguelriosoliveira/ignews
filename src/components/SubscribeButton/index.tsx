import { signin, useSession } from 'next-auth/client';

import styles from './styles.module.scss';

interface Props {
	priceId: string;
}

export function SubscribeButton({ priceId }: Props) {
	const [session] = useSession();

	function handleSubscribe() {
		if (!session) {
			signin('github');
		}
	}

	return (
		<button type="button" className={styles.subscribeButton} onClick={handleSubscribe}>
			Subscribe now
		</button>
	);
}
