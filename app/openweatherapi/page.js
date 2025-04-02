import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/page";
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

      <Footer />
    </>
  );
}
