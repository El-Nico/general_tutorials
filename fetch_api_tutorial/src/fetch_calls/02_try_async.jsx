import React from "react";

//using async and await instead of chaining then()
// still needs error handling with try...catch
const url = "https://jsonplaceholder.typicode.com/users";
function TryAsnc() {
  getData();
  return <div>title=02_try_async</div>;
}

async function getData() {
  try {
    let response = await fetch(url);
    console.log(response);
    if (!response.ok) throw new Error("not a valid response");
    let dataobj = await response.json();
    console.log(dataobj);
  } catch (error) {
    console.warn(error.message);
  }
}

export default TryAsnc;
