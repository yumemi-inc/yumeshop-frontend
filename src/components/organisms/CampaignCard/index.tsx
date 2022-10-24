import { Box, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

type CampaignCardProps = {
  campaignPath: string;
};

export const CampaignCard = (props: CampaignCardProps) => {
  const { campaignPath } = props;
  const router = useRouter();
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg="white"
      onClick={() => router.push(campaignPath)}
    >
      <VStack>
        <Image src="/shopping-bag.jpg" width="100%" height="100%" />
        <Box p="6">
          Test. testTest. testTest. testTest. testTest. testTest. testTest.
          testTest. testTest. testTest. testTest. test
        </Box>
      </VStack>
    </Box>
  );
};
