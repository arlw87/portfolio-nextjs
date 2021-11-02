import "../styles/globals.css";

//Can you use this Functional Component to wrap all pages in header, footer, navBar etc

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
