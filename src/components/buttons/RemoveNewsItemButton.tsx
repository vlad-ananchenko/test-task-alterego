import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface IRemoveNewsItemButtonProps {
  // eslint-disable-next-line no-unused-vars
  handleDeleteNewsItem: (id: number) => void;
  id: number;
}

const RemoveNewsItemButton = ({
  handleDeleteNewsItem,
  id
}: IRemoveNewsItemButtonProps) => {
  const { t } = useTranslation();

  return (
    <Button
      variant="contained"
      fullWidth
      size="small"
      onClick={() => handleDeleteNewsItem(id)}
      sx={{
        backgroundColor: 'secondary.dark',
        ':hover': {
          backgroundColor: '#000000'
        }
      }}
    >
      {t('newsPage.deleteButton')}
    </Button>
  );
};

export default RemoveNewsItemButton;
