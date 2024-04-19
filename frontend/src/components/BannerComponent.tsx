import { Center } from '@chakra-ui/react';

export type BannerComponentProps = {
  content: string;
  height: string;
};

export default function BannerComponent({
  content,
  height,
}: BannerComponentProps) {
  return (
    <Center w="100%" height={height} color="white" bg="gray.700">
      {content}
    </Center>
  );
}
