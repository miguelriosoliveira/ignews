import Link from 'next/link';

import { ActiveLink } from '../ActiveLink';
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
					<ActiveLink href="/" activeClassName={styles.active}>
						<a>Home</a>
					</ActiveLink>
					<ActiveLink href="/posts" activeClassName={styles.active}>
						<a>Posts</a>
					</ActiveLink>
				</nav>

				<SignInButton />
			</div>
		</header>
	);
}
