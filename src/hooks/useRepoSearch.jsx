import { useEffect, useState, useRef } from "react";
import axios from "axios";
let controller;
export default function useRepoSearch(query, pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [repos, setRepos] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const abortControllerRef = useRef(new AbortController());
  
  // ajax wrapper
  let getRepo = async () => {
    try {
      console.log('query :', query);
      controller = new AbortController();
      const res = await axios.get(
        `https://api.github.com/users/${query.userName}/repos`,
        {
          params: { page: pageNumber, per_page: 10 },
          signal: abortControllerRef.current.signal
        }
      );
      setRepos((prevrepos) => {
        return [...new Set([...prevrepos, ...res.data])];
      });
      setHasMore(res.data.length > 0);
      setLoading(false);
    } catch (err) {
      console.log('err :', err);
      abortControllerRef.current.abort()
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    setRepos([]);
    setError(false);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    getRepo();
    return () => {};
  }, [query, pageNumber]);

  return { loading, error, repos, hasMore };
}
