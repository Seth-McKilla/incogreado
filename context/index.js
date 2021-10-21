import { createContext, useReducer } from "react";
import { ceramicReducer } from "./reducers/ceramicReducer";

const initialState = {
  loading: false,
  keyDID: null,
  created: false,
  reviewsList: [],
  error: null,
};

const Context = createContext({});

const combineReducers =
  (...reducers) =>
  (state, action) => {
    for (let i = 0; i < reducers.length; i++)
      state = reducers[i](state, action);
    return state;
  };

//  Context provider
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(
    combineReducers(ceramicReducer),
    initialState
  );
  const value = { state, dispatch };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, Provider };
