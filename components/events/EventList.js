import React from 'react';
import EventItem from './EventItem';

const EventList = ({ events }) => {
  return (
    <div>
      <ul>
        {events.map(event => (
          <EventItem key={event.id} event={event} />
        ))}
      </ul>
    </div>
  );
};

export default EventList;
