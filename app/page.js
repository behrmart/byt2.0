
import Link from "next/link";
import Fortune from "./components/fortune/page";
import { Button } from "@chakra-ui/react";
import Navbar from "./components/navbar/navbar";


// import { AuthProvider } from "./context/authcontext";



export default function Home() {

  return (
    //<AuthProvider>
      <main>
        <Navbar></Navbar>
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
