import { useState } from "react";
import "./App.css";
import { Category } from "./components/category";

function App() {
  const [counter, setCounter] = useState(10);

  return (
    <div className="App">
      <h3>Counter: {counter}</h3>
      <button
        onClick={() => {
          setCounter(counter+1);
        }}
      >
        Add 1
      </button>
    </div>
  );
}
export default App;

/* 
function App() {
  const navbar = [
    {
      image:
        "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
      title: "Top Offers",
    },
    {
      image:
        "https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
      title: "Grocery",
    },
  ];

  return (
    <div className="nav">
      {navbar.map((el) => (
        <Category image={el.image} label={el.title} />
      ))}
      ;
    </div>
  );
}
export default App;
 */




