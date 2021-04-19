import Link from 'next/link';

import { SignInButton } from '../SignInButton';

import styles from './styles.module.scss';

export function Header() {
	return (
		<header className={styles.headerContainer}>
			<div className={styles.headerContent}>
				<Link href="/" passHref>
					<img src="/images/logo.svg" alt="ig.news" />
				</Link>

				<nav>
					<a href="/" className={styles.active}>
						Home
					</a>
					<a href="/posts">Posts</a>
				</nav>

				<SignInButton />
			</div>
		</header>
	);
}
