import styles from "./page.module.css";
import Link from "next/link";
import Fortune from "./components/fortune/page";
// import { AuthProvider } from "./context/authcontext";

export default function Home() {
  return (
    //<AuthProvider>
      <main className={styles.main}>
        <div className={styles.description}>
          <Link href="/worldtimeapi">
            <p>
              byt2.0&nbsp;
              <code className={styles.code}>worldtimeapi</code>
            </p>
          </Link>
        </div>
        <div className={styles.description}>
          <Link href="/dashboard">
            <p>
              byt2.0&nbsp;
              <code className={styles.code}>dashboard</code>
            </p>
          </Link>
        </div>
        <Fortune></Fortune>
      </main>
    //</AuthProvider>
  );
}
