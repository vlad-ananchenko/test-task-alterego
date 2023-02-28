import { createContext } from 'react';

export interface INewsItemContext {
  // eslint-disable-next-line no-unused-vars
  handleDeleteNewsItem: (id: number) => void;
}

export const NewsItemContext = createContext<INewsItemContext>({
  handleDeleteNewsItem: () => {}
});
