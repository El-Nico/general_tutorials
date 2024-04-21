//the simplest fetch you can use and still have error handling

const url = "https://jsonplaceholder.typicode.com/users";

export const desc =
  "the simplest fetch you can use and still have error handling";
export const code = `
export function getData() {
  return (
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("was not a valid response");
        return res.json(); //convert json to object;
      })
      .catch((err) => {
        console.warn(err.message);
      })
  );
}
`;
export function getData() {
  return fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error("was not a valid response");
      return res.json(); //convert json to object;
    })
    .catch((err) => {
      console.warn(err.message);
    });
}
