import { v4 as uuidv4 } from 'uuid';
import { IError } from 'store/models/IError';
import { useTranslation } from 'react-i18next';

export const pages = () => {
  const { t } = useTranslation();

  return [
    {
      key: uuidv4(),
      name: t('header.main'),
      link: '/'
    },
    {
      key: uuidv4(),
      name: t('header.news'),
      link: '/news'
    }
  ];
};

// In real app we send dynamic error message from server
export const errorObject: IError = {
  message: 'Incorrect username or password',
  status: 401
};
