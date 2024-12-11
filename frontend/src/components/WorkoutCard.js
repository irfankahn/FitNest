import React from 'react';
import { Card, Button } from 'react-bootstrap';
import DumbellsImage from '../images/Dumbells.png';
import PushupsImage from '../images/pushups.png';
import SquatesImage from '../images/Squates.png';
import PlankImage from '../images/Plank.png';
import LungesImage from '../images/Lunges.png';
import '../styles.css'; // Keep this for general styles if needed

const WorkoutCard = ({ title, description, onClick }) => {
    // Map the workout titles to imported images
    const workoutImages = {
        Dumbells: DumbellsImage,
        pushups: PushupsImage,
        Squates: SquatesImage,
        Plank: PlankImage,
        Lunges: LungesImage,
    };

    // Check if there is an image associated with the title
    const cardBackgroundImage = workoutImages[title] ? `url(${workoutImages[title]})` : '';
    const cardClass = `workout-card ${title.toLowerCase()}`;

    return (
        <Card
            className={cardClass}
            style={{
                backgroundImage: cardBackgroundImage,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
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
