export const NavbarReducer = (state, action) => {
  switch (action) {
    case "OPEN_SIDEBAR":
      return !state;

    case "CLOSE_SIDEBAR":
      return !state;

    default:
      return state;
  }
};

export const ProductReducer = (state, action) => {
  switch (action) {
    case "OPEN_MODAL":
      return !state;

    case "CLOSE_MODAL":
      return !state;

    default:
      return state;
  }
};

export const ProductIdReducer = (state, action) => {
  switch (action.type) {
    case "GET_ID":
      return { ...state, data: action.payload };

    default:
      return state;
  }
};
