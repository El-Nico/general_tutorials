import { useState } from "react";
import "./App.css";
import BasicFetch from "./fetch_calls/01_basic_fetch";
import TryAsnc from "./fetch_calls/02_try_async";
import UrlRequests from "./fetch_calls/03_url_requests";
import { useStore } from "./state/store";

function App() {
  const components = [<BasicFetch />, <TryAsnc />, <UrlRequests />];
  const [i, setI] = useState(0);

  const json = useStore((state) => state.json);
  const desc = useStore((state) => state.desc);
  const code = useStore((state) => state.code);
  return (
    <>
      <div className="main-container">
        <div>
          <h1>Description</h1>
          <p>{desc}</p>
        </div>
        <div className="body-container">
          <div>
            <p>{code}</p>
            {components[i]}
          </div>
          <div>
            <p>{json}</p>
          </div>
        </div>

        <div>
          <button
            onClick={() => {
              if (i <= 0) {
                setI(components.length - 1);
                return;
              }
              setI(i - 1);
            }}
          >
            prev API call
          </button>
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
      </div>
    </>
  );
}

export default App;
