/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import Nav from "./nav";

const easy = () => {
  let random = [];
  const primenum = [2, 3, 5, 7, 11];
  const [rootNum, setRootNum] = useState(0);
  const [numList, setNumList] = useState([0, 0, 0, 0]);

  const listUp = (random) => {
    const list = random;
    setNumList(list);
  };

  function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
  }

  const upDateAllNum = () => {
    setRootNum(primenum[getRandomInt(5 - 1)]);
    for (let i = 0; i < 4; i++) {
      random[i] = getRandomInt(9);
      listUp(random);
    }
  };
  return (
    <>
      <Nav></Nav>
      <div className="cover">
        <button onClick={upDateAllNum}> update</button>
        <div id="box1">{rootNum}</div>
        <div id="box2">{numList[0]}</div>
        <div id="box3">{numList[1]}</div>
        <div id="box4">{numList[2]}</div>
        <div id="box5">{numList[3]}</div>
      </div>
      {/* style----------------------------------------------------------------------------------------------------------------------------------------------- */}
      <style jsx>{`
        .cover {
          background-color: rgb(0, 97, 97);
          width: 40vw;
          height: 40vw;
          margin: 100px auto;
          position: relative;
        }
        .cover > div {
          position: absolute;
          width: 20%;
          height: 20%;
          background-color: rgb(111, 2, 2);
        }
        #box1 {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        #box2 {
          top: 20%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        #box3 {
          top: 50%;
          left: 80%;
          transform: translate(-50%, -50%);
        }
        #box4 {
          top: 80%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        #box5 {
          top: 50%;
          left: 20%;
          transform: translate(-50%, -50%);
        }
      `}</style>
    </>
  );
};
export default easy;
