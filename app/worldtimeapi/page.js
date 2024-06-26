import Navbar from "../components/navbar/navbar";
import Fortune from "../components/fortune/page";
import Link from "next/link";
import { Box, Heading, Code, Stack } from "@chakra-ui/react";

const worldtimeurl = "http://worldtimeapi.org/api/timezone/America/Mexico_City";

export default async function Worldtimeapi() {
  const res = await fetch(worldtimeurl, { cache: "no-store" });
  const data = await res.json();
  console.log(data);

  return (
    <>
      <Navbar />
      <Box p="6" borderWidth="1px" borderRadius="lg">
        <Heading as="h3" size="md" color="deeppink">
          WorldTimeAPI
        </Heading>
        <Code colorScheme="red">
          API URL = http://worldtimeapi.org/api/timezone/America/Mexico_City
        </Code>
        <Box p="4">
          <Stack direction="row">
            <Code colorScheme="blue">Mexico City Time:</Code>
            <Code colorScheme="yellow">{data.datetime}</Code>
          </Stack>
          <Stack direction="row">
            <Code colorScheme="blue">Day of the week:</Code>
            <Code colorScheme="yellow">{data.day_of_week}</Code>
          </Stack>
          <Stack direction="row">
            <Code colorScheme="blue">Day of the year:</Code>
            <Code colorScheme="yellow">{data.day_of_year}</Code>
          </Stack>
          <Stack direction="row">
            <Code colorScheme="blue">Timezone:</Code>
            <Code colorScheme="yellow">{data.timezone}</Code>
          </Stack>
          <Stack direction="row">
            <Code colorScheme="blue">UTC Offset:</Code>
            <Code colorScheme="yellow">{data.offset}</Code>
          </Stack>
          <Stack direction="row">
            <Code colorScheme="blue">Unix Time:</Code>
            <Code colorScheme="yellow">{data.unixtime}</Code>
          </Stack>
          <Stack direction="row">
            <Code colorScheme="blue">Week Number:</Code>
            <Code colorScheme="yellow">{data.week_number}</Code>
          </Stack>
        </Box>
      </Box>
      <Fortune />
    </>
  );
}
