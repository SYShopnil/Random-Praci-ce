import '../styles/global.css';

import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import { wrapper } from '../store/store';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider enableSystem={true} attribute="class">
    <Component {...pageProps} />
  </ThemeProvider>
);

export default wrapper.withRedux(MyApp);
