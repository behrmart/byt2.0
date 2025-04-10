/* 
BEHRMART BYT2.0
Just a simple exercise to test external public/private APIs. 

by Bernardo Felipe Martinez Meave
https://github.com/behrmart

Application is built on Next.js/React (Using the App Router). Uses one propietary API 
running on my own server to get the Linux Fortunes. This FortuneServer API is running 
using Docker and and Mongo DB (Cloud Mongo DB Atlas). 
The Docker container runs a Node.js Server to query a Mongo Atlas DB using Mongoose.

Docker container for MongoDB running on Ubuntu Linux.
sudo docker run -d --name mongolin -p27017:27017 -e MONGO_INITDB_ROOT_USERNAME=mongoadmin -e MONGO_INITDB_ROOT_PASSWORD=secret mongo
sudo docker start mongolin

FortuneVaquitaServer
https://github.com/behrmart/FortuneVaquitaServer

Docker container Links to MongoDB Atlas

Also uses public RESTful APIs: 
https://pokeapi.co 
https://api.thecatapi.com 
https://api.openweathermap.org */

import Footer from "./components/footer/page";
import Pokeapi from "./components/pokemonapi/page";
import Catapi from "./components/catapi/page";
import { Flex, Box, Heading, Center } from "@chakra-ui/react";
import Navbar from "./components/navbar/navbar";
import Openweatherapi from "./components/openweatherapi/page";

export default function Home() {
  // Get current date and format it (e.g., "April 11, 2025")
  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <main>
      <Navbar />
      <Box bg="tomato" w="100%" p="4" color="white" _hover={{ bg: "green" }}>
        <Heading size={"md"} textAlign="center">
          Bernardo's Dashboard - {currentDate}
        </Heading>
      </Box>
      <Flex
        direction={["column", "row", "row"]} // column on mobile, row otherwise
        wrap="wrap"
        justify="center"
        align="stretch"
        gap={4}
        p={4}
      >
        <Box width={["100%", "50%", "25%"]} minWidth="300px">
          <Pokeapi />
        </Box>

        <Box width={["100%", "50%", "25%"]} minWidth="300px">
          <Catapi />
        </Box>

        <Box width={["100%", "50%", "25%"]} minWidth="300px">
          <Openweatherapi />
        </Box>
      </Flex>

      <Box mt={8}>
        <Center>
          <Footer />
        </Center>
      </Box>
    </main>
  );
}
