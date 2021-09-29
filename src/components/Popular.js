import { useState } from 'react';
import '../index.css';
import { LanguageNav } from './LanguageNav';
import { PropTypes } from 'prop-types';

export function Popular() {
  const [languageCurrent, setLanguage] = useState('All');

  function updateLanguage(selectedLanguage) {
    setLanguage(selectedLanguage);
  }

  LanguageNav.propTypes = {
    selected: PropTypes.string.isRequired,
    updatedLanguage: PropTypes.func.isRequired,
  };

  return (
    <>
      <LanguageNav selected={languageCurrent} updatedLanguage={updateLanguage} />
    </>
  );
}
