import Navbar from "../components/navbar/navbar";
import Footer from "../components/fortuneapi/page";
import Catapi from "../components/catapi/page";

import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";

export default function Catwidget() {
  return (
    <>
      <Navbar />
      <Card maxW="md">
        <CardBody>
          <Catapi />
        </CardBody>
      </Card>
      <Footer />
    </>
  );
}
