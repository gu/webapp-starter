import { Center, Text } from '@chakra-ui/react';

export type AppLoadingComponentProps = {
  isLoading: boolean;
};

export default function AppLoadingComponent({
  isLoading,
}: AppLoadingComponentProps) {
  const message = isLoading ? 'Loading...' : 'Error loading application.';

  return (
    <Center height="100%" width="100%" bg="gray.100">
      <Text fontSize="4xl" as="b" color="gray.600">
        {message}
      </Text>
    </Center>
  );
}
