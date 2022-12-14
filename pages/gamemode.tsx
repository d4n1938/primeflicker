import Link from "next/link";
import easy from "./easy";
import Nav from "./nav";

const gamemode = () => {
  return (
    <>
      <Nav></Nav>
      <section>
        <h2>game mode</h2>
        <div>
          <button>
            <Link href={"/easy"}>初級</Link>
          </button>
        </div>
        <div>
          <button>中級</button>
        </div>
        <div>
          <button>上級</button>
        </div>
        <div className="Link">
          <Link href={"/"}>戻る</Link>
        </div>
      </section>
      {/* style--------------------------------------------------- */}
      <style jsx>{`
        * {
          margin: 40px;
        }
        section {
          margin: 0 auto;
        }
        h2 {
          text-align: center;
        }
        div {
          text-align: center;
          margin: 0 auto;
        }
      `}</style>
    </>
  );
};
export default gamemode;
