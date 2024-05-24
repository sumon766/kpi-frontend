import React, { useState, useEffect } from "react";
import axios from 'axios';

const Leaderboard = () => {
    const [date, setDate] = useState('');
    const [leaderboard, setLeaderboard] = useState([]);

    useEffect(() => {
        fetchLeaderboard();
    }, []);

    const fetchLeaderboard = async (selectedDate = '') => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/leaderboard', {
                params: { date: selectedDate }
            });
            setLeaderboard(response.data);
        } catch (error) {
            console.error('Error fetching leaderboard:', error);
        }
    };

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchLeaderboard(date);
    };

    return (
        <div>
            <h2>Leaderboard</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="date">Select Date:</label>
                <input
                    type="date"
                    id="date"
                    value={date}
                    onChange={handleDateChange}
                />
                <button type="submit">Fetch Leaderboard</button>
            </form>
            <ul>
                {leaderboard.length > 0 ? (
                    leaderboard.map((entry, index) => (
                        <li key={index}>
                            {index + 1}. {entry.name}: {entry.total_marks}
                        </li>
                    ))
                ) : (
                    <li>No evaluations found for this date.</li>
                )}
            </ul>
        </div>
    );
};

export default Leaderboard;
