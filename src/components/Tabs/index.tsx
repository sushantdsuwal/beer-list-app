import './styles.css';

interface TabsProps {
  activeTab: string;
  onTabChange: (tab: TabEnum) => void;
}

export enum TabEnum {
  All = 'all',
  My = 'my',
}

const Tabs = ({ activeTab, onTabChange }: TabsProps) => {
  return (
    <div className='tabs'>
      <button onClick={() => onTabChange(TabEnum.All)} className={activeTab === TabEnum.All ? 'active' : ''}>
        All Beers
      </button>
      <button onClick={() => onTabChange(TabEnum.My)} className={activeTab === TabEnum.My ? 'active' : ''}>
        My Beers
      </button>
    </div>
  );
};

export default Tabs;
