import { useEffect, useState, useCallback } from 'react';
import { getFotos } from 'services/fotosApi';

export const useFetchFotos = (initialQuery = '') => {
  const [query, setQuery] = useState(initialQuery);
  const [fotos, setFotos] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (page, query = '', isEditorChoice = false) => {
    setIsLoading(true);

    try {
      const { data } = await getFotos(page, query, isEditorChoice);
      return data;
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const setEditorChoiceFoto = useCallback(async () => {
    const { hits, total } = await fetchData(page, '', true);
    setFotos(prevState => [...prevState, ...hits]);
    setTotal(total);
  }, [page]);

  const setSearchFotos = useCallback(async () => {
    const { hits, total } = await fetchData(page, query);
    setFotos(prevState => [...prevState, ...hits]);
    setTotal(total);
  }, [page, query]);

  useEffect(() => {
    query ? setSearchFotos() : setEditorChoiceFoto();
  }, [query, setEditorChoiceFoto, setSearchFotos]);

  const updateSearchQuery = query => {
    setQuery(query);
    setFotos([]);
    setTotal(0);
    setPage(1);
  };

  const updatePage = useCallback(() => {
    setPage(prevState => prevState + 1);
  }, []);

  return {
    query,
    fotos,
    total,
    page,
    isLoading,
    updateSearchQuery,
    updatePage,
  };
};
