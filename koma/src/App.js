import AddAndSubtract from "./AddAndSubtract";
import Hello from "./Hello";

function App() {
  const vardi=["gustavs","debilsEmils","Edvardc"]
  const hihihi = vardi.map(vardi => vardi + " ")
  return (

    <>
    <div className="App">
      <h1>koma?</h1>
      <img src="https://t3.ftcdn.net/jpg/00/46/98/24/360_F_46982409_o4a15B6Y6NNJysmLiosWTaHjfQ5PhBfM.jpg" alt="First Image" />
      <h1>OR</h1>
      <img src="https://i.pinimg.com/originals/bf/85/8d/bf858df0a5f95a303080d4d685a47355.jpg" alt="Second Image" />
      <br></br>

      <AddAndSubtract/>

      <Hello/>

      
      <p>hello, {hihihi}</p>

    </div>
    </>
  );
}

export default App;