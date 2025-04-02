"use client";
import React, { useState } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";

const Links = [
  "/#",
  "/pokemon",
  "/worldtime",
  "/videojs",
  "/catAPI",
  "/openweatherapi",
];

const NavLink = ({ children }) => {
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("pink.200", "pink.700"),
      }}
      href={children}
    >
      {children}
    </Box>
  );
};

export default function WithAction() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [colorMode, setColorMode] = useState("light"); // Default color mode is light
  const { toggleColorMode } = useColorMode();

  const handleColorModeToggle = () => {
    if (colorMode === "light") {
      setColorMode("dark");
      toggleColorMode();
    } else {
      setColorMode("light");
      toggleColorMode();
    }
  };

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box fontWeight="bold" color="pink.600">
              Berns RESTful APIs
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Button
              variant={"solid"}
              colorScheme={"pink"}
              size={"sm"}
              mr={4}
              onClick={handleColorModeToggle}
              leftIcon={<AddIcon />}
            >
              Dark-Light
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "http://192.168.100.23/mediawiki/resources/assets/BerFunkoAvaya.jpeg"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

/* "use client";
import React, { useState } from "react";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import {
  Flex,
  Spacer,
  Button,
  Center,
  useColorMode,
  Text,
} from "@chakra-ui/react";

export default function Navbar() {
  const [colorMode, setColorMode] = useState("light"); // Default color mode is light
  const { toggleColorMode } = useColorMode();

  const handleColorModeToggle = () => {
    if (colorMode === "light") {
      setColorMode("dark");
      toggleColorMode();
    } else {
      setColorMode("light");
      toggleColorMode();
    }
  };

  return (
    <Flex
      w="100%"
      p={4}
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      color="white"
      borderRadius="md"
    >
      <Center fontSize="lg">
        <Button ml={4} colorScheme="pink" variant="solid" size="sm">
          <Link as={NextLink} href="/">
            Home
          </Link>
        </Button>
      </Center>
      <Center fontSize="lg">
        <Button ml={4} colorScheme="pink" variant="solid" size="sm">
          <Link as={NextLink} href="/pokemon">
            Pokemon API
          </Link>
        </Button>
      </Center>
      <Center fontSize="lg">
        <Button ml={4} colorScheme="pink" variant="solid" size="sm">
          <Link as={NextLink} href="/worldtime">
            WorldTime API
          </Link>
        </Button>
      </Center>
      <Center fontSize="lg">
        <Button ml={4} colorScheme="pink" variant="solid" size="sm">
          <Link as={NextLink} href="/videojs">
            Video
          </Link>
        </Button>
      </Center>
      <Spacer />
      <Text>Berns' RESTful App</Text>
      <Button
        ml={4}
        colorScheme="purple"
        variant="solid"
        size="sm"
        onClick={handleColorModeToggle}
      >
        {colorMode === "dark" ? "Dark" : "Light"}
      </Button>
    </Flex>
  );
} */
