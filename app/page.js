import Footer from "./components/footer/page";
import Worldtimeapi from "./components/worldtimeapi/page";
import Pokeapi from "./components/pokemonapi/page";
import Catapi from "./components/catapi/page";
import {
  Button,
  Link,
  Flex,
  Square,
  Center,
  Text,
  Box,
  Spacer,
  HStack,
  Heading,
} from "@chakra-ui/react";
import Navbar from "./components/navbar/navbar";
import Openweatherapi from "./components/openweatherapi/page";

//import { AuthProvider } from "./context/authcontext";

export default function Home() {
  return (
    //<AuthProvider>
    <main>
      <Navbar />

      <Flex>
        <Pokeapi />
        <Worldtimeapi />
        <Catapi />
        <Openweatherapi />
      </Flex>

      <Box>
        <Footer />
      </Box>
    </main>
    //</AuthProvider>
  );
}
