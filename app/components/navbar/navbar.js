"use client";
import React, { useState } from "react";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import { Flex, Spacer, Button, Center, useColorMode } from "@chakra-ui/react";

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
            BYT2.0
          </Link>
        </Button>
      </Center>
      <Center fontSize="lg">
        <Button ml={4} colorScheme="pink" variant="solid" size="sm">
          <Link as={NextLink} href="/worldtimeapi">
            Worldtime API
          </Link>
        </Button>
      </Center>
      <Spacer />

      <Button
        ml={4}
        colorScheme="purple"
        variant="solid"
        size="sm"
        onClick={handleColorModeToggle}
      >
        {colorMode === "dark" ? "Dark Mode" : "Light Mode"}
      </Button>
    </Flex>
  );
}
