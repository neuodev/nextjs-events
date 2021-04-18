import React from 'react';
import { getFeaturedEvents } from '../dummy-data';

const HomePage = () => {
  const featuresEvents = getFeaturedEvents();
  
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default HomePage;
