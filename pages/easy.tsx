/* eslint-disable react-hooks/rules-of-hooks */
import gsap from "gsap";
import React, { useEffect, useState } from "react";
import { useKey } from "rooks";
import Nav from "./nav";
import CountDown from "./countDown";

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

  // key event
  useKey("ArrowUp", () => {
    errorCheck(0);
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
  // event judge
  const errorCheck = (thisIndex) => {
    if (isAnswer == thisIndex) {
      console.log("correct answer");
      upDateAllNum();
    } else {
      setIsError(
        isError.map((error, index) => (index === thisIndex ? true : error))
      );
    }
  };

  //set all states
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

  const getRandomIntWithoutAnswerRoot = (max) => {
    let flag = true;
    let sub;
    console.log(answer);

    while (flag) {
      sub = Math.floor(Math.random() * max) + 1;
      console.log(sub + "  " + answer);

      if (!primenum.includes(sub)) {
        flag = false;
      }
    }

    return sub;
  };

  //値の更新
  const upDateAllNum = () => {
    random = [];
    let root = primenum[getRandomInt(5 - 1)];
    answer = root * (getRandomInt(9) + 1);
    answerIndex = getRandomInt(4 - 1);
    for (let i = 0; i < 4; i++) {
      if (i === answerIndex) {
        random[i] = answer;
      } else {
        let subRandom =
          getRandomInt(2) - 1
            ? answer - getRandomIntWithoutAnswerRoot(4)
            : answer + getRandomIntWithoutAnswerRoot(4);
        if (random.includes(subRandom)) {
          i--;
        } else {
          random[i] = subRandom;
        }
      }
    }
    upDateStates(random, root);
  };

  useEffect(() => {
    gsap.fromTo(
      ".miss",
      {
        y: 15,
      },
      { y: 0 }
    );
  }, [errorCheck]);

  return (
    <>
      <section>
        <CountDown></CountDown>

        <Nav></Nav>
        <div className="cover">
          <button onClick={upDateAllNum}> update</button>
          <div id="box1" className="block">
            {rootNum}
          </div>
          <div
            id="box2"
            className={isError[0] ? "block miss" : "block"}
            onClick={() => errorCheck(0)}
          >
            {numList[0]}
          </div>
          <div
            id="box3"
            className={isError[1] ? "block miss" : "block"}
            onClick={() => errorCheck(1)}
          >
            {numList[1]}
          </div>
          <div
            id="box4"
            className={isError[2] ? "block miss" : "block"}
            onClick={() => errorCheck(2)}
          >
            {numList[2]}
          </div>
          <div
            id="box5"
            className={isError[3] ? "block miss" : "block"}
            onClick={() => errorCheck(3)}
          >
            {numList[3]}
          </div>
        </div>
        {/* style----------------------------------------------------------------------------------------------------------------------------------------------- */}
        <style jsx>{`
          .cover {
            width: 600px;
            height: 600px;
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
            background-color: green;
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
