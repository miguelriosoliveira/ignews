import { Provider as NextAuthProvider } from 'next-auth/client';
import { AppProps } from 'next/app';

import { Header } from '../components/Header';

import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<NextAuthProvider session={pageProps.session}>
			<Header />
			{/* eslint-disable-next-line react/jsx-props-no-spreading */}
			<Component {...pageProps} />
		</NextAuthProvider>
	);
}

export default MyApp;
