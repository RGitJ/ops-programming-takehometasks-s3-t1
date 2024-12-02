import React from 'react';

// Hooks
import { useState } from 'react';

// Styles
import './App.css';

// Components
import EventCodeForm from './components/EventCodeForm/EventCodeForm';
import EventMatchList from './components/EventMatchList/EventMatchList.js';

const App = () => {
  const [eventMatches, setEventMatches] = useState(undefined);
  const [eventCode, setEventCode] = useState("");

  const fetchEvent = async () => {
    try {
      const url = `https://api.statbotics.io/v2/matches/event/${eventCode}`;
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

  const handleSubmit = async e => {
    e.preventDefault();
    const data = await fetchEvent();
    setEventMatches(data);
  }

  return (
    <div className="App">
      <EventCodeForm handleSubmit={handleSubmit} eventCode={eventCode} setEventCode={setEventCode} />
      <EventMatchList eventMatches={eventMatches} />
    </div>
  );
}

export default App;
