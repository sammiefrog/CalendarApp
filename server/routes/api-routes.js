const Event = require('../models').Event;

module.exports = (app) => {
    app.get('api/events', (req, res) => {
        Event.findAll({}).then(response => {
            res.json(response)
        }).catch(err => console.log(error))
    })
}