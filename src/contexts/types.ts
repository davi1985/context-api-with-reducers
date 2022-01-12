import { ReactNode } from 'react';
import { ThemeType } from '../reducers/types';

export type User = {
  name: string;
  email: string;
};

export type MyContextProviderProps = {
  children: ReactNode;
};

export type InitialStateType = {
  user: User;
  theme: ThemeType;
};
