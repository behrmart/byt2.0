"use client";
import React, { useState, useEffect } from "react";

import {
  Box,
  Heading,
  Code,
  Stack,
  Flex,
  Button,
  useToast,
  Spinner,
  Text,
} from "@chakra-ui/react";

const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHERKEY;

const Openweatherapi = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [status, setStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [locationError, setLocationError] = useState(null);

  const toast = useToast();

  const fetchWeatherData = async (lat, lon) => {
    setIsLoading(true);
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();
      setWeatherData(data);
      setStatus(response.status);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      toast({
        title: "Weather Data Error",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getLocation = () => {
    setLocationError(null);

    if (!navigator.geolocation) {
      const error = "Geolocation is not supported by your browser";
      setLocationError(error);
      toast({
        title: "Location Error",
        description: error,
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
      // Default to Mexico City coordinates
      fetchWeatherData(19.4326, -99.1332);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchWeatherData(latitude, longitude);
      },
      (error) => {
        let errorMessage;
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage =
              "Location permission denied. Using default location.";
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = "Location information unavailable.";
            break;
          case error.TIMEOUT:
            errorMessage = "Location request timed out.";
            break;
          default:
            errorMessage = "Unknown location error occurred.";
        }

        setLocationError(errorMessage);
        toast({
          title: "Location Error",
          description: errorMessage,
          status: "warning",
          duration: 5000,
          isClosable: true,
        });
        // Default to Mexico City coordinates
        fetchWeatherData(19.4326, -99.1332);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000, // 10 seconds
        maximumAge: 0, // Don't use cached position
      }
    );
  };

  const handleRefresh = () => {
    getLocation();
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <Box
      p={6}
      borderWidth="1px"
      bgGradient="linear(to-t, pink.700, purple.400)"
      borderRadius="lg"
    >
      <Box p="2">
        <Heading as="h3" size="md" color="DarkMagenta">
          Open Weather API
        </Heading>
        {locationError && (
          <Text color="red.500" fontSize="sm" mt={2}>
            {locationError}
          </Text>
        )}
      </Box>

      {isLoading ? (
        <Flex justify="center" p="10">
          <Spinner size="xl" />
        </Flex>
      ) : (
        <>
          <Box p="2">
            <Flex>
              <Box>
                <Stack direction="column">
                  <Code colorScheme="blue">Location:</Code>
                  <Code colorScheme="yellow">
                    {weatherData?.name || "Unknown location"},{" "}
                    {weatherData?.sys?.country || "N/A"}
                  </Code>
                  <Code colorScheme="blue">Temperature:</Code>
                  <Code colorScheme="yellow">
                    {weatherData?.main?.temp
                      ? `${weatherData.main.temp} °C`
                      : "N/A"}
                  </Code>
                  <Code colorScheme="blue">Conditions:</Code>
                  <Code colorScheme="yellow">
                    {weatherData?.weather?.[0]?.description || "N/A"}
                  </Code>
                </Stack>
              </Box>
            </Flex>
          </Box>

          <Button
            colorScheme="blue"
            variant="outline"
            onClick={handleRefresh}
            isLoading={isLoading}
            loadingText="Refreshing..."
            mt={4}
          >
            Refresh Weather
          </Button>
        </>
      )}
    </Box>
  );
};

export default Openweatherapi;
