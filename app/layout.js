import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "byt2.0",
  description: "byt2.0",
};

export default async function RootLayout({ children }) {
  const res = await fetch(
    "http://worldtimeapi.org/api/timezone/America/Mexico_City",
    { cache: "no-store" }
  );
  const data = await res.json();
  console.log(data);

  return (
    <html lang="en">
      <body className={inter.className}>
        <p> Mexico City Time: {data.datetime}</p>
        {children}
      </body>
    </html>
  );
}
