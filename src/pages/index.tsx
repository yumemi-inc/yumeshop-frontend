import type { NextPage } from 'next';
import Head from 'next/head';

import { Container, Main, Title, TokenTest } from 'src/styles/Home';

const Home: NextPage = () => (
  <Container>
    <Head>
      <title>Yumeshop</title>
      <meta name="description" content="" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Main>
      <TokenTest>
        <Title>Welcome to Yumeshop</Title>
      </TokenTest>
    </Main>
  </Container>
);

export default Home;
