import { Box, Heading, Code, Stack, Flex, Center } from "@chakra-ui/react";

const worldtimeurl = "http://worldtimeapi.org/api/timezone/America/Mexico_City";

export default async function Worldtimeapi() {
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
