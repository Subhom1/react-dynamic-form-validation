import { actionTypes } from "./action";
let initState = {
  unitManager: [],
};

export default (state = initState, action) => {
  switch (action.types) {
    case actionTypes.ADD_USER:
      return {
        unitManager: [...state.unitManager, { ...action.payload }],
      };
    default:
      return state;
  }
};
