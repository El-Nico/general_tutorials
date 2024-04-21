//using async and await instead of chaining then()
// still needs error handling with try...catch
const url = "https://jsonplaceholder.typicode.com/users";

export const desc =
  "the simplest fetch you can use and still have erroooor handling";

// getData().then((res) => {
//   const resi = JSON.stringify(res);
//   if (resi) {
//     updateJson(resi);
//   }
// });

export async function getData() {
  try {
    let response = await fetch(url);
    if (!response.ok) throw new Error("not a valid response");
    let dataobj = await response.json();
    // console.log(dataobj);
    return dataobj;
  } catch (error) {
    console.warn(error.message);
    return error;
  }
}
