import React from 'react';

// Styles
import './EventMatchList.css';

// Components
import EventMatch from '../EventMatch/EventMatch';

const EventMatchList = ({ eventMatches }) => {
  return (
    <div className='eventMatchListContainer'>
          {eventMatches ? (
            <div className='eventMatchList'>
              {eventMatches.map((matchData) => (
                <EventMatch matchData={matchData} key={matchData.key} />
              ))}
            </div>
          ) : (
            <p>Please enter an event code to see your data!</p>
          )}
    </div>
  );
}

export default EventMatchList;
