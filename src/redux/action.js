export const actionTypes = {
  ADD_USER: "ADD_USER",
};

export const ADD_USER = (data) => {
  return {
    type: actionTypes.ADD_USER,
    payload: data,
  };
};
