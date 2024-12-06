const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Workout', workoutSchema);
