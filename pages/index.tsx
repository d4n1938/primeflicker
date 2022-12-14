import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Nav from "./nav";

export default function Home() {
  return (
    <>
      <Nav></Nav>
      <section>
        <h1>素因数フリッカー</h1>
        <div className="Link">
          <Link href="/gamemode">start</Link>
        </div>
        <style jsx>
          {`
            * {
              margin: 40px;
            }
            section {
              margin: 0 auto;
            }
            h1 {
              text-align: center;
            }
            .Link {
              text-align: center;
            }
          `}
        </style>
      </section>
    </>
  );
}
