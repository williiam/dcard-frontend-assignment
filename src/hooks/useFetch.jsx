import { useState, useEffect, useCallback } from "react";

function useFetch(query) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState();
  
  const sendQuery = useCallback(async () => {
    try {
      await setLoading(true);
      await setError(false);
      const result = await query();
      setData(result);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  }, [query]);

  useEffect(() => {
    sendQuery(query);
  }, [query]);

  return { loading, error, data};
}

export default useFetch;