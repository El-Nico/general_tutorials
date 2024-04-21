import { create } from "zustand";
import { textRes } from "../fetch_calls/03_url_requests";

export const useStore = create((set) => ({
  json: '{"default":"suh niggi"}',
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
  textRes: "",
  updateTextRes: (newTextRes) => set({ textRes: newTextRes }),
  updateJson: (newJson) => set({ json: newJson }),
  updateDesc: (newDesc) => set({ desc: newDesc }),
  updateCode: (newCode) => set({ code: newCode }),
}));
