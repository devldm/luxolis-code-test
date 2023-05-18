import { type AppType } from "next/dist/shared/lib/utils";

import "~/styles/globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
  weight: ["300", "500", "600"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={`${montserrat.variable} font-display text-white`}>
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;
