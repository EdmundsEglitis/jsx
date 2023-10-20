import React, { useState, useEffect } from "react";

function AddAndSubtract(){
const [result, setResult] = useState(0);
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
      <h1>koma?</h1>
      <img src="https://t3.ftcdn.net/jpg/00/46/98/24/360_F_46982409_o4a15B6Y6NNJysmLiosWTaHjfQ5PhBfM.jpg" alt="First Image" />
      <h1>OR</h1>
      <img src="https://i.pinimg.com/originals/bf/85/8d/bf858df0a5f95a303080d4d685a47355.jpg" alt="Second Image" />
      <br></br>
      <input type="number" value={ratioChange} onChange={handleRatioChange}></input>
      <button onClick={addRatio}>+ {ratioChange}</button>
      <button onClick={addRatio2}>- {ratioChange}</button>
      <h1>{result}</h1>
    </div>
  );
}

export default AddAndSubtract;