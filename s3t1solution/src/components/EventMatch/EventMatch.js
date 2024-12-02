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
            <p className='matchTitle'>{matchData.key}</p>
            <p className='matchTime'>{dateNumToTime(matchData.predicted_time)}</p>
            <table className='matchStatisticsTable'>
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
                    <tr bgcolor="skyblue">
                        <td>Red</td>
                        <td>{matchData.red_auto}</td>
                        <td>{matchData.red_teleop}</td>
                        <td>{matchData.red_endgame}</td>
                        <td>{matchData.red_fouls}</td>
                        <td>{matchData.red_score}</td>
                        <td>{matchData.red_endgame_epa_sum + matchData.red_teleop_epa_sum}</td>
                    </tr>
                    <tr bgcolor="crimson">
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
            <div className='teamsAndVideoContainer'>
                <table className='teamsTable'>
                    <tbody>
                        <tr>
                            <td bgColor="skyblue">{matchData.blue_1}</td>
                            <td bgColor="crimson">{matchData.red_1}</td>
                        </tr>
                        <tr>
                            <td bgColor="skyblue">{matchData.blue_2}</td>
                            <td bgColor="crimson">{matchData.red_2}</td>
                        </tr>
                        <tr>
                            <td bgColor="skyblue">{matchData.blue_3}</td>
                            <td bgColor="crimson">{matchData.red_3}</td>
                        </tr>
                    </tbody>
                </table>
                {matchData.video && (
                    <iframe className="videoEmbed" src={`https://www.youtube.com/embed/${matchData.video}?enablejsapi=1`}></iframe>
                )}
            </div>
        </div>
    );
}

export default EventMatch;
