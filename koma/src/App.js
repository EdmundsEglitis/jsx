import AddAndSubtract from "./AddAndSubtract";
import Hello from "./Hello";

function App() {
  const allNames = ["Jēkabs", "Markuss", "Klucis"];
  const gangRatios = [7,43,101];


  const helloJSX = allNames.map((name, index) => {
    return <Hello key={index} name={name} />;
  });

  const gangsta = gangRatios.map((ratio, index) => {
    return <AddAndSubtract key={index} value={ratio} />;
  });
  return (

    <>
    <div className="App">
      <h1>koma?</h1>
      <img src="https://t3.ftcdn.net/jpg/00/46/98/24/360_F_46982409_o4a15B6Y6NNJysmLiosWTaHjfQ5PhBfM.jpg" alt="First Image" />
      <h1>OR</h1>
      <img src="https://i.pinimg.com/originals/bf/85/8d/bf858df0a5f95a303080d4d685a47355.jpg" alt="Second Image" />
      <br></br>

      {helloJSX}
      {gangsta}
    </div>
    </>
  );
}

export default App;