import Footer from "./components/footer/page";
import Pokeapi from "./components/pokemonapi/page";
import Catapi from "./components/catapi/page";
import { Flex, Box } from "@chakra-ui/react";
import Navbar from "./components/navbar/navbar";
import Openweatherapi from "./components/openweatherapi/page";

export default function Home() {
  return (
    <main>
      <Navbar />

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
        <Footer />
      </Box>
    </main>
  );
}
