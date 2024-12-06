const express = require('express');
const router = express.Router();
const { createWorkout, getWorkouts } = require('../controllers/workoutController');

router.post('/create', createWorkout);
router.get('/all', getWorkouts);

module.exports = router;
