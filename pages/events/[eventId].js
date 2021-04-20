import React from 'react';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import { getAllEvents, getEventById } from '../../helpers/api-utils.js';
const EventPage = ({ event }) => {
  if (!event) {
    return <p className='center'>Loading</p>;
  }
  return (
    <div>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </div>
  );
};

export async function getStaticProps({ params }) {
  const event = await getEventById(params.eventId);

  return {
    props: { event },
    revalidate: 30,
  };
}

export async function getStaticPaths(context) {
  const events = await getAllEvents();
  let paths = [];
  for (let event of events) {
    paths.push({ params: { eventId: event.id } });
  }
  return {
    paths,
    fallback: false,
  };
}

export default EventPage;
