import React from 'react';
import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList';
import SearchEvents from '../../components/events/events-search';

const Events = () => {
  const getEvents = getAllEvents();

  return (
    <div>
      <SearchEvents />
      <EventList events={getEvents} />
    </div>
  );
};

export default Events;
