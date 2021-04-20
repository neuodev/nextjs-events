import React, { useEffect, useState } from 'react';
import EventList from '../components/events/EventList';
import { getFeaturedEvents } from '../helpers/api-utils';

const HomePage = ({ featuredEvents }) => {
  // const [events, setEvents] = useState();
  if (!featuredEvents) return <h1>Loading.......</h1>;
  return (
    <div>
      <EventList events={featuredEvents} />
    </div>
  );
};

export async function getStaticProps() {
  const events = await getFeaturedEvents();
  return {
    props: {
      featuredEvents: events,
    },
    
    revalidate: 10,
  };
}

export default HomePage;
