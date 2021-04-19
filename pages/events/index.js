import React from 'react';
import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList';

const Events = () => {
  const getEvents = getAllEvents();

  return (
    <div>
      <EventList events={getEvents} />
    </div>
  );
};

export default Events;
