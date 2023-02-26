import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button
} from '@mui/material';
import { capitalized } from 'utils/helpers/helpers';

interface INewsItemCardProps {
  id: number;
  title: string;
  url: string;
}

const NewsItemCard = ({ id, title, url }: INewsItemCardProps) => (
  <Grid item xs={8} sm={4} md={4} key={id}>
    <Card>
      <CardActionArea>
        <CardMedia component="img" alt="image" image={url} />
      </CardActionArea>
      <CardContent
        sx={{
          minHeight: 150,
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
        <Button
          variant="contained"
          fullWidth
          size="small"
          sx={{
            backgroundColor: 'secondary.dark',
            ':hover': {
              backgroundColor: 'HighlightText'
            }
          }}
        >
          Delete card
        </Button>
      </CardActions>
    </Card>
  </Grid>
);

export default NewsItemCard;
