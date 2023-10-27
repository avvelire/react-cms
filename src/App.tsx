import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import '../src/scss/app.scss';
import tabsData from './data/tabs.json';
import Tab from './components/Tab';
import TabContent from './components/TabContent';

const App: React.FC = () => {
  return (
    <Router>
      <ul>
        {tabsData
          .sort((a, b) => a.order - b.order)
          .map((tab) => (
            <Tab key={tab.id} {...tab} />
          ))}
      </ul>
      <Switch>
        <Redirect exact from="/" to={`/${tabsData[0].id}`} />
        <Route path="/:id">
          <TabContent tabs={tabsData} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
