import React, { lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';

interface TabContentProps {
  tabs: TabData[];
}

interface TabData {
  id: string;
  title: string;
  order: number;
  path: string;
}

const TabContent: React.FC<TabContentProps> = ({ tabs }) => {
  const { id } = useParams<{ id: string }>();
  const selectedTab = tabs.find((tab) => tab.id === id);

  const TabComponent = lazy(() => import(`../tabs/${selectedTab?.id}`));

  return (
    <div className="tabContent">
      <Suspense fallback="loading...">
        <TabComponent />
      </Suspense>
    </div>
  );
};

export default TabContent;
