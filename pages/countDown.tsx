import { display } from "@mui/system";
import gsap from "gsap";
import { useEffect } from "react";

const countDown = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    gsap.fromTo(
      "#count3",
      {
        y: 220,
      },
      {
        y: 0,
        display: "block",
      }
    );
  }, []);
  return (
    <>
      <div className="coverAll">
        <div className="countDown">
          <div id="count3">3</div>
          <div id="count2">2</div>
          <div id="count1">1</div>
          <div id="countStart">start!!</div>
        </div>
      </div>
      {/* style--------------------------------------------------- */}
      <style jsx>{`
        .coverAll {
          position: fixed;
          display: flex;
          width: 100vw;
          height: 100vh;
          filter: blur(0.5);
          z-index: 100;
          flex: center;
          justify-content: center;
          align-items: center;
        }

        .countDown {
          background-color: aqua;
          width: 200px;
          height: 200px;
          z-index: 150;
          position: relative;
        }
        .countDown > div {
          width: 100px;
          text-align: center;
          position: absolute;
          color: white;
          font-size: 15vw;
        }
      `}</style>
    </>
  );
};
export default countDown;
