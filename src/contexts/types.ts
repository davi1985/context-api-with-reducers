import { ReactNode } from 'react';

export type User = {
  name: string;
  email: string;
};

export type MyContextProviderProps = {
  children: ReactNode;
};
