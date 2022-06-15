import React from "react";

import HookTransitionAndDeferred from "@components/HookTransitionAndDeferred";
import {globalContext} from "@context/useGlobalContext";
import {useGlobalContext} from "@context/useGlobalContext";

const App = () => {
  const {globalState, dispatch} = useGlobalContext();
  return (
    <globalContext.Provider value={{globalState, dispatch}}>
      <HookTransitionAndDeferred />
    </globalContext.Provider>
  );
};

export default App;
