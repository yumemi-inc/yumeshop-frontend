import useAspidaSWR from '@aspida/swr';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { apiClient } from 'src/libs/apiClient';

import { Container, Main, Title, TokenTest } from 'src/styles/home';

const Home: NextPage = () => {
  const { data: shopItems } = useAspidaSWR(apiClient.shop_items);

  console.log(shopItems);

  return (
    <Container>
      <Head>
        <title>Yumeshop</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Image
          src="/shopping-bag.jpg"
          alt="買い物袋"
          width={600}
          height={600}
        />

        <TokenTest>
          <Title>Welcome to Yumeshop</Title>
        </TokenTest>
      </Main>
    </Container>
  );
};

export default Home;
