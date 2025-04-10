// pages/Fortune.js
"use client";
import React, { useState, useEffect } from "react";

import { Code, Button, Stack, Box, Center } from "@chakra-ui/react";

const Fortuneapi = () => {
  const [fortune, setFortune] = useState(null);
  const [restat, setStat] = useState(null);

  const fortuneURL = "http://192.168.100.23:3001/fortune/random";

  const fetchData = async () => {
    console.log("FORTUNE API fetch URL:", fortuneURL);
    try {
      const response = await fetch(fortuneURL, {
        method: "GET",
      });

      const data = await response.json();
      const resStat = response.status;
      console.log(
        "FORTUNE response JSON data: ",
        data,
        "Response code: ",
        resStat
      );
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
    <Stack direction="column">
      <Box borderWidth="1px" borderRadius="lg">
        <Stack direction="row">
          <Box>
            <Code size="md" p="3" colorScheme="red">
              Fortune No.: {fortune && fortune.fortune_id}
            </Code>

            <Code size="md" p="3" colorScheme="green">
              {fortune && fortune.fortune_message}
            </Code>
            <Code size="md" p="3" colorScheme="yellow">
              Response: {restat}
            </Code>
          </Box>
        </Stack>
      </Box>
      <Button colorScheme="red" variant="outline" onClick={handleNewFortune}>
        New Fortune
      </Button>
    </Stack>
  );
};

export default Fortuneapi;
