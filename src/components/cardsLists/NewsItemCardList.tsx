import { Grid } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

import NewsItemCard from 'components/cards/NewsItemCard';
import { INewsItem } from 'store/models/INewsItem';

interface INewsItemCardListProps {
  newsItemsArray: INewsItem[];
}

const NewsItemCardList = ({ newsItemsArray }: INewsItemCardListProps) => (
  <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 16 }}>
    {newsItemsArray.map(({ id, title, url }) => (
      <NewsItemCard id={id} title={title} url={url} key={uuidv4()} />
    ))}
  </Grid>
);

export default NewsItemCardList;
