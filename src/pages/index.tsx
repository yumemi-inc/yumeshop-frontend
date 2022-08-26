import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Layout } from 'src/components/layout/Layout';
import { useGetApi } from 'src/hooks/useGetApi';
import { Carousel } from 'src/components/common/Carousel/Carousel';
import { SectionTitle } from 'src/components/common/SectionTitle';
import { spacingSizes } from 'src/styles/Tokens';
import { CampaignCard } from 'src/components/campaign/CampaignCard/CampaignCard';

const Home: NextPage = () => {
  const { data: promotions } = useGetApi('/promotions');
  const { data: campaigns } = useGetApi('/campaigns');

  return (
    <>
      <Head>
        <title>Yumeshop</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section>
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
        </section>

        <section
          css={{ marginTop: spacingSizes.lg, paddingRight: spacingSizes.sm }}
        >
          <SectionTitle>キャンペーン</SectionTitle>
          {campaigns && (
            <Carousel options={{}}>
              {campaigns.map((campaign) => (
                <CampaignCard width="200" campaign={campaign} />
              ))}
            </Carousel>
          )}
        </section>
      </Layout>
    </>
  );
};

export default Home;
