import React from 'react'
import logo from "../Images/logo.png"

import {  To, NavLink } from 'react-router-dom';
// export const  = () => {
//   return (
//     <div>Navbar</div>
//   )
// }
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
Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import {SignUp} from './SignUp';
import { SignIn } from './SignIn';
import { useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';

export default function Navbar() {
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
  return (
    <Box>
      <Flex
        id="navbar" style={{ top: `${navbarTop}px` }}
        transition={"top 0.3s"}
        zIndex={"5"}
        width={"100%"}
        position={"fixed"}
        top={"0"}
        bg={useColorModeValue('#898a88', ' #4787f3;')}
        color={useColorModeValue('pink', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        // background={"transparent"}
        // borderBottom={1}
        // borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
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
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}>
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
          <SignUp />
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />

      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('white', ' #4787f3;');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');


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
    color: linkColor,
    textDecoration: 'none',
  }}
>
  {navItem.label}
</NavLink>
              {/* <Link to={navItem.href ?? '/'}>{navItem.label}</Link> */}
            </PopoverTrigger>

            {/* {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )} */}
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
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}
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
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
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
      <Flex
        py={2}
        as={Link}
        // href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
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

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2}
              //  href={child.href}
               >
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: To;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Programs',
    href: "/programs",
    // children: [
    //   {
    //     label: 'Explore Design Work',
    //     subLabel: 'Trending Design to inspire you',
    //     href: '#',
    //   },
    //   {
    //     label: 'New & Noteworthy',
    //     subLabel: 'Up-and-coming Designers',
    //     href: '#',
    //   },
    //   {
    //     label: 'New & Noteworthy',
    //     subLabel: 'Up-and-coming Designers',
    //     href: '#',
    //   },
    //   {
    //     label: 'New & Noteworthy',
    //     subLabel: 'Up-and-coming Designers',
    //     href: '#',
    //   },
    //   {
    //     label: 'New & Noteworthy',
    //     subLabel: 'Up-and-coming Designers',
    //     href: '#',
    //   },
    //   {
    //     label: 'New & Noteworthy',
    //     subLabel: 'Up-and-coming Designers',
    //     href: '#',
    //   },
    //   {
    //     label: 'New & Noteworthy',
    //     subLabel: 'Up-and-coming Designers',
    //     href: '#',
    //   },
    // ],
  },
  {
    label: 'Universities',
    href: "/universities",
    //   children: [
    //     {
    //       label: 'Job Board',
    //       subLabel: 'Find your dream design job',
    //       href: '#',
    //     },
    //     {
    //       label: 'Freelance Projects',
    //       subLabel: 'An exclusive list for contract work',
    //       href: '#',
    //     },
    //     {
    //       label: 'Freelance Projects',
    //       subLabel: 'An exclusive list for contract work',
    //       href: '#',
    //     },
    //     {
    //       label: 'Freelance Projects',
    //       subLabel: 'An exclusive list for contract work',
    //       href: '#',
    //     },
    //     {
    //       label: 'Freelance Projects',
    //       subLabel: 'An exclusive list for contract work',
    //       href: '#',
    //     },
    //     {
    //       label: 'Freelance Projects',
    //       subLabel: 'An exclusive list for contract work',
    //       href: '#',
    //     },
    //     {
    //       label: 'Freelance Projects',
    //       subLabel: 'An exclusive list for contract work',
    //       href: '#',
    //     },
    //   ],
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