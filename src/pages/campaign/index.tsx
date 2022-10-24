import { Button, HStack } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Campaign: NextPage = () => {
  const router = useRouter();
  return (
    <HStack m={10}>
      <p>こちらはキャンペーンページです。</p>
      <Button onClick={() => router.back()}>戻る</Button>
    </HStack>
  );
};

export default Campaign;
