const Event = require('../models').Event;
// const jwt = require("jsonwebtoken");

module.exports = {
    allEvents: async (req, res) => {
        try {
            const results = await Event.selectAll(data);
            return res.status(201).json(results.data)
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    },
    addEvents: async (req, res) => {
        try {
            const event = await Event.create(req.body);
            return res.status(201).json(event)
        } catch (error) {
            console.log(error)
            res.status(400).send(error);
        }
    },
    editEvents: async (req, res) => {
        try {
            const eventId = req.params;
            const updatedEvent = await Event.update(req.body, {
                where: {id: eventId}
            });
            if (updatedEvent) {
                const updated = await Event.findOne({
                    where: {id: eventId}
                });
                return res.status(200).json({
                    event: updated
                });
            }
            throw new Error('Event not found')
        } catch (error) {
            console.log(error);
            return res.status(500).send(error.message);
        }
    },
    deleteEvents: async (req, res) => {
        try {
            const eventId = req.params;
            const deletedEvent = await Event.destroy({
                where: {id: eventId}
            });
            if (deletedEvent) {
                return res.status(204).send('Event deleted');
            }
            throw new Error('Event not found')
        } catch (error) {
            console.log(error)
            return res.status(500).send(error.message);
        };
    }      
}