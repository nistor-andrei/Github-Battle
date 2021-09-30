import { useState } from "react";
import "../index.css";
import { LanguageNav } from "./LanguageNav";
import { useFetchPopularRepos } from "../utils/useFetchPopularRepos";

export function Popular() {
  const [languageCurrent, setLanguage] = useState({
    languageCurrent: "All",
    repos: null,
    error: null,
  });

  function useUpdateLanguage(selectedLanguage) {
    setLanguage({
      selectedLanguage,
      error: null,
      repos: null,
    });
    useFetchPopularRepos(selectedLanguage)
      .then((repos) =>
        setLanguage({
          repos,
          error: null,
        })
      )
      .catch(() => {
        console.warn("Error");

        setLanguage({
          error: "There was an error fetching the repositories",
        });
      });
  }
  function isLoading() {
    return languageCurrent.repos === null && languageCurrent.error === null;
  }

  return (
    <>
      <LanguageNav selected={languageCurrent} updatedLanguage={useUpdateLanguage} />
      {isLoading && <p>LOADING</p>}

      {languageCurrent.error && <p>{languageCurrent.error}</p>}

      {languageCurrent.repos && <pre>{JSON.stringify(languageCurrent.repos, null, 2)}</pre>}
    </>
  );
}
