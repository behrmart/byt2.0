import Navbar from "../navbar/navbar";
import Fortune from "../footer/page";
import Worldtimeapi from "../worldtimeapi/page";

export default function Worldtime() {
  return (
    <>
      <Navbar />

      <Worldtimeapi />

      <Fortune />
    </>
  );
}
