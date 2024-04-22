import { PropsWithChildren } from 'react';
import BaseLayout from './BaseLayout';
import { Flex } from '@chakra-ui/react';
import NavBarComponent from '../components/NavBarComponent';

export default function NavBarLayout({ children }: PropsWithChildren) {
  return (
    <BaseLayout>
      <Flex direction="row" height="100%" width="100%">
        <NavBarComponent />
        <Flex direction="column" grow={1}>
          {children}
        </Flex>
      </Flex>
    </BaseLayout>
  );
}
