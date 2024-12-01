
// Hooks
import { useEffect, useState } from 'react';

// Styles
import './App.css';

const App = () => {
  const [eventStatistics, setEventStatistics] = useState(null);
  const [eventCode, setEventCode] = useState("2023njski");

  const fetchEvent = async () => {
    try {
      const url = `https://api.statbotics.io/v3/event/${eventCode}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const eventData = await response.json();
      console.log(eventData);
      return eventData

    } catch (error) {
      console.error(error.message);
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    const eventData = fetchEvent()
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className='eventCodeFormGroup'>
        <input
          type='text'
          value={eventCode}
          onChange={e => setEventCode(e.target.value)}
          className='eventCodeInput'
          placeholder='Enter event code...'
        />
      </form>
    </div>
  );
}

export default App;
