import {createContext, useContext, useReducer} from "react";
export type GlobalContent = {
  copy?: string;
  setCopy?: (c: string) => void;
  globalState?: any;
  dispatch?: any;
};

export type GlobalState = {
  count: number;
};

export const globalContext = createContext<GlobalContent>({});

const initialState: GlobalState = {count: 1};

const reducer = (state: GlobalState, action: any) => {
  switch (action.type) {
    case "increment":
      return {count: state.count + 1};
    case "decrement":
      return {count: state.count - 1};
    default:
      throw new Error();
  }
};

export const useGlobalContext = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return {
    globalState: state,
    dispatch,
    ...useContext(globalContext),
  };
};
