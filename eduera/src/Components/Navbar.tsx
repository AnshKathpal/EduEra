import { useState, useEffect } from 'react';
import { useLocation,To, NavLink, useParams } from 'react-router-dom';
import {
  Box,
  Image,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
   useBreakpointValue,
    useDisclosure,
    Link
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import {SignUp} from './SignUp';
import { SignIn } from './SignIn';
import logo from "../Images/logo.png"

// import { NavLink } from 'react-router-dom';

export default function Navbar() {

  const [loggedIn, setLoggedIn] = useState(false);
  
  const { isOpen, onToggle } = useDisclosure();
  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
  const [navbarTop, setNavbarTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        setNavbarTop(0);
      } else {
        setNavbarTop(-90);
      }
      setPrevScrollpos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollpos]);

  const location = useLocation();

  const hideNavbarRoutes = ['/admin', "/adminuni", "/newUser", "/AdminAnalytics", "/adminDetails", "/adminuni/1", "/adminuni/2", "/adminuni/3","/adminuni/4", "/adminuni/5", "/adminuni/6", "/adminuni/7", "/adminuni/8", "/adminuni/9", "/adminuni/10"];

  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  if (shouldHideNavbar) {
    return null; // Render nothing if the navbar should be hidden
  }


  return (
    <Box>
      <Flex
        id="navbar" style={{ top: `${navbarTop}px` }}
        transition={"top 0.3s"}
        zIndex={"5"}
        width={"100%"}
        position={"fixed"}
        top={"0"}
        bg='#898a88'
        color= 'white'
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        // background={"transparent"}
        // borderBottom={1}
        // borderStyle={'solid'}
        borderColor= 'gray.900'
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'center' }}>
          <NavLink to={"/"} >
          <Text
            // textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color='gray.800'
            >
            <Image
              // borderRadius='full'
              boxSize='70px'
              src={logo}
              alt='Shivansh soni'
              overflow="hidden"
              
              />
          </Text>
              </NavLink>

          <Flex alignItems={"center"} justifyContent={"center"} display={{ base: 'none', md: 'flex' }} ml={10} width={"80%"} >
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'center'}
          direction={'row'}
          spacing={6}>
            <Flex alignItems={"center"}>
              <NavLink to={"/applications"}>
            <Text  color={"white"} as={"b"}>{"MyApplication"}</Text>
              </NavLink>
            </Flex>
          <SignIn />
          {!loggedIn && <SignUp />}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />

      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
            <NavLink
  to={navItem.href ?? '/'}
  style={{
    marginLeft: '20px',
    marginRight: '20px',
    padding: '2rem',
    fontSize: 'large',
    fontWeight: 500,
    color: "white",
    textDecoration: 'none',
  }}
>
  {navItem.label}
</NavLink>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      // href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: 'pink.50'}}
      >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg='white'
      p={4}
      mt = "20"
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
  {href && ( 
    <NavLink to={href}>
      <Flex
        py={2}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text fontWeight={600} color='gray.600'>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>
    </NavLink>
  )}
</Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Programs',
    href: "/programs",
  },
  {
    label: 'Universities',
    href: "/universities",
  },

  {
    label: 'Language Classes',
    href: '#',
  },
  {
    label: 'Guides',
    href: './',
  },
];