import { Box, HStack } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { CampaignCard } from 'src/components/organisms/CampaignCard';

const Home: NextPage = () => (
  <Box width="100%">
    <p>とりあえずのキャンペーン部分</p>
    <HStack m={10}>
      {Array.from({ length: 5 }, (v, k) => k).map(() => (
        <CampaignCard campaignPath="/campaign" />
      ))}
    </HStack>
  </Box>
);

export default Home;
