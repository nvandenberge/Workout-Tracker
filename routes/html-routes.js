var path = require("path");

module.exports = (app) => {
//   // route for home page
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // route for exercise page,(when user clicks 'New Workout')
  app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  // route for stats page, (when user clicks 'Dashboard' nav link)
  app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
};
