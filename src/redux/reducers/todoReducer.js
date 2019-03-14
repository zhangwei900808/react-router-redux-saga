import { handleActions } from "redux-actions";
import { todoTypes } from "../actions/todoAction";

const initState = {
  allIds: [],
  byIds: {}
};

const todoReducer = handleActions(
  {
    [todoTypes.ADD_TODO]: (state, action) => {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false
          }
        }
      };
    },
    [todoTypes.TOGGLE_TODO]: (state, action) => {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed
          }
        }
      };
    },
    [todoTypes.REMOVE_ALL]: (state, action) => {
      return {
        ...state,
        allIds: [],
        byIds: {}
      };
    },
    [todoTypes.TEST_SAGA_SUCCESS]: (state, action) => {
      return {
        ...state,
        list: action.response
      };
    }
  },
  initState
);

export default todoReducer;
