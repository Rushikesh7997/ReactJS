import "./App.css";

function App() {
  const food = "Pizza";
  const age = "19";
  const arr1 = ["Android", "Blackberry", "iphone", "Windows Phone"];
  const arr2 = ["Samsung", "HTC", "Micromax", "Apple"]
  return (
    <div className="App">
      <div>
        <ul>
          <h2>Mobile Operating System</h2>
          {arr1.map((e) => {
            return <li><Skill arr1={e}/> </li>;
          })}
        </ul>
        <ul>
          <h2>Mobile Manufacturers</h2>
          {arr2.map((e) => {
            return <li><Skillss arr2={e}/> </li>;
          })}
        </ul>
      </div>
    </div>
  );
}

function Skill (props){
  return <p> {props.arr1} </p>
}
function Skillss (props){
  return <p> {props.arr2} </p>
}

export default App;



{/* <li>{e}</li> */}
