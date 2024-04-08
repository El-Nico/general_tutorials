import { useState } from "react";
import "./App.css";
import BasicFetch from "./fetch_calls/01_basic_fetch";
import TryAsnc from "./fetch_calls/02_try_async";

function App() {
  const components = [<BasicFetch />, <TryAsnc />];
  const [i, setI] = useState(0);
  return (
    <>
      <div className="card">
        {components[i]}
        <button
          onClick={() => {
            if (i == components.length - 1) {
              setI(0);
              return;
            }
            setI(i + 1);
          }}
        >
          next API call
        </button>
      </div>
    </>
  );
}

export default App;
