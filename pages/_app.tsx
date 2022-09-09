import type { AppProps } from "next/app";

import { Provider } from "react-redux";

import "@/styles/index.css";
import { store } from "@/lib";
import { Layout } from "@/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
