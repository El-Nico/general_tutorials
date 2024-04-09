import React from "react";
import { useStore } from "../state/store";

//the simplest fetch you can use and still have error handling

const url = "https://jsonplaceholder.typicode.com/users";
function BasicFetch() {
  const updateDesc = useStore((state) => state.updateDesc);
  const updateJson = useStore((state) => state.updateJson);
  updateDesc("the simplest fetch you can use and still have error handling");

  //
  getData().then((res) => {
    updateJson(JSON.stringify(res));
  });
  return <div>title=01_basic_fetch</div>;
}

function getData() {
  return (
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("was not a valid response");
        return res.json(); //convert json to object;
      })
      // .then((res) => {
      //   updateJson(JSON.stringify(res));
      // })
      .catch((err) => {
        console.warn(err.message);
      })
  );
}

export default BasicFetch;
