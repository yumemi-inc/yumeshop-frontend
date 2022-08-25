import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { colors, fontSizes } from 'src/styles/Tokens';
import { ShopItemDetail } from 'src/types/shopItem';
import { getApi, ApiResponseError } from 'src/utils/api';
import { Header } from 'src/components/layout/Header/Header';

const Home: NextPage = () => {
  const [data, setData] = useState<ShopItemDetail>();

  return (
    <div>
      <Head>
        <title>Yumeshop</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div
        css={{
          color: colors.Red,
          fontSize: fontSizes.fontSize32,
        }}
      >
        テスト
      </div>
      <button
        type="button"
        onClick={async () => {
          try {
            // const res = await getApi("/shop_items")
            const res = await getApi('/shop_items/:id', {
              id: '4dfd9672-5633-4328-b104-832e2f18c2a7',
            });
            setData(res);
          } catch (error) {
            if (error instanceof ApiResponseError) {
              // eslint-disable-next-line no-console
              console.error(error);
            }
          }
        }}
      >
        fetch
      </button>

      {JSON.stringify(data)}
    </div>
  );
};

export default Home;
