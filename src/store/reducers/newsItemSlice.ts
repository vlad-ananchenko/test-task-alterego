import {
  createSlice,
  createEntityAdapter,
  PayloadAction
} from '@reduxjs/toolkit';

import { fetchNewsItems } from 'store/api/fetchNewsItems';
import { INewsItem } from 'store/models/INewsItem';
import { RootState } from 'store/store';

export type NewsItemStatus = 'loading' | 'failed' | 'succeeded' | 'empty';

const newsItemAdapter = createEntityAdapter<INewsItem>({
  selectId: newsItem => newsItem.id,
  sortComparer: (a, b) => a.title.localeCompare(b.title)
});

const initialState = newsItemAdapter.getInitialState({
  status: 'succeeded' as NewsItemStatus,
  error: ''
});

const newsItemSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    newsReceived(state, { payload }: PayloadAction<INewsItem[]>) {
      newsItemAdapter.upsertMany(state, payload);
    },
    newsRemoved(state, { payload }: PayloadAction<number>) {
      newsItemAdapter.removeOne(state, payload);

      if (state.status === 'succeeded' && state.ids.length === 0) {
        state.status = 'empty';
      }
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchNewsItems.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchNewsItems.fulfilled, (state, { payload }) => {
        state.status = 'succeeded';
        newsItemAdapter.upsertMany(state, payload as INewsItem[]);
      })
      .addCase(fetchNewsItems.rejected, (state, { error: { message } }) => {
        state.status = 'failed';
        state.error = message || 'Failed to fetch news items';
      })
      .addDefaultCase(() => {});
  }
});

const { actions, reducer } = newsItemSlice;

export const { selectAll } = newsItemAdapter.getSelectors(
  (state: RootState) => state.newsItemReducer
);

export const { newsReceived, newsRemoved } = actions;
export default reducer;
