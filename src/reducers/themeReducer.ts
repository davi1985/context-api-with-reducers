import { ReducerActionType, ThemeType } from './types';

export const themeInitialState: ThemeType = {
  status: 'light',
};

export const themeReducer = (state: ThemeType, action: ReducerActionType) => {
  switch (action.type) {
    case 'CHANGE_STATUS':
      return {
        ...state,
        status: action.payload.status,
      };
      break;
  }

  return state;
};
