import React, { useState, useEffect } from "react";

function AddAndSubtract(props){
const [result, setResult] = useState(props.value);
const [ratioChange, setRatioChange] = useState(1);

/*
  useEffect(() => {
    console.log("Ratio changed:", ratioChange);
  }, [ratioChange]);
*/
  function addRatio() {
    setResult(result + parseInt(ratioChange));
  }

  function addRatio2() {
    setResult(result - ratioChange);
  }

  function handleRatioChange(kakis) {
    setRatioChange(parseInt(kakis.target.value, 10));
  }

  return (
    <div className="App">

      <input type="number" value={ratioChange} onChange={handleRatioChange}></input>
      <button onClick={addRatio}>+ {ratioChange}</button>
      <button onClick={addRatio2}>- {ratioChange}</button>
      <h1>{result}</h1>
    </div>
  );
}

export default AddAndSubtract;