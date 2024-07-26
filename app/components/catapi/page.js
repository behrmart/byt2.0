"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Code,
  Stack,
  Flex,
  Center,
  Button,
  Image,
  Text,
} from "@chakra-ui/react";

const Catapi = () => {
  const [catdata, setCat] = useState(null);
  const [restat, setStat] = useState(null);
  /* 
  const getRandomPokemonId = () => Math.floor(Math.random() * 300) + 1;
  const PokebaseUrl = `https://pokeapi.co/api/v2/pokemon/${getRandomPokemonId()}`;
 */
  const CatbaseURL = "https://api.thecatapi.com/v1/images/search";

  const fetchData = async () => {
    try {
      const response = await fetch(CatbaseURL, {
        method: "GET",
      });
      const data = await response.json();
      const resStat = response.status;
      console.log("CAT API JSON DATA: ", data, "Response code: ", resStat);
      setCat(data);
      setStat(resStat);
    } catch (error) {
      console.error("Error fetching Cat API data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const handleNewCat = () => {
    fetchData();
  };

  return (
    <>
      <Box
        p={6}
        borderWidth="1px"
        bgGradient="linear(to-t, blue.400, pink.700)"
      >
        <Heading as="h3" size="md" color="deeppink" py="1">
          Cat API
        </Heading>
        <Box>
          <Stack direction="column">
            <Code colorScheme="blue">Cat ID: {catdata && catdata[0].id}</Code>
            <Code colorScheme="green">Cat Name:</Code>
          </Stack>
          <Center>
            <Image
              boxSize="230px"
              objectFit="cover"
              src={catdata && catdata[0].url}
              alt="Cat image"
            />
          </Center>
          <Code size="md" p="3" colorScheme="yellow">
            Response: {restat}
          </Code>
          <Button colorScheme="blue" variant="outline" onClick={handleNewCat}>
            New Cat
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Catapi;
