import { useEffect, useState } from 'react';

export function useFetchPopularRepos(language) {
  const endpoint = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`);
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        setData(data.items);
      });
  }, [endpoint]);
  return data;
}
