import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import BeerList from './containers/BeerList';
import MyBeers from './containers/MyBeers';
import Tabs, { TabEnum } from './components/Tabs';

const App = () => {
  const [activeTab, setActiveTab] = useState<TabEnum>(TabEnum.All);

  const handleTabChange = (tab: TabEnum) => {
    setActiveTab(tab);
  };

  return (
    <Container className='mt-4'>
      <Tabs activeTab={activeTab} onTabChange={handleTabChange} />
      <Row>
        <Col>
          <div className='tab-content'>
            {activeTab === TabEnum.All && <BeerList />}
            {activeTab === TabEnum.My && <MyBeers />}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
