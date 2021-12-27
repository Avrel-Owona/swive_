import "../styles/globals.css";
import Layout from "../components/Layout";
import Router from 'next/router'
import {useState, useMemo} from "react";
import NProgress from 'nprogress'
import {userContext} from "../context/userContext";

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
    const [user, setUser] = useState(null)
    const userValue = useMemo(() => ({ user, setUser }), [ user, setUser])
  return (
      <userContext.Provider value={{user, setUser}}>
          <Layout>
              <Component {...pageProps} />
          </Layout>
      </userContext.Provider>
  );
}
export default MyApp;
