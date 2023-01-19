import { duration } from "@mui/material";
import { display } from "@mui/system";
import gsap from "gsap";
import { useEffect } from "react";

const countDown = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    var tl = gsap.timeline({});

    tl.fromTo(
      "#count3",
      {
        y: -320,
      },
      {
        y: 0,
        display: "block",
      }
    );
    tl.to("#count3", { display: "none", duration: 1 });
    tl.fromTo(
      "#count2",
      {
        y: -320,
      },
      {
        y: 0,
        display: "block",
      }
    );
    tl.to("#count2", { display: "none", duration: 1 });
    tl.fromTo(
      "#count1",
      {
        y: -320,
      },
      {
        y: 0,
        display: "block",
      }
    );
    tl.to("#count1", { display: "none", duration: 1 });
    tl.fromTo(
      "#countStart",
      {
        y: -320,
      },
      {
        y: 0,
        display: "block",
      }
    );
    tl.to("#countStart", { display: "none", duration: 1 });
    tl.to(".coverAll", { display: "none", duration: 0 });
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
          z-index: 100;
          flex: center;
          justify-content: center;
          align-items: center;
          backdrop-filter: blur(6px);
        }

        .countDown {
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 150;
          position: relative;
        }
        .countDown > div {
          width: 100px;
          position: absolute;
          color: white;
          font-size: 15vw;
          display: flex;
          align-items: center;
          justify-content: center;
          display: none;
        }
      `}</style>
    </>
  );
};
export default countDown;
