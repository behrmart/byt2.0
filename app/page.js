import Image from "next/image";
import styles from "./page.module.css";
import videojs from "video.js";
import "video.js/dist/video-js.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          byt2.0&nbsp;
          <code className={styles.code}>app/page.js</code>
        </p>
      </div>
    </main>
  );
}
