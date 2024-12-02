import React from 'react';

// Styles
import './EventMatch.css';

const EventMatch = ({ matchData }) => {

    const dateNumToTime = (dateNum) => {
        const date = new Date(dateNum * 1000);
        return date.toUTCString();
    }

    return (
        <div className='eventMatch'>
            <p>{matchData.key}</p>
            <p>{dateNumToTime(matchData.predicted_time)}</p>
            <table>
                <thead>
                    <tr>
                        <th>Alliance</th>
                        <th>Auto Score</th>
                        <th>Teleop Score</th>
                        <th>Endgame Score</th>
                        <th>Fouls</th>
                        <th>Total Score</th>
                        <th>Net EPA</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Red</td>
                        <td>{matchData.red_auto}</td>
                        <td>{matchData.red_teleop}</td>
                        <td>{matchData.red_endgame}</td>
                        <td>{matchData.red_fouls}</td>
                        <td>{matchData.red_score}</td>
                        <td>{matchData.red_endgame_epa_sum + matchData.red_teleop_epa_sum}</td>
                    </tr>
                    <tr>
                        <td>Blue</td>
                        <td>{matchData.blue_auto}</td>
                        <td>{matchData.blue_teleop}</td>
                        <td>{matchData.blue_endgame}</td>
                        <td>{matchData.blue_fouls}</td>
                        <td>{matchData.blue_score}</td>
                        <td>{matchData.blue_endgame_epa_sum + matchData.blue_teleop_epa_sum}</td>
                    </tr>
                </tbody>
            </table>
            
        </div>
    );
}

export default EventMatch;
