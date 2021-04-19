import React from 'react';
import EventList from '../components/events/EventList';
import { getFeaturedEvents } from '../dummy-data';

const HomePage = () => {
  const featuresEvents = getFeaturedEvents();

  return (
    <div>
      <EventList events={featuresEvents} />
    </div>
  );
};

export default HomePage;
