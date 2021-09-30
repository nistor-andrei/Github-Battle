import { useEffect } from "react";

export function useFetchPopularRepos(language) {
  const endpoint = window.encodeURI(
    `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
  );

  let repos;

  useEffect(() => {
    repos = fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        if (!data.items) {
          throw new Error(data.message);
        }
        return data.items;
      });
  }, []);
  return repos;
}
