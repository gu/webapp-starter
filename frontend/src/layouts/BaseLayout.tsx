import { Box, Center, Flex } from '@chakra-ui/react';
import BannerComponent from '@components/BannerComponent';
import { PropsWithChildren } from 'react';
import useConfig from '@hooks/api/useConfig';
import AppLoadingComponent from '@components/AppLoadingComponent';

export default function BaseLayout({ children }: PropsWithChildren) {
  const { config, isPending } = useConfig();
  return (
    <Flex height="100vh" width="100vw" direction="column">
      {!config && (
        <Center height="100%" width="100%">
          <AppLoadingComponent isLoading={isPending}></AppLoadingComponent>
        </Center>
      )}
      {config && (
        <>
          <BannerComponent height="25px" content={config.banner} />
          <Box height="calc(100% - 50px)" overflow="hidden">
            {children}
          </Box>
          <BannerComponent height="25px" content={config.banner} />
        </>
      )}
    </Flex>
  );
}
