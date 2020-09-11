/* eslint-disable arrow-body-style */
import React from 'react';
import Calendar from 'react-calendar';

const AvailCalendar = ({ availability, date }) => {
  const year = Number.parseInt(date.slice(0, 4));
  const month = Number.parseInt(date.slice(5, 7)) - 1;
  const day = Number.parseInt(date.slice(8, 10));

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
          let yr = date.toString().slice(11, 15);
          let dy = date.toString().slice(8, 10);
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
          let yr = value.toString().slice(11, 15);
          let dy = value.toString().slice(8, 11);
          mon = monthConverter[mon];
          console.log(`${yr}-${mon}-${dy}`);
        }}
      />
    </div>
  );
};

export default AvailCalendar;
