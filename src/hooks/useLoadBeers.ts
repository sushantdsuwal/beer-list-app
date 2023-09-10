import { useEffect, useState } from 'react';

import { fetchBeers } from '../utils/api';
import beerTypes from '../types/beerTypes';

function useLoadBeers(initialPage: number, initialPageSize: number) {
  const [beers, setBeers] = useState<beerTypes[]>([]);
  const [page, setPage] = useState<number>(initialPage);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadBeers = async () => {
      try {
        setLoading(true);
        const newBeers = await fetchBeers(page, initialPageSize);
        setBeers((prevBeers) => [...prevBeers, ...newBeers]);
      } catch (error) {
        console.error('Error fetching beers:', error);
      } finally {
        setLoading(false);
      }
    };

    loadBeers();
  }, [page, initialPageSize]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return { beers, loading, loadMore };
}

export default useLoadBeers;
