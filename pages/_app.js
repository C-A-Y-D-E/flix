import "react-multi-carousel/lib/styles.css";
import "../styles/globals.css";

import Header from "components/shared/Header";
function MyApp({ Component, pageProps }) {
  return (
    <div className="">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
