import { useState, useEffect } from 'react';

import beerTypes from '../../types/beerTypes';
import BeerCard from '../../components/BeerCard';
import BeerForm from '../../components/BeerForm';
import useLocalStorage from '../../hooks/useLocalStorage';
import EmptyBeerState from '../../components/EmptyBeerState';

const MyBeers = () => {
  const [beers, setBeers] = useLocalStorage<beerTypes[]>('beers', []);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const storedBeers = localStorage.getItem('beers');
    if (storedBeers) {
      setBeers(JSON.parse(storedBeers));
    }
  }, []);

  useEffect(() => {
    if (beers.length) {
      localStorage.setItem('beers', JSON.stringify(beers));
    }
  }, [beers]);

  const handleFormModal = (value: boolean) => {
    setShowForm(value);
  };

  const addCustomBeer = (customBeer: beerTypes) => {
    setBeers((prevBeers) => [...prevBeers, customBeer]);
  };

  return (
    <div className='my-beers'>
      <BeerForm
        addCustomBeer={addCustomBeer}
        showModal={showForm}
        onOpenModal={() => handleFormModal(true)}
        onCloseModal={() => handleFormModal(false)}
      />

      {beers.length === 0 ? (
        <EmptyBeerState onClick={() => handleFormModal(true)} />
      ) : (
        <div className='row'>
          {beers.map((beer) => (
            <BeerCard key={beer.id} beer={beer} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBeers;
