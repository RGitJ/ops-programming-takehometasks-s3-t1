import React from 'react';

// Style
import './EventCodeForm.css';

const EventCodeForm = ({ handleSubmit, eventCode, setEventCode }) => {
  return (
    <form onSubmit={handleSubmit} className='eventCodeFormGroup'>
        <input
        type='text'
        value={eventCode}
        onChange={e => setEventCode(e.target.value)}
        className='eventCodeInput'
        placeholder='Enter event code...'
        />
    </form>
  )
}

export default EventCodeForm
