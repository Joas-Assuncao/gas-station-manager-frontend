import { Toaster } from "react-hot-toast";
import type { AppProps } from "next/app";

import "@/styles/globals.css";

import { Layout } from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Toaster position="top-center" reverseOrder={false} />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
