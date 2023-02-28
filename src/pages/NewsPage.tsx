import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

import PaginationButton from 'components/buttons/PaginationButton';
import NewsItemCardList from 'components/cardsLists/NewsItemCardList';
import CircleLoader from 'components/spinners/CircleLoader';
import { useAppDispatch, useAppSelector } from 'store/hooks/hooks';
import { newsRemoved, selectAll } from 'store/reducers/newsItemSlice';
import { fetchNewsItems } from 'store/api/fetchNewsItems';
import { capitalized } from 'utils/helpers/helpers';
import { NewsItemContext } from 'contexts/NewsItemContext';

const NewsPage = () => {
  const dispatch = useAppDispatch();
  const newsItemsArray = useAppSelector(selectAll);
  const { status, error } = useAppSelector(state => state.newsItemReducer);
  const { t } = useTranslation();

  const [initialNumber, setInitialNumber] = useState(12);

  useEffect(() => {
    dispatch(fetchNewsItems());
  }, []);

  const handleShowMoreNewsItems = () => {
    setInitialNumber((prev: number) => prev + 12);
    dispatch(fetchNewsItems(String(initialNumber)));
  };

  const handleDeleteNewsItem = (id: number) => {
    dispatch(newsRemoved(id));
  };

  const contextValue = useMemo(
    () => ({
      handleDeleteNewsItem
    }),
    []
  );

  return (
    <NewsItemContext.Provider value={contextValue}>
      {status === 'loading' && <CircleLoader />}
      {status === 'failed' && (
        <Typography variant="h3">{capitalized(error)}</Typography>
      )}
      {status === 'succeeded' && (
        <>
          <NewsItemCardList newsItemsArray={newsItemsArray} />
          <PaginationButton handleShowMoreNewsItems={handleShowMoreNewsItems} />
        </>
      )}
      {status === 'empty' && (
        <Typography variant="h3">{t('newsPage.typography')}</Typography>
      )}
    </NewsItemContext.Provider>
  );
};

export default NewsPage;
