import React from 'react';
import { Card, Button } from 'react-bootstrap';
import DumbellsImage from '../images/Dumbells.png';
import PushupsImage from '../images/pushups.png';
import SquatesImage from '../images/Squates.png';
import PlankImage from '../images/Plank.png';
import LungesImage from '../images/Lunges.png';
import '../styles.css';

const WorkoutCard = ({ title, description, onClick }) => {
    const workoutImages = {
        Dumbells: `url(${DumbellsImage})`,
        pushups: `url(${PushupsImage})`,
        Squates: `url(${SquatesImage})`,
        Plank: `url(${PlankImage})`,
        Lunges: `url(${LungesImage})`,
    };

    const backgroundImage = workoutImages[title] || '';
    console.log('Background Image URL:', backgroundImage);

    return (
        <Card
            style={{
                width: '100%',
                height: '350px',
                backgroundImage: backgroundImage,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                borderRadius: '10px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                overflow: 'hidden',
                position: 'relative',
                transition: 'transform 0.3s, box-shadow 0.3s',
            }}
            className="workout-card"
        >
            <div className="workout-card-overlay">
                <Card.Title className="workout-card-title">{title}</Card.Title>
                <Card.Text className="workout-card-description">{description}</Card.Text>
                <Button className="workout-card-button" onClick={onClick}>
                    Start Workout
                </Button>
            </div>
        </Card>
    );
};

export default WorkoutCard;
