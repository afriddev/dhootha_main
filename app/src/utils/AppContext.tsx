import { ReactNode, createContext, useContext, useReducer } from "react";

export type dispatchDataType = {
  type: string;
  payload: any;
};

type stateType = {
  dispatch: React.Dispatch<dispatchDataType>;
  visitedPages: string[];
};

const initialState: stateType = {
  dispatch: () => null,
  visitedPages: [],
};

export const AppContextProvider = createContext(initialState);

function reducer(state: stateType, action: dispatchDataType) {
  switch (action.type) {
    case "updateVisitedPages":
      return {
        ...state,
        visitedPages: [...state.visitedPages, action.payload],
      };
    default:
      throw new Error("Action unkonwn");
  }
}

export type childrenDataType = {
  children: ReactNode;
};

function AppContext({ children }: childrenDataType) {
  const [{ visitedPages }, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContextProvider.Provider
      value={{
        visitedPages,
        dispatch,
      }}
    >
      {children}
    </AppContextProvider.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContextProvider);
  if (context === undefined)
    throw new Error("AppContextProvider was used outside");
  return context;
}

export default AppContext;
