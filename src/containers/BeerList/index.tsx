import BeerCard from '../../components/BeerCard';
import useLoadBeers from '../../hooks/useLoadBeers';

import './styles.css';

const BeerList = () => {
  const { beers, loading, loadMore } = useLoadBeers(1, 10);

  return (
    <div className='beer-list'>
      <div className='row'>
        {beers.map((beer) => (
          <BeerCard key={beer.id} beer={beer} />
        ))}
      </div>
      {loading && <p>Loading...</p>}
      <div className='text-center load-more-text' onClick={() => loadMore()}>
        Load More ▼
      </div>
    </div>
  );
};

export default BeerList;
