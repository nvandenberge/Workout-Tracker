const db = require("../models");

module.exports = (app) => {
  // GET all workout data when hitting workouts page
  app.get("/api/workouts", (req, res) => {
    db.Workout.find()
      .then((workouts) => {
        res.json(workouts);
      })
      .catch((err) => {
        console.log("error == ", err);
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

  // GET all workout data when navigating to stats page
  app.get("/api/workouts/range", (req, res) => {
    let currentDate = new Date().toISOString();
    let previousWeek = new Date(
      Date.now() - 7 * 24 * 60 * 60 * 1000
    ).toISOString();
    db.Workout.find({
      day: {
        $gt: previousWeek,
        $lte: currentDate,
      },
    })
      .then((workouts) => {
        res.json(workouts);
      })
      .catch((err) => {
        console.log("error ==", err);
      });
  });
};
