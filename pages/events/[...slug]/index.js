import React from 'react';
import { getFilteredEvents } from '../../../dummy-data';
import { useRouter } from 'next/router';
import EventList from '../../../components/events/EventList';
const FilterEvents = () => {
  const router = useRouter();
  const query = router.query.slug;
  if (!query) return <p>Filters are required</p>;
  console.log(query);
  const events = getFilteredEvents({
    year: parseInt(query[0]),
    month: parseInt(query[1]),
  });
  if (events.length == 0) return <h1>No Evets Found</h1>;
  return (
    <div>
      <EventList events={events} />
    </div>
  );
};

export async function getStaticProps({ params }) {
  console.log(params);
  return {
    props: {
      events: [],
    },
  };
}

export default FilterEvents;
