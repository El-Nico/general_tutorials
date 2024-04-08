import React from "react";

//the simplest fetch you can use and still have error handling

const url = "https://jsonplaceholder.typicode.com/users";
function BasicFetch() {
  //
  fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error("was not a valid response");
      return res.json(); //convert json to object;
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.warn(err.message);
    });
  return <div>title=01_basic_fetch</div>;
}

export default BasicFetch;
