import "../app/globals.css";
import BasicLayout from "@/components/layouts/BasicLayout/BasicLayout";
import type { AppProps } from "next/app";
import { Epilogue } from "next/font/google";

export const epilogue_mono = Epilogue({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={epilogue_mono.className}>
      <BasicLayout>
        <Component {...pageProps} />
      </BasicLayout>
    </div>
  );
}
