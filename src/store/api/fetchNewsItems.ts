import { createAsyncThunk } from '@reduxjs/toolkit';

import { useFetchData } from 'hooks/useFetchData';
import { INewsItem } from 'store/models/INewsItem';

export const fetchNewsItems = createAsyncThunk(
  'news/fetchNewsItems',
  async (page?: string) => {
    const data = useFetchData<INewsItem[]>(page);

    return data;
  }
);
