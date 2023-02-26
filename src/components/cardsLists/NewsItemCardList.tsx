import { Grid } from '@mui/material';
import NewsItemCard from 'components/cards/NewsItemCard';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useAppDispatch, useAppSelector } from 'store/hooks/hooks';
import { selectAll, fetchNewsItems } from 'store/reducers/newsItemSlice';

const NewsItemCardList = () => {
  const dispatch = useAppDispatch();
  const newsItemsArray = useAppSelector(selectAll);

  useEffect(() => {
    dispatch(fetchNewsItems());
  }, []);

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 16 }}
    >
      {newsItemsArray.length &&
        newsItemsArray.map(({ id, title, url }) => (
          <NewsItemCard id={id} title={title} url={url} key={uuidv4()} />
        ))}
    </Grid>
  );
};

export default NewsItemCardList;
