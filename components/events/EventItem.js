import React from 'react';
import Link from 'next/link';
const EventItem = ({ event }) => {
  const { title, image, date, location, id } = event;

  const humanReadableDate = new Date(date).toLocaleDateString('eu-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedAddress = location.replace(', ', '\n');

  return (
    <li>
      <img src={'/' + image} alt={title} />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{humanReadableDate}</time>
          </div>
        </div>
        <div>
          <address>{formattedAddress}</address>
        </div>
      </div>
      <div>
        <Link href={`/events/${id}`}>Explore Event</Link>
      </div>
    </li>
  );
};

export default EventItem;
