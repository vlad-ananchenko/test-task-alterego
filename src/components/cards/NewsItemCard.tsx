import { useContext } from 'react';
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions
} from '@mui/material';
import { NewsItemContext } from 'contexts/NewsItemContext';

import RemoveNewsItemButton from 'components/buttons/RemoveNewsItemButton';
import { capitalized } from 'utils/helpers/helpers';

interface INewsItemCardProps {
  id: number;
  title: string;
  url: string;
}

const NewsItemCard = ({ id, title, url }: INewsItemCardProps) => {
  const { handleDeleteNewsItem } = useContext(NewsItemContext);

  return (
    <Grid item xs={8} sm={4} md={4} key={id}>
      <Card>
        <CardActionArea>
          <CardMedia component="img" alt="image" image={url} />
        </CardActionArea>
        <CardContent
          sx={{
            height: 150,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Typography variant="h6" align="center">
            {capitalized(title)}
          </Typography>
        </CardContent>
        <CardActions>
          <RemoveNewsItemButton
            handleDeleteNewsItem={handleDeleteNewsItem}
            id={id}
          />
        </CardActions>
      </Card>
    </Grid>
  );
};

export default NewsItemCard;
