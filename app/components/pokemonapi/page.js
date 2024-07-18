import {
  Box,
  Heading,
  Code,
  Stack,
  Flex,
  Center,
  Text,
} from "@chakra-ui/react";

const getRandomPokemonId = () => Math.floor(Math.random() * 300) + 1;

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
}
