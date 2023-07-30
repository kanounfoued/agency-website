import "../app/globals.css";
import BasicLayout from "@/components/layouts/BasicLayout/BasicLayout";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <BasicLayout>
      <Component {...pageProps} />
    </BasicLayout>
  );
}
