"use client";
import React, { useState, useEffect } from "react";

import {
  Box,
  Heading,
  Code,
  Stack,
  Flex,
  Center,
  Button,
} from "@chakra-ui/react";

const worldtimeurl = "http://worldtimeapi.org/api/timezone/America/Mexico_City";

const Worldtimeapi = () => {
  const [worldtime, setWorldtime] = useState(null);
  const [restat, setStat] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(worldtimeurl, {
        method: "GET",
      });
      const data = await response.json();
      const resStat = response.status;
      console.log("WORLDTIME JSON DATA: ", data, "Response code: ", resStat);
      setWorldtime(data);
      setStat(resStat);
    } catch (error) {
      console.error("Error fetching worldtime data", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleNewWorldtime = () => {
    fetchData();
  };

  return (
    <>
      <Box
        p={6}
        borderWidth="1px"
        bgGradient="linear(to-t, pink.700, green.400)"
        borderRadius="lg"
      >
        <Box>
          <Box p="2">
            <Heading as="h3" size="md" color="DarkMagenta">
              WorldTimeAPI
            </Heading>
          </Box>
          <Box p="2">
            <Flex>
              <Box>
                <Stack direction="column">
                  <Code colorScheme="blue">Mexico City Time:</Code>
                  <Code colorScheme="yellow">
                    {worldtime && worldtime.datetime}
                  </Code>
                  <Code colorScheme="blue">Day of the week:</Code>
                  <Code colorScheme="yellow">
                    {worldtime && worldtime.day_of_week}
                  </Code>
                  <Code colorScheme="blue">Day of the year:</Code>
                  <Code colorScheme="yellow">
                    {worldtime && worldtime.day_of_year}
                  </Code>
                  <Code colorScheme="blue">Timezone:</Code>
                  <Code colorScheme="yellow">
                    {worldtime && worldtime.timezone}
                  </Code>
                  <Code colorScheme="blue">Unix Time:</Code>
                  <Code colorScheme="yellow">
                    {worldtime && worldtime.unixtime}
                  </Code>
                  <Code colorScheme="blue">Week Number:</Code>
                  <Code colorScheme="yellow">
                    {worldtime && worldtime.week_number}
                  </Code>
                </Stack>
              </Box>
            </Flex>
          </Box>
          <Code size="md" p="3" colorScheme="yellow">
            Response: {restat}
          </Code>
          <Button
            colorScheme="blue"
            variant="outline"
            onClick={handleNewWorldtime}
          >
            New Worldtime
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Worldtimeapi;

/* export default async function Worldtimeapi() {
  const res = await fetch(worldtimeurl, { cache: "no-store" });
  const data = await res.json();
  console.log(data);

  return (
    <>
      <Box>
        <Box p="2">
          <Heading as="h3" size="md" color="deeppink" py="1">
            WorldTimeAPI
          </Heading>
          <Code colorScheme="red">
            <a
              target="_blank"
              href="http://worldtimeapi.org/api/timezone/America/Mexico_City"
            >
              API URL = http://worldtimeapi.org/api/timezone/America/Mexico_City
            </a>
          </Code>
        </Box>
        <Box p="2">
          <Flex>
            <Box>
              <Stack direction="column">
                <Code colorScheme="blue">Mexico City Time:</Code>
                <Code colorScheme="blue">Day of the week:</Code>
                <Code colorScheme="blue">Day of the year:</Code>
                <Code colorScheme="blue">Timezone:</Code>
                <Code colorScheme="blue">Unix Time:</Code>
                <Code colorScheme="blue">Week Number:</Code>
              </Stack>
            </Box>

            <Box>
              <Stack direction="column">
                <Code colorScheme="yellow">{data.datetime}</Code>
                <Code colorScheme="yellow">{data.day_of_week}</Code>
                <Code colorScheme="yellow">{data.day_of_year}</Code>
                <Code colorScheme="yellow">{data.timezone}</Code>
                <Code colorScheme="yellow">{data.unixtime}</Code>
                <Code colorScheme="yellow">{data.week_number}</Code>
              </Stack>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
 */
