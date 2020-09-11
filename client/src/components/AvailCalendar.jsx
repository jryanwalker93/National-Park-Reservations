/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable radix */
/* eslint-disable arrow-body-style */
import React from 'react';
import Calendar from 'react-calendar';

const AvailCalendar = ({ availability, dates }) => {
  const year = Number.parseInt(dates.slice(0, 4));
  const month = Number.parseInt(dates.slice(5, 7)) - 1;
  const day = Number.parseInt(dates.slice(8, 10));

  const monthConverter = {
    Jan: '01',
    Feb: '02',
    Mar: '03',
    Apr: '04',
    May: '05',
    Jun: '06',
    Jul: '07',
    Aug: '08',
    Sep: '09',
    Oct: '10',
    Nov: '11',
    Dec: '12',
  };

  return (
    <div>
      <Calendar
        activeStartDate={new Date(year, month, day)}
        view="month"
        tileContent={({ activeStartDate, date, view }) => {
          let mon = date.toString().slice(4, 7);
          const yr = date.toString().slice(11, 15);
          const dy = date.toString().slice(8, 10);
          mon = monthConverter[mon];
          let avail = `${yr}-${mon}-${dy}`;
          if (availability[avail]) {
            avail = availability[avail].numAvail;
          } else {
            avail = 0;
          }
          return <div>{avail}</div>;
        }}
        onClickDay={(value, event) => {
          let mon = value.toString().slice(4, 7);
          const yr = value.toString().slice(11, 15);
          const dy = value.toString().slice(8, 10);
          mon = monthConverter[mon];
          let avail = `${yr}-${mon}-${dy}`;
          if (availability[avail]) {
            avail = availability[avail].sites;
          } else {
            avail = 0;
          }
          console.log(avail);
        }}
      />
    </div>
  );
};

export default AvailCalendar;
