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

  const CatbaseURL = "https://api.thecatapi.com/v1/images/search";

  const fetchData = async () => {
    const hasBreeds = true;
    const apiKey =
      "live_02n5Dw3WncBR8G5IO8ornZkvWVlcMaMJ664uzVkvUxBwQ2sAkgVPUDboGRXFFnPL"; // replace with your actual API key

    const url = new URL(CatbaseURL);
    url.searchParams.append("has_breeds", hasBreeds); //Get only Cats with breed info
    url.searchParams.append("api_key", apiKey); // Cat API Key

    try {
      const response = await fetch(url.toString(), {
        method: "GET",
      });
      const data = await response.json();
      const resStat = response.status;
      console.log(
        "CAT API JSON DATA: ",
        data[0].breeds[0],
        "Response code: ",
        resStat
      );
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
        bgGradient="linear(to-t, pink.700, yellow.400)"
      >
        <Heading as="h3" size="md" color="DarkMagenta" py="1">
          Cat API
        </Heading>
        <Box>
          <Stack direction="column">
            <Code colorScheme="white">
              Cat Name: {catdata && catdata[0].breeds[0].name}
            </Code>
            <Code colorScheme="white">
              Description: {catdata && catdata[0].breeds[0].temperament}
            </Code>
          </Stack>
          <Center>
            <Image
              boxSize="230px"
              borderRadius="5"
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
