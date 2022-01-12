export type ThemeType = {
  status: 'dark' | 'light';
};

export type ReducerActionType = {
  type: string;
  payload: {
    [key: string]: any;
  };
};
