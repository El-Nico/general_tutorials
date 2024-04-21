import { useEffect, useState } from "react";
import "./App.css";
import { useStore } from "./state/store";
import MarkdownPreview from "@uiw/react-markdown-preview";
import {
  JsonView,
  allExpanded,
  darkStyles,
  defaultStyles,
} from "react-json-view-lite";
import "react-json-view-lite/dist/index.css";

import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

function App() {
  const calls = ["01_basic_fetch.js", "02_try_async.js", "03_url_requests.js"];
  const [i, setI] = useState(0);

  const json = useStore((state) => state.json);
  const updateJson = useStore((state) => state.updateJson);

  const desc = useStore((state) => state.desc);
  const updateDesc = useStore((state) => state.updateDesc);

  const code = useStore((state) => state.code);
  const updateCode = useStore((state) => state.updateCode);

  useEffect(() => {
    const importTest = async () => {
      const callModule = await import(`./fetch_calls/${calls[i]}`);
      console.log(calls[i]);
      updateDesc(callModule.desc || "default");
      callModule.getData().then((res) => {
        updateJson(res || { 0: "default" });
      });
    };

    importTest();
  }, [i]);
  return (
    <>
      <div className="main-container">
        <div>
          <h1>Description</h1>
          <MarkdownPreview source={desc} style={{ padding: 16 }} />
        </div>
        <div className="body-container">
          <div className="code-box">
            <h3>Code</h3>
            {/* <CodePreview code={code} sourceState="shown" onlyEdit={false} /> */}
            <div>
              <SyntaxHighlighter language="javascript" style={docco}>
                {code}
              </SyntaxHighlighter>
            </div>
          </div>
          <div>
            <h3>Response</h3>
            <JsonView
              data={json}
              shouldExpandNode={allExpanded}
              style={defaultStyles}
            />
            {/* <JsonView
              data={jsonParse}
              shouldExpandNode={allExpanded}
              style={darkStyles}
            /> */}
          </div>
        </div>

        <div>
          <button
            onClick={() => {
              if (i <= 0) {
                setI(calls.length - 1);
                return;
              }
              setI(i - 1);
            }}
          >
            prev API call
          </button>
          <button
            onClick={() => {
              if (i == calls.length - 1) {
                setI(0);
                console.log("im in here dgog" + i);
                return;
              }
              setI(i + 1);
              console.log("im in here dog" + i);
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
