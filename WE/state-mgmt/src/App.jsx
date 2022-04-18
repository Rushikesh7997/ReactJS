import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [scr, setScr] = useState(76);
  const [wckt, setWckt] = useState(2);
  const [ovr, setOvr] = useState(50);

  if (scr > 100) {
    var status = "India Won";
  }
  const handle = () => {
    if (wckt >= 12) {
      return;
    }
    return setWckt(wckt + 1);
  };

  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{scr}
          <h1 className="scoreCount">
            {
              // show "score" here
            }
          </h1>
        </div>
        <div>
          Wicket:{wckt}
          <h1 className="wicketCount">
            {
              // show wicket here
            }
          </h1>
        </div>

        <div>
          Over:{ovr}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button
          className="addScore1"
          onClick={() => {
            if (wckt < 12) {
              return;
            }
            setScr(scr + 1);
          }}
        >
          Add 1
        </button>
        <button
          className="addScore4"
          onClick={() => {
            setScr(scr + 4);
          }}
        >
          Add 4
        </button>
        <button
          className="addScore6"
          onClick={() => {
            setScr(scr + 6);
          }}
        >
          Add 6
        </button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={handle}>Add 1 wickets ohhh hhhh</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button
          onClick={() => {
            setOvr(ovr + 1);
          }}
        >
          Add 1
        </button>
      </div>

      <h1 className="status">{status}</h1>
    </div>
  );
}

export default App;
