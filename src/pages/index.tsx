import type { NextPage } from 'next';
import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import { TopPage } from 'src/components/page/Top';
import { Header } from 'src/components/organisms/Header';
import { Footer } from 'src/components/organisms/Footer';

const Home: NextPage = () => (
  <Box>
    <Head>
      <title>Yumeshop</title>
      <meta name="description" content="" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <TopPage />
    <Footer />
  </Box>
);

export default Home;
