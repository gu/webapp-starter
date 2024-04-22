import {
  Badge,
  Divider,
  Flex,
  Image,
  Text,
  Button,
  Fade,
} from '@chakra-ui/react';
import { useNavBarStore } from '@hooks/store/useNavBarStore';
import useConfig from '@hooks/api/useConfig';
import {
  IconHome,
  IconSettings,
  IconSwitchHorizontal,
} from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

type NavBarButtonComponentProps = {
  name: string;
  icon: JSX.Element;
  onClick: () => void;
};

type NavBarButtonLinkProps = {
  name: string;
  path: string;
  icon: JSX.Element;
};

function NavBarButtonComponent({
  name,
  icon,
  onClick,
}: NavBarButtonComponentProps) {
  const isOpen = useNavBarStore((state) => state.isOpen);
  return (
    <Button
      colorScheme="gray"
      variant="ghost"
      justifyContent="flex-start"
      alignItems="center"
      onClick={onClick}
      padding="11px"
      height="48px"
      width="100%"
    >
      <Flex>
        {icon}
        <Fade in={isOpen} unmountOnExit>
          <Text marginLeft={3} height="24px" lineHeight="24px">
            {name}
          </Text>
        </Fade>
      </Flex>
    </Button>
  );
}

export default function NavBarComponent() {
  const navigate = useNavigate();
  const { config } = useConfig();
  const isOpen = useNavBarStore((state) => state.isOpen);
  const toggleIsOpen = useNavBarStore((state) => state.toggleIsOpen);

  const navLinks: NavBarButtonLinkProps[] = [
    {
      name: 'Home',
      path: '/',
      icon: <IconHome />,
    },
    {
      name: 'Config',
      path: '/config',
      icon: <IconSettings />,
    },
  ];

  return (
    <Flex
      direction="column"
      width={isOpen ? '321px' : '81px'} // 1 extra px to account for right border
      height="100%"
      borderRightWidth="1px"
      padding={4}
      transition="all 0.25s ease-in-out"
    >
      {/* Application Icon and Version */}
      <Flex direction="row" alignItems="center" justifyContent="space-between">
        <Flex alignItems="center" width="100%">
          <Image width="48px" height="48px" src="/logo.svg" padding={1} />
          <Fade in={isOpen} unmountOnExit>
            <Text as="b" fontSize="xl" marginLeft={3}>
              {config?.appName}
            </Text>
          </Fade>
        </Flex>
        <Fade in={isOpen} unmountOnExit>
          <Badge>{config?.version}</Badge>
        </Fade>
      </Flex>
      <Divider marginTop={4} marginBottom={4}></Divider>
      <Flex direction="column" grow={1}>
        {/* Top Nav Buttons */}
        <Flex direction="column" grow={1}>
          {navLinks.map((navLink) => {
            return (
              <NavBarButtonComponent
                key={navLink.path}
                name={navLink.name}
                icon={navLink.icon}
                onClick={() => {
                  navigate(navLink.path);
                }}
              />
            );
          })}
        </Flex>
        {/* Bottom Nav Buttons */}
        <Flex direction="column">
          <Divider marginTop={4} marginBottom={4}></Divider>
          <Flex direction="column" alignItems="center">
            <NavBarButtonComponent
              name="Toggle Navigation"
              icon={<IconSwitchHorizontal />}
              onClick={() => {
                toggleIsOpen();
              }}
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
