import styles from "../page.module.css";
import Link from "next/link";

const worldtimeurl = "http://worldtimeapi.org/api/timezone/America/Mexico_City";

export default async function Worldtimeapi() {
  const res = await fetch(worldtimeurl, { cache: "no-store" });
  const data = await res.json();
  console.log(data);

  return (
    <>
      <h3>WorldTimeAPI</h3>
      <div className={styles.description}>
        <p>
          Mexico City Time:&nbsp;
          <code className={styles.code}>{data.datetime}</code>
        </p>
      </div>
      <div className={styles.description}>
        <p>
          Day of the week:&nbsp;
          <code className={styles.code}>{data.day_of_week}</code>
        </p>
        <p>
          Day of the year:&nbsp;
          <code className={styles.code}>{data.day_of_year}</code>
        </p>

        <p>
          Timezone:&nbsp;
          <code className={styles.code}> {data.timezone}</code>
        </p>

        <p>
          UTC Offset:&nbsp;
          <code className={styles.code}> {data.utc_offset}</code>
        </p>
        <p>
          Unix Time:&nbsp;
          <code className={styles.code}> {data.unixtime}</code>
        </p>
        <p>
          Week Number:&nbsp;
          <code className={styles.code}> {data.week_number}</code>
        </p>
      </div>

      <div className={styles.description}>
        <Link href="/">
          <p>
            byt2.0&nbsp;
            <code className={styles.code}>app/home</code>
          </p>
        </Link>
      </div>
    </>
  );
}
