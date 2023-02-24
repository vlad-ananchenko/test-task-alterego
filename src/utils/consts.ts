import { v4 as uuidv4 } from 'uuid';
import { IError } from 'store/models/IError';

export const pages = [
  {
    key: uuidv4(),
    name: 'Main',
    link: '/'
  },
  {
    key: uuidv4(),
    name: 'News',
    link: '/news'
  }
];

// In real app we send dynamic error message from server
export const errorObject: IError = {
  message: 'Incorrect username or password',
  status: 401
};
