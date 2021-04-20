import React from 'react';
import EventList from '../../../components/events/EventList';
import { getFilteredEvents } from '../../../helpers/api-utils';
const FilterEvents = ({ events }) => {
  if (!events) return <h1 className='center'>Not Found</h1>;

  return (
    <div>
      <EventList events={events} />
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const query = params.slug;
  const events = await getFilteredEvents({
    year: parseInt(query[0]),
    month: parseInt(query[1]),
  });

  if (events.length === 0)
    return {
      notFound: true,
    };

  return {
    props: {
      events: events,
    },
  };
}

export default FilterEvents;
