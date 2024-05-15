import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Link href="/dashboard">
          <p>
            byt2.0&nbsp;
            <code className={styles.code}>app/page.js</code>
          </p>
        </Link>
      </div>
    </main>
  );
}
