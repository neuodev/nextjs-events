import React from 'react';
import { useRouter } from 'next/router';
import { getEventById } from '../../dummy-data';
const EventPage = () => {
  const router = useRouter();
  const event = getEventById(router.query.eventId);
  return (
    <div>
      <h1>Envet Page</h1>
    </div>
  );
};

export default EventPage;
