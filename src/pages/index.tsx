import type { NextPage } from 'next';
import Head from 'next/head';
import { Header } from 'src/components/layout/Header/Header';

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Yumeshop</title>
      <meta name="description" content="" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />
  </div>
);

export default Home;
