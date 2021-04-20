import React from 'react';
import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList';
import SearchEvents from '../../components/events/events-search';

const Events = ({ events }) => {
  if (!events) return <h1>Loading ...</h1>;
  return (
    <div>
      <SearchEvents />
      <EventList events={events} />
    </div>
  );
};

export async function getStaticProps() {
  const events = await getAllEvents();
  return {
    props: {
      events,
    },
  };
}

export default Events;
