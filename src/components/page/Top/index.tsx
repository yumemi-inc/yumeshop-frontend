import { Suspense, VFC } from 'react';
import { Box } from '@chakra-ui/react';
import { usePromotionCardsQuery } from 'src/libs/hooks/usePromotionCardsQuery';
import { ImageCarousel } from 'src/components/molecules/ImageCarousel';

export const TopPage: VFC = () => {
  const promotionData = usePromotionCardsQuery();

  return (
    <Box>
      <Suspense fallback={<p>Loading...</p>}>
        <ImageCarousel items={promotionData} />
      </Suspense>
    </Box>
  );
};
