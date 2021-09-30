import { useState } from 'react';
import '../index.css';
import { LanguageNav } from './LanguageNav';
import { useFetchPopularRepos } from '../utils/useFetchPopularRepos';
import { ReposGrid } from './ReposGrid';

export function Popular() {
  const [language, setLanguage] = useState('All');
  const data = useFetchPopularRepos(language);

  console.log(data);

  return (
    <>
      <LanguageNav selected={language} updatedLanguage={setLanguage} />
      {!data && <p>LOADING</p>}

      {data !== null && <ReposGrid fnc={data} />}
      {/* {data && <pre>{JSON.stringify(data, null, 2)}</pre>} */}
    </>
  );
}
