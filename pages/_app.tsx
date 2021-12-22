import "../styles/globals.css";
import Layout from "../components/Layout";
import Router from 'next/router'
import {useState} from "react";
import NProgress from 'nprogress'

function MyApp({ Component, pageProps }) {
    const [loading, setLoading] = useState(false)
    Router.events.on('routeChangeStart', (url) =>{
        NProgress.start()
        setLoading(true)
    })
    Router.events.on("routeChangeComplete", (url) =>{
        setLoading(false)
        NProgress.done()
    })
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
