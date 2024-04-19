import { Center, Flex, Text, Image } from '@chakra-ui/react';

export type AppLoadingComponentProps = {
  isLoading: boolean;
};

export default function AppLoadingComponent({
  isLoading,
}: AppLoadingComponentProps) {
  const message = isLoading ? 'Loading...' : 'Error loading application.';

  return (
    <Center height="100%" width="100%" bg="gray.100">
      <Flex direction="column" alignItems="center">
        <Image src="/logo.svg" boxSize="200px" marginBottom={4} />
        <Text fontSize="4xl" as="b" color="gray.600">
          {message}
        </Text>
      </Flex>
    </Center>
  );
}
