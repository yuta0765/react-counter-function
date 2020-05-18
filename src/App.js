import React, { useState } from "react";
import styled from "styled-components";

const App = () => {
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount(count + 1);
  };

  const minus = () => {
    setCount(count - 1);
  };

  const Wrapper = styled.div`
    text-align: center;
  `;

  return (
    <Wrapper>
      <h1>カウンター</h1>
      <p>{count}</p>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
    </Wrapper>
  );
};

export default App;
