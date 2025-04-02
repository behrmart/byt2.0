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

const openweatherurl =
  "https://api.openweathermap.org/data/2.5/weather?q=mexico city,mexico&units=metric&APPID=3f7179c552c03728fe2253a96fb6c079";

const Openweatherapi = () => {
  const [openweather, setOpenweather] = useState(null);
  const [restat, setStat] = useState(null);

  const kelvinToCelsius = (kelvin) => {
    return (kelvin - 273.15).toFixed(1);
  };

  const fetchData = async () => {
    console.log("OPEN WEATHER API fetch URL: ", openweatherurl);
    try {
      const response = await fetch(openweatherurl, {
        method: "GET",
      });
      const data = await response.json();
      const resStat = response.status;
      console.log(
        "OPENWEATHER response JSON DATA: ",
        data,
        "Response code: ",
        resStat
      );
      setOpenweather(data);
      setStat(resStat);
    } catch (error) {
      console.error("Error fetching openweather data", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleNewOpenweather = () => {
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
              Open Weather API
            </Heading>
          </Box>
          <Box p="2">
            <Flex>
              <Box>
                <Stack direction="column">
                  <Code colorScheme="blue">Temp:</Code>
                  <Code colorScheme="yellow">
                    {openweather && `${openweather.main.temp} °C`}
                  </Code>
                  <Code colorScheme="blue">Humidity:</Code>
                  <Code colorScheme="yellow">
                    {openweather && `${openweather.main.humidity}%`}
                  </Code>
                  <Code colorScheme="blue">Feels Like:</Code>
                  <Code colorScheme="yellow">
                    {openweather && `${openweather.main.feels_like} °C`}
                  </Code>
                  <Code colorScheme="blue">Max Temp:</Code>
                  <Code colorScheme="yellow">
                    {openweather && `${openweather.main.temp_max} °C`}
                  </Code>
                  <Code colorScheme="blue">Min Temp:</Code>
                  <Code colorScheme="yellow">
                    {openweather && `${openweather.main.temp_min} °C`}
                  </Code>
                  <Code colorScheme="blue">Pressure:</Code>
                  <Code colorScheme="yellow">
                    {openweather && `${openweather.main.pressure} hPa`}
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
            onClick={handleNewOpenweather}
          >
            New Weather Reading
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Openweatherapi;
