const Workout = require('../models/Workout');

exports.createWorkout = async (req, res) => {
    const { title, description, duration } = req.body;
    try {
        const workout = new Workout({ title, description, duration });
        await workout.save();
        res.status(201).json(workout);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getWorkouts = async (req, res) => {
    try {
        const workouts = await Workout.find();
        res.status(200).json(workouts);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
