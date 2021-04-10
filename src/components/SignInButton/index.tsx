import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import styles from './styles.module.scss';

export function SignInButton() {
	const [isLoggedIn, setIsLoggedIn] = useState(true);

	if (isLoggedIn) {
		return (
			<button type="button" className={styles.signInButton}>
				<FaGithub color="#04d361" />
				Miguelitos
				<FiX color="#737380" className={styles.closeIcon} />
			</button>
		);
	}

	return (
		<button type="button" className={styles.signInButton}>
			<FaGithub color="#eba417" />
			Sign in with GitHub
		</button>
	);
}
