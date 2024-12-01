import React from 'react';

// Styles
import './EventCodeInput.css';

const EventCodeInput = ({ eventCode, setEventCode }) => {
  return (
    <div>
      <input 
        type='text'
        value={eventCode}
        onChange={e => setEventCode(e.target.value)}
      />
    </div>
  );
}

export default EventCodeInput;
