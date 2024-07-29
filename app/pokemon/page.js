import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/page";
import Pokeapi from "../components/pokemonapi/page";

import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";

export default function Pokemonwidget() {
  return (
    <>
      <Navbar />
      <Card maxW="md">
        <CardBody>
          <Pokeapi />
        </CardBody>
      </Card>

      <Footer />
    </>
  );
}
