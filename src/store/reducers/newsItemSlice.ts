import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter
} from '@reduxjs/toolkit';
import { useFetchData } from 'hooks/useFetchData';
import { INewsItem } from 'store/models/INewsItem';
import { RootState } from 'store/store';

const newsItemAdapter = createEntityAdapter<INewsItem>({
  selectId: newsItem => newsItem.id,
  sortComparer: (a, b) => a.title.localeCompare(b.title)
});

const initialState = newsItemAdapter.getInitialState({
  status: 'idle'
});

export const fetchNewsItems = createAsyncThunk(
  'news/fetchNewsItems',
  async () => {
    const data = useFetchData<INewsItem[]>() || [];

    return data;
  }
);

const newsItemSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    newsReceived(state, action) {
      newsItemAdapter.setAll(state, action.payload.newsItems);
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchNewsItems.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchNewsItems.fulfilled, (state, action) => {
        state.status = 'idle';
        newsItemAdapter.setAll(state, action.payload as INewsItem[]);
      })
      .addCase(fetchNewsItems.rejected, state => {
        state.status = 'failed';
        // state.error = action.error.message;
      })
      .addDefaultCase(() => {});
  }
});

const { actions, reducer } = newsItemSlice;

export const { selectAll } = newsItemAdapter.getSelectors(
  (state: RootState) => state.newsItemReducer
);
export const { newsReceived } = actions;
export default reducer;
