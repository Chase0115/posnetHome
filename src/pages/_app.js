import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import { PageProvider } from "@/components/commons/context/context";
import { prefix } from "@/config/config";

export default function App({ Component, pageProps }) {
  return (
    <PageProvider value={{ prefix }}>
      <Navbar />
      <Component {...pageProps} />
    </PageProvider>
  );
}
