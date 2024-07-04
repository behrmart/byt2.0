import Navbar from "../components/navbar/navbar";
import Fortune from "../components/fortune/page";
import Worldtimeapi from "../components/worldtimeapi/page";

export default function Worldtime() {
  return (
    <>
      <Navbar />

      <Worldtimeapi />

      <Fortune />
    </>
  );
}
