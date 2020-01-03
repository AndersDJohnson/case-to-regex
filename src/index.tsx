import * as React from "react";
import { render } from "react-dom";
import copy from "copy-text-to-clipboard";
import { getRegex } from "./regex";
import "./styles.css";

const { useRef, useEffect, useState } = React;

function App() {
  const inputRef = useRef(null);

  const [regex, setRegex] = useState();

  const onSubmit = e => {
    e.preventDefault();
    if (!regex) return;
    copy(regex.source);
    alert(`Copied "${regex.source}"!`);
  };

  const onChange = e => {
    setRegex(getRegex(e.target.value));
  };

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, [inputRef]);

  return (
    <div className="App">
      <h1>Case to Regex</h1>
      <form onSubmit={onSubmit}>
        <div>
          <input onChange={onChange} ref={inputRef} required />{" "}
          <button type="submit">Copy</button>
        </div>
        <div>
          <br />
          {/* <code>{regex && regex.source}</code> */}
          <input value={regex ? regex.source : ""} readOnly />
        </div>
      </form>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
