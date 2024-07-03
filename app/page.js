import Fortune from "./components/fortune/page";
import {
  Button,
  Link,
  Flex,
  Square,
  Center,
  Text,
  Box,
  Spacer,
  VStack,
} from "@chakra-ui/react";
import Navbar from "./components/navbar/navbar";

//import { AuthProvider } from "./context/authcontext";

export default function Home() {
  return (
    //<AuthProvider>
    <main>
      <VStack align="stretch">
        <Navbar />
        <Box>
          <Link href="/worldtimeapi">
            <Center bg="green.500">
              <Box p="6">WT API</Box>
            </Center>
          </Link>
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
        <Box>
          <Fortune />
        </Box>
      </VStack>
    </main>
    //</AuthProvider>
  );
}
