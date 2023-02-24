import { Stack, Pagination } from '@mui/material';

// test
const PaginationRounded = () => (
  <Stack spacing={2} bgcolor="primary.contrastText">
    <Pagination count={10} shape="rounded" />
    <Pagination count={10} variant="outlined" shape="rounded" />
  </Stack>
);

export default PaginationRounded;
