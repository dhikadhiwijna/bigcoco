export const openModal = () => ({ type: "OPEN_SIDEBAR" });
export const closeModal = () => ({ type: "CLOSE_SIDEBAR" });
// import { DataProducts } from "../Data/Product";
export const getId = (id, title, img, text, packaging, spec) => {
  return {
    type: "GET_ID",
    payload: [id, title, img, text, packaging, spec],
  };
};
