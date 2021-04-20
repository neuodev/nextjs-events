import React from 'react';
import { getFilteredEvents } from '../../../dummy-data';
import { useRouter } from 'next/router';
import EventList from '../../../components/events/EventList';
import { getAllEvents } from '../../../helpers/api-utils';
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

  return {
    props: {
      events: [],
    },
  };
}

export async function getStaticPaths() {
  let paths = [];
  const events = await getAllEvents();
  for (let event of events) {
    const date = new Date(event.date);
    paths.push({
      params: {
        slug: [date.getFullYear(), date.getMonth()],
      },
    });
  }
  return {
    paths,
    fallback: false,
  };
}

export default FilterEvents;
