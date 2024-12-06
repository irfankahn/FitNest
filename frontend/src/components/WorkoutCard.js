import React from 'react';
import { Card, Button } from 'react-bootstrap';

const WorkoutCard = ({ title, description, onClick }) => {
    return (
        <Card style={{ width: '18rem', margin: '10px' }}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Button variant="primary" onClick={onClick}>Start Workout</Button>
            </Card.Body>
        </Card>
    );
};

export default WorkoutCard;
