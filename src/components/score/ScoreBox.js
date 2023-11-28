import { useContext } from "react";
import ScoresContext from "@/store/scores";

import { useState, useEffect } from "react";
import { data } from "@/data/data.js";

import Image from "next/image";

function ScoreBox() {
  const { scores, _ } = useContext(ScoresContext);
  let subject = {};

  const [currentScore, setCurrentScore] = useState(null);
  const [scoreTitle, setScoreTitle] = useState(null);

  useEffect(() => {
    setScoreTitle(scores[scores.length - 1][0].toLowerCase());
    setCurrentScore(scores[scores.length - 1][1]);
  }, []);

  for (const property in data) {
    if (property === scoreTitle) subject = data[property];
  }

  return (
    <div>
      <h2>
        <div style={{ backgroundColor: subject.color }}>
          <img src={subject.icon} alt="" width={28} height={28} />
        </div>
        <span>{subject.title}</span>
      </h2>

      <p>{currentScore}</p>
      <p>out of 10</p>
    </div>
  );
}

export default ScoreBox;