const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
      type: String,
      default: () => new Date()
  },
  exercises: [
      {
          type: {
              type: String,
              trim: true,
              required: 'Exercise type is required'
          },
          name: {
              type: String,
              trim: true,
              required: 'Excerise name is required'
          },
          duration: {
              type: Number,
              required: 'Duration is required'
          },
          weight: {
              type: Number
          },
          reps: {
              type: Number
          },
          sets: {
              type: Number
          },
          distance: {
              type: Number
          }
      }
  ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;