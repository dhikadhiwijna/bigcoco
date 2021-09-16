export const openModal = () => ({ type: "OPEN_SIDEBAR" });
export const closeModal = () => ({ type: "CLOSE_SIDEBAR" });
export const getId = (id, title, img, text, packaging, spec) => {
  return {
    type: "GET_ID",
    payload: [id, title, img, text, packaging, spec],
  };
};
