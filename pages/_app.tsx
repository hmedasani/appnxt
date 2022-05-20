import type { AppProps } from 'next/app';
import './globals.css';
import { NextPageLayoutProps } from './page';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageLayoutProps;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // User the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
