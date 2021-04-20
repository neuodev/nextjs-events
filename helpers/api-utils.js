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
