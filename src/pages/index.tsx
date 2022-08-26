import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Layout } from 'src/components/layout/Layout';
import { useGetApi } from 'src/hooks/useGetApi';
import { Carousel } from 'src/components/common/Carousel/Carousel';

const Home: NextPage = () => {
  const { data: promotions } = useGetApi('/promotions');

  return (
    <>
      <Head>
        <title>Yumeshop</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {promotions && (
          <Carousel dotButton options={{ align: 'start' }}>
            {promotions?.map((promotion) => (
              <Link key={promotion.id} href={promotion.link} passHref>
                <div
                  css={{
                    position: 'relative',
                    width: '100vw',
                    cursor: 'pointer',
                  }}
                >
                  <Image
                    src={promotion.image}
                    alt={promotion.title}
                    width={600}
                    height={600}
                    objectFit="contain"
                  />
                </div>
              </Link>
            ))}
          </Carousel>
        )}
      </Layout>
    </>
  );
};

export default Home;
