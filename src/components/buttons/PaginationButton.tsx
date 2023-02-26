import { Box, Button } from '@mui/material';

const PaginationButton = () => {
  const handleShowMoreNewsItems = () => {
    console.log('Show more news items');
  };

  return (
    <Box pt={4}>
      <Button
        variant="text"
        size="large"
        onClick={handleShowMoreNewsItems}
        sx={{
          color: 'secondary.dark'
        }}
      >
        More News
      </Button>
    </Box>
  );
};

export default PaginationButton;
