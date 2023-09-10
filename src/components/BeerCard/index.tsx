import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import beerTypes from '../../types/beerTypes';

import './styles.css';

interface BeerCardProps {
  beer: beerTypes;
}

const BeerCard = ({ beer }: BeerCardProps) => {
  const showIngredientsTooltip = !!beer.ingredients;

  const ingredientTooltip = showIngredientsTooltip && (
    <Tooltip id={`tooltip-${beer.id}`}>
      <strong>Ingredients:</strong> {Object.keys(beer.ingredients || {}).join(', ')}
    </Tooltip>
  );

  return (
    <div key={beer.id} className='col-lg-6 mb-4'>
      <div className='beer-card'>
        <div className='row'>
          <div className='col-2 beer-image-wrapper'>
            {showIngredientsTooltip ? (
              <OverlayTrigger overlay={ingredientTooltip} placement='top'>
                <img src={beer.image_url} alt={beer.name} className='beer-image' />
              </OverlayTrigger>
            ) : (
              <img src={beer.image_url} alt={beer.name} className='beer-image' />
            )}
          </div>
          <div className='col-10 beer-details'>
            <h1 className='beer-name'>{beer.name}</h1>
            <p className='beer-tagline'>{beer.tagline}</p>
            <p className='beer-description'>{beer.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeerCard;
