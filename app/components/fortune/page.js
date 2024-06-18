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
          <Code size="md" color="red">
            Fortune No.: {fortune && fortune.fortune_id}
          </Code>
        </CardHeader>
        <CardBody>
          <Code size="md" p="3" color="green">
            {fortune && fortune.fortune_message}
          </Code>
        </CardBody>
        <CardFooter>
          <Button colorScheme="whiteAlpha" variant='ghost' size='md' onClick={handleNewFortune}>
            New Fortune
          </Button>
        </CardFooter>
      </Card>

    </Box>
  );
};

export default Fortune;
