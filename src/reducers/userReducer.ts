import { User } from '../contexts/types';
import { ReducerActionType } from './types';

export const userInitialState: User = {
  name: 'Davi Silva',
  email: 'davisilvaphoto@gmail.com',
};

export const userReducer = (state: User, action: ReducerActionType) => {
  switch (action.type) {
    case 'CHANGE_USER':
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
      };
      break;
  }

  return state;
};
