import './styles.css';

interface EmptyBeerStateProps {
  onClick: () => void;
}
const EmptyBeerState = ({ onClick }: EmptyBeerStateProps) => {
  return (
    <div className='empty-state'>
      <div>
        <p>Nothing to see yet.</p>
        <p>
          <a onClick={onClick} className='add-beer-link'>
            Click here
          </a>{' '}
          to add your first beer!
        </p>
      </div>
    </div>
  );
};

export default EmptyBeerState;
