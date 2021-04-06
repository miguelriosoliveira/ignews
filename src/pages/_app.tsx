import { AppProps } from 'next/app';

import { Header } from '../components/Header';

import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Header />
			{/* eslint-disable-next-line react/jsx-props-no-spreading */}
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
