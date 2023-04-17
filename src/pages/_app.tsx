import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Noto_Sans } from 'next/font/google';

const mainFont = Noto_Sans({
	subsets: ['latin'],
	weight: '400',
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={mainFont.className}>
			<Component {...pageProps} />
		</main>
	);
}
