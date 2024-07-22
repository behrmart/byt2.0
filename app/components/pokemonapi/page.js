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
  Text,
} from "@chakra-ui/react";

const Pokeapi = () => {
  const [pokemon, setPokemon] = useState(null);
  const [restat, setStat] = useState(null);

  const getRandomPokemonId = () => Math.floor(Math.random() * 300) + 1;
  const PokebaseUrl = `https://pokeapi.co/api/v2/pokemon/${getRandomPokemonId()}`;

  const fetchData = async () => {
    try {
      const response = await fetch(PokebaseUrl, {
        method: "GET",
      });
      const data = await response.json();
      const resStat = response.status;
      console.log("POKEMON JSON DATA: ", data, "Response code: ", resStat);
      setPokemon(data);
      setStat(resStat);
    } catch (error) {
      console.error("Error fetching pokemon data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const handleNewPokemon = () => {
    fetchData();
  };

  return (
    <>
      <Heading as="h3" size="md" color="deeppink" py="1">
        Pokemon API
      </Heading>
      <Box>
        <Stack direction="column">
          <Code colorScheme="blue">
            Species Name: {pokemon && pokemon.species.name}
          </Code>
          <Code colorScheme="green">Pokemon ID: {pokemon && pokemon.id}</Code>
          <Code colorScheme="green">
            Pokemon Height: {pokemon && pokemon.height}
          </Code>
        </Stack>
        <Center>
          <img
            src={pokemon && pokemon.sprites.front_default}
            alt="Pokemon image"
          ></img>
        </Center>
        <Code size="md" p="3" colorScheme="yellow">
          Response: {restat}
        </Code>
        <Button colorScheme="blue" variant="outline" onClick={handleNewPokemon}>
          New Pokemon
        </Button>
      </Box>
    </>
  );
};

export default Pokeapi;

/* const getRandomPokemonId = () => Math.floor(Math.random() * 300) + 1;

const PokebaseUrl = `https://pokeapi.co/api/v2/pokemon/${getRandomPokemonId()}`;

export default async function Pokeapi() {
  const res = await fetch(PokebaseUrl, { cache: "no-store" });
  const data = await res.json();
  console.log("PokeAPI data:", data.species.name);

  return (
    <>
      <Heading>Pokemon API</Heading>
      <Box>
        <Text>Species Name: {data.species.name}</Text>
        <Text>Pokemon ID: {data.id}</Text>
        <Text>Pokemon Height: {data.height}</Text>
        <img src={data.sprites.front_default} alt="Pokemon image"></img>
      </Box>
    </>
  );
} */
