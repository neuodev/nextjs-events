import React from 'react';
import Button from '../button/Button';
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const SearchEvents = () => {
  return (
    <form>
      <div>
        <div>
          <label htmlFor='year'>Year</label>
          <select id='year'>
            <option value='2021'>2021</option>
            <option value='2022'>2022</option>
          </select>
        </div>
        <div>
          <label htmlFor='month'></label>
          <select id='month'>
            {months.map((month, idx) => (
              <option key={idx} value={idx + 1}>
                {month}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Button link >Find Events</Button>
    </form>
  );
};

export default SearchEvents;
