import type { NextPage } from 'next';
import Head from 'next/head';
import { useGetApi } from 'src/hooks/useGetApi';
import { colors, fontSizes } from 'src/styles/Tokens';

const Home: NextPage = () => {
  const { data } = useGetApi('/shop_items/:id', {
    id: '4dfd9672-5633-4328-b104-832e2f18c2a7',
  });

  return (
    <div>
      <Head>
        <title>Yumeshop</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        css={{
          color: colors.Red,
          fontSize: fontSizes.fontSize32,
        }}
      >
        テスト
      </div>

      {JSON.stringify(data)}
    </div>
  );
};

export default Home;
