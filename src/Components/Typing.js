import React, { useState } from "react";
let keyChar = 0;

const Typing = () => {
  const [timing, setTiming] = useState(15);
  const [words, setWords] = useState("");
  const [key, setKey] = useState(0);
  let text =
    "hide order led memory lift though dull gulf plates deer customs orbit began upward nuts natural tell hearing oldest visitor catch stove cotton syllable yourself blood sold level family until reader however buy although future ran double mad seed effort useful section strength strength previous silver system country identity gently";
  

  function handleTypeing(e) {
    let value = e.target.value;
    console.log(words)
    setWords(value);
    console.log(text.charAt(key))
    if(value[value.length -1] === text.charAt(key)) {
      setKey(key+1);
    } else {
    }
  }

  return (
    <div className="typing-sec">
      <div className="top-bar">
        <div>{timing}</div>
        <div>
          <button onClick={() => setTiming(15)}>15</button>
          <button onClick={() => setTiming(30)}>30</button>
          <button onClick={() => setTiming(60)}>60</button>
        </div>
      </div>
      <div className="type-box">
        {text.split("").map((char) => (
          <span key={"char" + keyChar++}>{char}</span>
        ))}
      </div>
      <div>
        <input type="text" className="type-input" name="input" onChange={handleTypeing}/>
      </div>
      <div className="function">
        <div className="row-1">
          <button className="refresh-btn">refresh</button>
        </div>
        <div className="row-2">
          <button>esc</button>
          <span>-</span>
          <span>reset</span>
        </div>
        <div className="row-3">
          <button>10</button>
          <button>50</button>
          <button>80</button>
          <button>100</button>
          <span>-</span>
          <span>no. of words</span>
        </div>
      </div>
    </div>
  );
};

export default Typing;
