"use client";
import React, { useState, useEffect } from "react";

import {
  Box,
  Heading,
  Code,
  Stack,
  Flex,
  Button,
  Center,
  useToast,
  Spinner,
} from "@chakra-ui/react";

const API_KEY = "3f7179c552c03728fe2253a96fb6c079";

const Openweatherapi = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [status, setStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState(null);
  const toast = useToast();

  const fetchWeatherData = async (lat, lon) => {
    setIsLoading(true);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setWeatherData(data);
      setStatus(response.status);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching weather data", error);
      toast({
        title: "Error",
        description: "Failed to fetch weather data",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      setIsLoading(false);
    }
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lon: longitude });
          fetchWeatherData(latitude, longitude);
        },
        (error) => {
          console.error("Error getting location", error);
          toast({
            title: "Error",
            description: "Could not get your location. Using default location.",
            status: "warning",
            duration: 5000,
            isClosable: true,
          });
          // Fallback to Mexico City if location access is denied
          fetchWeatherData(19.4326, -99.1332);
        }
      );
    } else {
      toast({
        title: "Error",
        description:
          "Geolocation is not supported by your browser. Using default location.",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
      // Fallback to Mexico City if geolocation is not supported
      fetchWeatherData(19.4326, -99.1332);
    }
  };

  const handleRefresh = () => {
    if (location) {
      fetchWeatherData(location.lat, location.lon);
    } else {
      getLocation();
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <Box
      p={6}
      borderWidth="1px"
      bgGradient="linear(to-t, pink.700, green.400)"
      borderRadius="lg"
    >
      <Box p="2">
        <Heading as="h3" size="md" color="DarkMagenta">
          Open Weather API
        </Heading>
      </Box>

      {isLoading ? (
        <Center p="10">
          <Spinner size="xl" />
        </Center>
      ) : (
        <>
          <Box p="2">
            <Flex>
              <Box>
                <Stack direction="column">
                  <Code colorScheme="blue">Location:</Code>
                  <Code colorScheme="yellow">
                    {weatherData?.name}, {weatherData?.sys?.country}
                  </Code>
                  <Code colorScheme="blue">Temperature:</Code>
                  <Code colorScheme="yellow">{weatherData?.main?.temp} °C</Code>
                  <Code colorScheme="blue">Feels Like:</Code>
                  <Code colorScheme="yellow">
                    {weatherData?.main?.feels_like} °C
                  </Code>
                  <Code colorScheme="blue">Humidity:</Code>
                  <Code colorScheme="yellow">
                    {weatherData?.main?.humidity}%
                  </Code>
                  <Code colorScheme="blue">Conditions:</Code>
                  <Code colorScheme="yellow">
                    {weatherData?.weather?.[0]?.description}
                  </Code>
                </Stack>
              </Box>
            </Flex>
          </Box>

          <Code size="md" p="3" colorScheme="yellow">
            Response: {status}
          </Code>

          <Button
            colorScheme="blue"
            variant="outline"
            onClick={handleRefresh}
            isLoading={isLoading}
            loadingText="Refreshing..."
          >
            Refresh Weather
          </Button>
        </>
      )}
    </Box>
  );
};

export default Openweatherapi;
