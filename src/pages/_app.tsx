import "../app/globals.css";
import BasicLayout from "@/components/layouts/BasicLayout/BasicLayout";
import type { AppProps } from "next/app";
import { Roboto_Mono } from "next/font/google";

export const roboto_mono = Roboto_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={roboto_mono.className}>
      <BasicLayout>
        <Component {...pageProps} />
      </BasicLayout>
    </div>
  );
}
