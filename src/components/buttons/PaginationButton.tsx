import { useTranslation } from 'react-i18next';
import { Box, Button } from '@mui/material';

interface IPaginationButtonProps {
  handleShowMoreNewsItems: () => void;
}

const PaginationButton = ({
  handleShowMoreNewsItems
}: IPaginationButtonProps) => {
  const { t } = useTranslation();

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
        {t('newsPage.paginationButton')}
      </Button>
    </Box>
  );
};

export default PaginationButton;
