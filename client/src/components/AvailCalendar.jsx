/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable radix */
/* eslint-disable arrow-body-style */
import React from 'react';
import Calendar from 'react-calendar';

import '../styles/calendar.css';

const AvailCalendar = ({ availability, dates, campsiteName }) => {
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
        nextLabel={null}
        next2Label={null}
        prevLabel={null}
        prev2Label={null}
        calendarType="US"
        className="campsite-calendar"
        showNeighboringMonth={false}
        tileDisabled={({ activeStartDate, date, view }) => {
          let mon = date.toString().slice(4, 7);
          const yr = date.toString().slice(11, 15);
          const dy = date.toString().slice(8, 10);
          mon = monthConverter[mon];
          let avail = `${yr}-${mon}-${dy}`;
          if (availability[avail]) {
            return false;
          }
          return true;
        }}
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
          return <div>{`Sites Available: ${avail}`}</div>;
        }}
        tileClassName={({ activeStartDate, date, view }) => {
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

          if (avail === 0) {
            return 'sold-out';
          }
          if (avail > 0 && avail <= 20) {
            return 'almost-out';
          }
          if (avail > 20 && avail <= 49) {
            return 'good-amount';
          }
          return 'plenty';
        }}
        onClickDay={(value, event) => {
          let mon = value.toString().slice(4, 7);
          const yr = value.toString().slice(11, 15);
          const dy = value.toString().slice(8, 10);
          mon = monthConverter[mon];
          const avail = `${yr}-${mon}-${dy}`;
          let siteAvail;
          if (availability[avail]) {
            siteAvail = availability[avail].sites;
          } else {
            siteAvail = 0;
          }
          if (document.getElementById(`${campsiteName} open-sites`).className === 'visible' && document.getElementById(`${campsiteName} sites`).className === avail) {
            document.getElementById(`${campsiteName} open-sites`).className = 'not-visible';
          } else if (document.getElementById(`${campsiteName} open-sites`).className === 'visible' && document.getElementById(`${campsiteName} sites`).className !== avail) {
            document.getElementById(`${campsiteName} sites`).className = avail;
            document.getElementById(`${campsiteName} sites`).innerHTML = siteAvail;
          } else {
            document.getElementById(`${campsiteName} open-sites`).className = 'visible';
            document.getElementById(`${campsiteName} sites`).className = avail;
            document.getElementById(`${campsiteName} sites`).innerHTML = siteAvail;
          }
          console.log(avail);
        }}
      />
      {/* <div id='open-sites' className="not-visible">
        Sites Available:
        <div id="sites"></div>
      </div> */}
    </div>
  );
};

export default AvailCalendar;
