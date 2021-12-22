import Head from "next/head";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Template of app</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
                integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
                crossOrigin="anonymous" referrerPolicy="no-referrer"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center items-center bg-blue-600 h-screen w-screen text-red-600">
        <h1 className="text-9xl text-gray-100 text-center font-bold">SWIVE</h1>
      </div>
        <footer className="text-xs text-gray-100 absolute bottom-0 w-full text-center my-2">
            Art by <span className='font-bold underline cursor-pointer'>Avrel OWONA</span>
        </footer>
    </div>
  );
};

export default Home;
