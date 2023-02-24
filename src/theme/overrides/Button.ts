import palette from '../palette';

const button = {
  MuiButton: {
    styleOverrides: {
      '&.Mui-disabled': {
        backgroundColor: palette.background.alice
      }
    }
  }
};

export default button;
