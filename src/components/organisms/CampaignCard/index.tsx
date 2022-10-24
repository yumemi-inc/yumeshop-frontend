import { Box, VStack } from '@chakra-ui/react';
import Image from 'next/image';

export const CampaignCard = () => (
  <Box
    maxW="sm"
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    bg="white"
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
