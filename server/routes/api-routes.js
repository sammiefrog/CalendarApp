// do routes here and queries on databases in the controller (i.e userController.js - findOne, findAll, etc.)
const {
    allEvents,
    addEvents,
    editEvents,
    deleteEvents
} = require("../controllers/eventController");

module.exports = app => {
    app.get(["/", "/api/events"], allEvents);
    app.post("/api/addevent", addEvents);
    app.put("/api/events/:eventId", editEvents);
    app.delete("/api/events/:eventId", deleteEvents);
}
// add route getting one event