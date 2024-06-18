import Navbar from "../components/navbar/navbar";
import Fortune from "../components/fortune/page";
import Link from "next/link";
import { Box } from "@chakra-ui/react";

const worldtimeurl = "http://worldtimeapi.org/api/timezone/America/Mexico_City";

export default async function Worldtimeapi() {
  const res = await fetch(worldtimeurl, { cache: "no-store" });
  const data = await res.json();
  console.log(data);

  return (
    
    <>
    <Navbar />
    <Box p='6' borderWidth='1px' borderRadius='lg'>
      <h3>WorldTimeAPI</h3>
      <div>
        <p>
          Mexico City Time:&nbsp;
          <code>{data.datetime}</code>
        </p>
      </div>
      <div >
        <p>
          Day of the week:&nbsp;
          <code >{data.day_of_week}</code>
        </p>
        <p>
          Day of the year:&nbsp;
          <code >{data.day_of_year}</code>
        </p>

        <p>
          Timezone:&nbsp;
          <code > {data.timezone}</code>
        </p>

        <p>
          UTC Offset:&nbsp;
          <code > {data.utc_offset}</code>
        </p>
        <p>
          Unix Time:&nbsp;
          <code > {data.unixtime}</code>
        </p>
        <p>
          Week Number:&nbsp;
          <code > {data.week_number}</code>
        </p>
      </div>

      <div >
        <Link href="/">
          <p>
            <code>
            byt2.0&nbsp;
            app/home</code>
          </p>
        </Link>
      </div>
      </Box>
      <Fortune />
    </>
  );
}
