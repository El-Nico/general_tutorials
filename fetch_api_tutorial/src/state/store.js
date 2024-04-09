import { create } from "zustand";

export const useStore = create((set) => ({
  json: "usuh niggi",
  desc: "description of this fetch call",
  code: `function getData() {
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("was not a valid response");
        return res.json(); //convert json to object;
      })
      .then((res) => {
        updateJson(JSON.stringify(res));
      })
      .catch((err) => {
        console.warn(err.message);
      });
  }`,
  updateJson: (newJson) => set({ json: newJson }),
  updateDesc: (newDesc) => set({ desc: newDesc }),
  updateCode: (newCode) => set({ code: newCode }),
}));
