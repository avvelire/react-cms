import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface TabProps {
  id: string;
  title: string;
  order: number;
}

const Tab: React.FC<TabProps> = ({ id, title }) => {
  const location = useLocation();
  return (
    <div className="tabs">
      <Link to={`/${id}`} style={{ textDecoration: 'none', color: 'black' }}>
        <button className={location.pathname === `/${id}` ? 'button__active' : 'button'}>
          {title}
        </button>
      </Link>
    </div>
  );
};

export default Tab;
