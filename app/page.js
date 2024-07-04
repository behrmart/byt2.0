import Fortune from "./components/fortune/page";
import Worldtimeapi from "./components/worldtimeapi/page";
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
} from "@chakra-ui/react";
import Navbar from "./components/navbar/navbar";

//import { AuthProvider } from "./context/authcontext";

export default function Home() {
  return (
    //<AuthProvider>
    <main>
      <Navbar />
      <HStack align="stretch">
        <Box>
          <Center bgGradient="linear(to-t, green.400, pink.700)">
            <Box p="6">
              <Worldtimeapi />
            </Box>
          </Center>

          <Link href="/videojs">
            <Center bg="blue.500">
              <Box p="6">Video</Box>
            </Center>
          </Link>
          <Link href="/worldtimeapi">
            <Center bg="tomato">
              <Box p="6">Home</Box>
            </Center>
          </Link>
        </Box>
        <Spacer />
      </HStack>
      <Box>
        <Fortune />
      </Box>
    </main>
    //</AuthProvider>
  );
}
