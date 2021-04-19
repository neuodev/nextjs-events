import React from 'react';
import EventList from '../components/events/EventList';
import { getFeaturedEvents } from '../dummy-data';

const HomePage = () => {
  const getEvents = getFeaturedEvents();

  return (
    <div>
      <EventList events={getEvents} />
    </div>
  );
};

export default HomePage;
