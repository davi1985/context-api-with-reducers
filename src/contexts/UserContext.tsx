import { createContext, ReactNode, useReducer } from 'react';

import { userInitialState, userReducer } from '../reducers/userReducer';
import { themeInitialState, themeReducer } from '../reducers/themeReducer';
import { InitialStateType } from './types';
import { ReducerActionType } from '../reducers/types';

export type UserContextType = {
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
};

const initialState = {
  user: userInitialState,
  theme: themeInitialState,
};

export const UserContext = createContext({
  state: initialState,
  dispatch: () => null,
} as UserContextType);

const mainReducer = (
  { user, theme }: InitialStateType,
  action: ReducerActionType,
) => ({
  user: userReducer(user, action),
  theme: themeReducer(theme, action),
});

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

// import { createContext } from 'react';
// import { MyContextProviderProps, User } from './types';

// const initialState = {
//   name: 'Davi Silva',
//   email: 'davisilvaphoto@gmail.com',
// };

// export const MyContext = createContext(initialState as User);

// export const MyContextProvider = ({ children }: MyContextProviderProps) => {
//   return (
//     <MyContext.Provider value={initialState}>{children}</MyContext.Provider>
//   );
// };
