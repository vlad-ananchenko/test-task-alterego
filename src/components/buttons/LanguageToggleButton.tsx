import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useState, MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageToggleButton = () => {
  const { i18n } = useTranslation();

  const languageOptions = [
    { code: 'en', label: 'English' },
    { code: 'ua', label: 'Ukrainian' }
  ];

  const lng = localStorage.getItem('i18nextLng');
  const [language, setLanguage] = useState(lng);

  const handleChange = (e: MouseEvent<HTMLElement>, value: string) => {
    setLanguage(value);
    i18n.changeLanguage(value);
  };

  return (
    <ToggleButtonGroup exclusive onChange={handleChange}>
      {languageOptions.map(option => (
        <ToggleButton
          size="small"
          key={option.label}
          value={option.code}
          disabled={language === option.code}
          sx={{
            color: 'primary.contrastText',
            ':disabled': {
              color: '#000000'
            }
          }}
        >
          {option.code}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default LanguageToggleButton;
