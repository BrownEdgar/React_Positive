import { ADD_NAME, ADD_NUMBER, SHAFFLE, USER_NAME_CHANGE } from "./actionTypes";

export const initialState = {
  actions: 0,
  developers: [],
  user: {
    id: 1,
    name: "Armen",
  },
  arr: [154, 42, 1, 87, 695, 36, 2, 10, 39, 9],
};

export default function reduce(state = initialState, action) {
  switch (action.type) {
    case ADD_NAME:
      return {
        ...state,
        actions: state.actions + 1,
        developers: [...state.developers, action.payload],
      };
    case SHAFFLE:
      return shuffle(state);
    case ADD_NUMBER:
      return {
        ...state,
        actions: state.actions + 1,
        arr: [...state.arr, Math.floor(Math.random() * 899 + 101)],
      };
    case USER_NAME_CHANGE:
      return {
        ...state,
        actions: state.actions + 1,
        user: { ...state.user, name: "Poxos" },
      };

    default:
      return state;
  }
}

function shuffle(state) {
  return {
    ...state,
    actions: state.actions + 1,
    arr: state.arr.toSorted(() => Math.random() - 0.5),
  };
}
