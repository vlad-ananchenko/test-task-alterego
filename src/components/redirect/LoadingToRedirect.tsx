import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

interface ILoadingToRedirectProps {
  authenticated?: boolean;
}

const LoadingToRedirect = ({ authenticated }: ILoadingToRedirectProps) => {
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
        <Typography>
          You will be redirected to the home page in {count} sec
        </Typography>
      ) : (
        <Typography>
          You will be redirected to the profile page in {count} sec
        </Typography>
      )}
    </Box>
  );
};

export default LoadingToRedirect;

LoadingToRedirect.defaultProps = {
  authenticated: false
};
