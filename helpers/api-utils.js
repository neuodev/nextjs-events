export async function getAllEvents() {
  const res = await fetch(
    'https://next-74832-default-rtdb.firebaseio.com/events.json'
  ).then(res => res.json());
  return Object.values(res);
}

export async function getFeaturedEvents() {
  const events = await getAllEvents();
  return events.filter(e => e.isFeatured === true);
}

export async function getEventById(id) {
  const events = await getAllEvents();
  return events.find(event => event.id === id);
}

export async function getFilteredEvents(dateFilter) {
  const events = await getAllEvents();
  const { year, month } = dateFilter;

  let filteredEvents = events.filter(event => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}
