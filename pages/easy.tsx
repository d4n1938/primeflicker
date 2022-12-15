/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import Nav from "./nav";

const easy = () => {
  let answer;
  let answerIndex;
  let random = [];
  const primenum = [2, 3, 5, 7, 11];
  const [rootNum, setRootNum] = useState(0);
  const [numList, setNumList] = useState([0, 0, 0, 0]);

  const upDateStates = (random, root) => {
    setNumList(random);
    setRootNum(root);
  };

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max) + 1;
  };

  const upDateAllNum = () => {
    let root = primenum[getRandomInt(5 - 1)];
    answer = root * (getRandomInt(9) + 1);
    answerIndex = getRandomInt(4 - 1);
    for (let i = 0; i < 4; i++) {
      if (i === answerIndex) {
        random[i] = answer;
      } else {
        random[i] =
          getRandomInt(2) - 1
            ? answer - getRandomInt(3)
            : answer + getRandomInt(3);
      }
    }
    upDateStates(random, root);
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
          width: 800px;
          height: 800px;
          margin: 30px auto;
          position: relative;
        }
        .cover > div {
          display: flex;
          position: absolute;
          width: 25%;
          height: 25%;
          background-color: rgb(0, 128, 255);
          border-radius: 20%;
          align-items: center;
          justify-content: center;
          font-size: 5vw;
        }
        #box1 {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        #box2 {
          top: 0%;
          left: 50%;
          transform: translate(-50%, 0%);
        }
        #box3 {
          top: 50%;
          right: 0%;
          transform: translate(0%, -50%);
        }
        #box4 {
          bottom: 0%;
          left: 50%;
          transform: translate(-50%, 0%);
        }
        #box5 {
          top: 50%;
          left: 0%;
          transform: translate(0%, -50%);
        }
      `}</style>
    </>
  );
};
export default easy;
