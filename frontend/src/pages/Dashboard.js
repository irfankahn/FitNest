import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WorkoutCard from '../components/WorkoutCard';

const Dashboard = () => {
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        const fetchWorkouts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/workouts/all');
                setWorkouts(response.data);
            } catch (error) {
                console.error('Error fetching workouts', error);
            }
        };

        fetchWorkouts();
    }, []);

    return (
        <div>
            <h2>Dashboard</h2>
            {workouts.map((workout) => (
                <WorkoutCard
                    key={workout._id}
                    title={workout.title}
                    description={workout.description}
                    duration={workout.duration}
                    date={workout.date}
                />
            ))}
        </div>
    );
};

export default Dashboard;
