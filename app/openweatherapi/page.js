import Navbar from "../components/navbar/navbar";
import Fortuneapi from "../components/fortuneapi/page";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import Openweatherapi from "../components/openweatherapi/page";

export default function Openweatherwidget() {
  return (
    <>
      <Navbar />
      <Card maxW="md">
        <CardBody>
          <Openweatherapi />
        </CardBody>
      </Card>

      <Fortuneapi />
    </>
  );
}
