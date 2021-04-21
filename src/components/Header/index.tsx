import Link from 'next/link';

import { SignInButton } from '../SignInButton';

import styles from './styles.module.scss';

export function Header() {
	return (
		<header className={styles.headerContainer}>
			<div className={styles.headerContent}>
				<Link href="/">
					<img src="/images/logo.svg" alt="ig.news" />
				</Link>

				<nav>
					<Link href="/">
						<a className={styles.active}>Home</a>
					</Link>
					<Link href="/posts">Posts</Link>
				</nav>

				<SignInButton />
			</div>
		</header>
	);
}
