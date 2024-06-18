
import Link from "next/link";
import Fortune from "./components/fortune/page";
// import { AuthProvider } from "./context/authcontext";

export default function Home() {
  return (
    //<AuthProvider>
      <main >
        <div>
          <Link href="/worldtimeapi">
            <p>
              byt2.0&nbsp;
              <code>worldtimeapi</code>
            </p>
          </Link>
        </div>
        <div >
          <Link href="/dashboard">
            <p>
              byt2.0&nbsp;
              <code>dashboard</code>
            </p>
          </Link>
        </div>
        <Fortune></Fortune>
      </main>
    //</AuthProvider>
  );
}
