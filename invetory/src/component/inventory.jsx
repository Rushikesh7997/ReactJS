import { useState } from "react";
import "./inventory.css";
function Inventory() {
  const [books, setBooks] = useState(0);
  const [pens, setPens] = useState(0);
  const [notebooks, setNotebooks] = useState(0);

  return (
    <div className="grad font">
      <div>
        Books: {books <= 0 ? 0 : books}
        <br />
        <button
          className="back"
          onClick={() => {
            setBooks(books + 1);
          }}
        >
          +
        </button>
        <button
          className="back"
          onClick={() => {
            setBooks(books - 1);
          }}
        >
          -
        </button>
      </div>
      <div>
        Pens:{pens <= 0 ? 0 : pens} <br />
        <button
          className="back"
          onClick={() => {
            setPens(pens + 1);
          }}
        >
          +
        </button>{" "}
        <button
          className="back"
          onClick={() => {
            setNotebooks(notebooks - 1);
          }}
        >
          -
        </button>
      </div>
      <div>
        Notebooks:{notebooks <= 0 ? 0 : notebooks}
        <br />
        <button
          className="back"
          onClick={() => {
            setNotebooks(notebooks + 1);
          }}
        >
          +
        </button>{" "}
        <button
          className="back"
          onClick={() => {
            setNotebooks(notebooks - 1);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
}
export { Inventory };