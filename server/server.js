// importing required dependencies
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const passport = require("passport");
const app = express();
const db = require("./models");

require("dotenv").config();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// using passport for authentication
app.use(passport.initialize());
require("./config/passport")(passport);

// requiring routes
require("./routes/user-routes")(app);
require("./routes/api-routes")(app);

// Send every other request to the React app
// Define any API routes before this runs

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// add sequelize
db.sequelize.sync({force:false}).then(() => {
  app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
});
