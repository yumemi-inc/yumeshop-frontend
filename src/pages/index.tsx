import type { NextPage } from 'next';
import Head from 'next/head';
import { colors, fontSizes } from 'src/styles/Tokens';

const Home: NextPage = () => (
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
  </div>
);

export default Home;
