import { useEffect, useState } from 'react';

export const useFetch = (apiFetchFn, params) => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    apiFetchFn(params)
      .then(res => {
        if (isMounted) {
          setData(res);
        }
      })
      .catch(error => {
        if (isMounted) {
          setError(error.message);
        }
      })
      .finally(() => {
        if (isMounted) {
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [apiFetchFn, params]);

  return [data, error, loading];
};
