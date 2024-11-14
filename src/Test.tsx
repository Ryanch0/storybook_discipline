import React from "react";
import { useState } from "react";

const Test = () => {
    const [count, setCount] = useState(0);
    const generalOnclick = () => {
        setCount(count +1)
        setCount(count +1)
        setCount(count +0)
    }

    const functionalOnclick = () => {
        setCount(prev => prev + 1)
        setCount(prev => prev + 1)
        setCount(prev => prev + 1)
    }
    
  return (
    <div>
      <p>{count}</p>
      <button onClick={generalOnclick}>일반업데이트</button>
      <button onClick={functionalOnclick}>함수업데이트</button>
    </div>
  );
};

export default Test;
