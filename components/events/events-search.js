import React, { useState } from 'react';
import Button from '../button/Button';
import classes from './events-search.module.css';
import { useRouter } from 'next/router';
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
  const router = useRouter();
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState('2021');
  const submitHandler = e => {
    e.preventDefault();
    router.push(`/events/${year}/${month}`);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor='year'>Year</label>
          <select
            onChange={e => setYear(e.target.value)}
            value={year}
            id='year'>
            <option value='2021'>2021</option>
            <option value='2022'>2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor='month'></label>
          <select
            onChange={e => setMonth(e.target.value)}
            value={month}
            id='month'>
            {months.map((month, idx) => (
              <option key={idx} value={idx + 1}>
                {month}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  );
};

export default SearchEvents;
