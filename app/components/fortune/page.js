// pages/Fortune.js
"use client";
import React, { useState, useEffect } from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Code,
  Button,
  Text,
  Heading,
  Box,
} from "@chakra-ui/react";

const Fortune = () => {
  const [fortune, setFortune] = useState(null);
  const [restat, setStat] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://192.168.100.23:3001/fortune/random",
        {
          method: "GET",
        }
      );

      const data = await response.json();
      const resStat = response.status;
      console.log("JSON data: ", data, "Response code: ", resStat);
      setFortune(data);
      setStat(resStat);
    } catch (error) {
      console.error("Error fetching data on getfortune:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleNewFortune = () => {
    fetchData();
  };

  return (
    <Box>
      <Card
        align="center"
        p="6"
        w="100%"
        bgGradient={["linear(to-t, red.400, purple.700)"]}
      >
        <CardHeader>
          <Text size="md" color="pink">
            Fortune No.: {fortune && fortune.fortune_id}
          </Text>
        </CardHeader>
        <CardBody>
          <Heading size="md" p="3">
            {fortune && fortune.fortune_message}
          </Heading>
        </CardBody>
        <CardFooter>
          <Button colorScheme="purple" onClick={handleNewFortune}>
            New Fortune
          </Button>
        </CardFooter>
      </Card>

      <Box borderWidth="1px" borderRadius="lg" p="10">
        <Text p="3">
          JSON response from Backend FortuneServer.js running on MongoDB Docker
          Container:
        </Text>
        <Code p="6" colorScheme="green" borderWidth="1px" borderRadius="lg">
          {JSON.stringify(fortune, null, 2)}
        </Code>
        <Text p="3">
          HTTP response code:
          <Code p="3" colorScheme="green" borderWidth="1px" borderRadius="lg">
            {restat}
          </Code>
        </Text>
      </Box>
    </Box>
  );
};

export default Fortune;
