import Head from 'next/head';

import styles from '../styles/home.module.scss';

export default function Home() {
	return (
		<>
			<Head>
				<title>ig.news | Home</title>
			</Head>
			<h1 className={styles.title}>hellou</h1>
		</>
	);
}
