import Navbar from "../components/navbar/navbar";
import Fortuneapi from "../components/fortuneapi/page";
import Worldtimeapi from "../components/worldtimeapi/page";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";

export default function Worldtime() {
  return (
    <>
      <Navbar />
      <Card maxW="lg">
        <CardBody>
          <Worldtimeapi />
        </CardBody>
      </Card>
      <Fortuneapi />
    </>
  );
}
