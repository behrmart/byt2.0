import Footer from "./components/footer/page";
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
        <Flex>
          <Center bgGradient="linear(to-t, green.400, pink.700)">
            <Box p="6">
              <Worldtimeapi />
            </Box>
          </Center>
        </Flex>
      </HStack>
      <Box>
        <Footer />
      </Box>
    </main>
    //</AuthProvider>
  );
}
