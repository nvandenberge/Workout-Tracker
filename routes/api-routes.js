const db = require("../models");

module.exports = (app) => {
  // GET all workout data when hitting workouts page
  app.get("/api/workouts", (req, res) => {
    db.Workout.find()
      .then((workouts) => {
        res.json(workouts);
      })
      .catch((err) => {
        res.json("error == ", err);
      });
  });

  // POST route for when workout is 'completed'
  app.post("/api/workouts/", (req, res) => {
    db.Workout.create(req.body)
      .then((workouts) => {
        res.json(workouts);
      })
      .catch((err) => {
        console.log("error == ", err);
      });
  });

  // PUT route to add/update exercises for current workout
  app.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(
      { _id: req.params.id },
      { $push: { exercises: req.body } }
    )
      .then((workouts) => {
        res.json(workouts);
      })
      .catch((err) => {
        console.log("error == ", err);
      });
  });

  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then((workouts) => {
        res.json(workouts);
      })
      .catch((err) => {
        console.log("error ==", err);
      });
  });
};
