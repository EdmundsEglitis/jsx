import {useState} from "react";

 
function App() {
  const [result, setResult] = useState(0);

  function addRatio() {
    setResult(result + 1);
    console.log(result)
  }
  return (
    <div className="App">
      <h1>koma?</h1>
      <img src="https://t3.ftcdn.net/jpg/00/46/98/24/360_F_46982409_o4a15B6Y6NNJysmLiosWTaHjfQ5PhBfM.jpg"/>
      <h1>OR</h1>
      
      <img src="https://i.pinimg.com/originals/bf/85/8d/bf858df0a5f95a303080d4d685a47355.jpg"/>
      <br></br>
      <input type="text"></input> 
      <button onClick={addRatio}>+1</button> 
  <h1>{result}</h1>
      <br></br>
     <img src="https://static.wixstatic.com/media/eecae0_b9a550b6747e43b38ef1aae573a1af14~mv2.jpg/v1/fill/w_640,h_360,al_c,lg_1,q_80,enc_auto/eecae0_b9a550b6747e43b38ef1aae573a1af14~mv2.jpg" width="200"/>
    </div>
  );
}

export default App;
