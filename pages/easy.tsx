/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { useKey } from "rooks";
import Nav from "./nav";

const easy = () => {
  let answer = 0;
  let answerIndex;
  let random = [];
  const primenum = [2, 3, 5, 7, 11];
  const [isAnswer, setAnswer] = useState();
  const [rootNum, setRootNum] = useState(0);
  const [numList, setNumList] = useState([0, 0, 0, 0]);
  const [isError, setIsError] = useState<Boolean[]>([
    false,
    false,
    false,
    false,
  ]);

  useKey("ArrowUp", () => {
    console.log("Up");
    errorCheck(0);
    console.log(isError);
  });
  useKey("ArrowRight", () => {
    console.log("Right");
    errorCheck(1);
  });
  useKey("ArrowDown", () => {
    console.log("Down");
    errorCheck(2);
  });
  useKey("ArrowLeft", () => {
    console.log("Left");
    errorCheck(3);
  });
  const errorCheck = (thisIndex) => {
    if (isAnswer === thisIndex) {
    } else {
      setIsError(
        isError.map((error, index) => (index === thisIndex ? true : error))
      );
    }
  };

  const upDateStates = (random, root) => {
    setNumList(random);
    setRootNum(root);
    setIsError([false, false, false, false]);
    setAnswer(answerIndex);
    console.log(answerIndex);
  };

  //1スタートランダム整数
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max) + 1;
  };

  //値の更新
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
  useEffect(() => {}, []);

  return (
    <>
      <section>
        <Nav></Nav>
        <div className="cover">
          <button onClick={upDateAllNum}> update</button>
          <div id="box1" className="block">
            {rootNum}
          </div>
          <div id="box2" className={isError[0] ? "block miss" : "block"}>
            {numList[0]}
          </div>
          <div id="box3" className={isError[1] ? "block miss" : "block"}>
            {numList[1]}
          </div>
          <div id="box4" className={isError[2] ? "block miss" : "block"}>
            {numList[2]}
          </div>
          <div id="box5" className={isError[3] ? "block miss" : "block"}>
            {numList[3]}
          </div>
        </div>
        {/* style----------------------------------------------------------------------------------------------------------------------------------------------- */}
        <style jsx>{`
          .cover {
            width: 800px;
            height: 800px;
            margin: 30px auto;
            position: relative;
          }
          .block {
            display: flex;
            position: absolute;
            width: 25%;
            height: 25%;
            border-radius: 20%;
            background-color: rgb(0, 128, 255);
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
          .miss {
            background-color: red;
          }
        `}</style>
      </section>
    </>
  );
};
export default easy;
