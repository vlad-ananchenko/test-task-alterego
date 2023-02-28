import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

interface ILoadingToRedirectProps {
  authenticated?: boolean;
}

const LoadingToRedirect = ({ authenticated }: ILoadingToRedirectProps) => {
  const { t } = useTranslation();
  const [count, setCount] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(currentCount => currentCount - 1);
    }, 1000);

    if (count === 0 && !authenticated) {
      navigate('/');
    }

    if (count === 0 && authenticated) {
      navigate('/profile');
    }

    return () => clearInterval(interval);
  }, [count, navigate]);

  return (
    <Box>
      {!authenticated ? (
        <Typography>{`${t(
          'common.redirectMessageNoAuthenticatedUser'
        )} ${count}...`}</Typography>
      ) : (
        <Typography>{`${t(
          'common.redirectMessageAuthenticatedUser'
        )} ${count}...`}</Typography>
      )}
    </Box>
  );
};

export default LoadingToRedirect;

LoadingToRedirect.defaultProps = {
  authenticated: false
};
