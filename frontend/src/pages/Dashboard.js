// src/pages/Dashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WorkoutCard from '../components/WorkoutCard';
import '../styles.css'; // Make sure your CSS file is imported

const Dashboard = () => {
    const [workouts, setWorkouts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWorkouts = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/workouts/all');
                setWorkouts(response.data);
            } catch (error) {
                console.error('Error fetching workouts:', error);
                setError('Failed to load workouts. Please try again later.');
            }
        };

        fetchWorkouts();
    }, []);

    return (
        <div className="dashboard-container" style={{ height: '100vh', overflow: 'hidden' }}>
            {error ? (
                <div className="error-message">{error}</div>
            ) : (
                <div className="workout-cards-container">
                    {workouts.length > 0 ? (
                        workouts.map((workout) => (
                            <WorkoutCard
                                key={workout._id}
                                title={workout.title}
                                description={workout.description}
                                onClick={() => alert(`Starting workout: ${workout.title}`)}
                            />
                        ))
                    ) : (
                        <div className="no-workouts">No workouts available.</div>
                    )}
                </div>
            )}
        </div>
    );
    
};

export default Dashboard;
