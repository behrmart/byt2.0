// pages/Fortune.js
"use client";
import React, { useState, useEffect } from "react";

import { Code, Button, Stack, Box, Center } from "@chakra-ui/react";

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
    <Box borderWidth="1px" borderRadius="lg">
      <Stack direction="row">
        <Code size="md" p="3" colorScheme="red">
          Fortune No.: {fortune && fortune.fortune_id}
        </Code>

        <Code size="md" p="3" colorScheme="green">
          {fortune && fortune.fortune_message}
        </Code>
        <Button colorScheme="yellow" variant="link" onClick={handleNewFortune}>
          New Fortune
        </Button>
      </Stack>
    </Box>
  );
};

export default Fortune;
