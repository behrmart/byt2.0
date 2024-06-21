
import Fortune from "./components/fortune/page";
import { Button, Link, Flex, Square, Center, Text, Box, Spacer } from "@chakra-ui/react";
import Navbar from "./components/navbar/navbar";


//import { AuthProvider } from "./context/authcontext";

export default function Home() {
  return (
    //<AuthProvider>
    <main>
      <Navbar></Navbar>
      <Flex>
        <Link  href="/worldtimeapi"> 
        <Center bg="green.500">
          <Box p="6" >WT API</Box>
        </Center>
        </Link>
        <Link  href="/videojs"> 
        <Center bg="blue.500">
          <Box p="6">Video</Box>
        </Center>
        </Link>
        <Spacer />
        <Link  href="/worldtimeapi"> 
        <Center bg="tomato">
          <Box p="6">Home</Box>
        </Center>
        </Link>
        
      </Flex>

     
      <Fortune></Fortune>
    </main>
    //</AuthProvider>
  );
}
