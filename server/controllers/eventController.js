const Event = require('../models').Event;
const User = require('../models').User;
const jwt = require("jsonwebtoken");

module.exports = {
    allEvents: async (req, res) => {
        try {
            const results = await Event.findAll();
            console.log(results)
            res.status(200).send(results)
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    },
    addEvents: async (req, res) => {
        try {
            const event = await Event.create(req.body);
            res.status(200).send(event)
        } catch (error) {
            console.log(error)
            res.status(400).send(error);
        }
    },
    // allEvents: async (req, res) => {
    //     try {
    //         let decoded = await jwt.decode(req.params.token);

    //         const results = await Event.findAll({
    //             where: {
    //             UserId: decoded.id
    //         }});
            
    //         console.log(results)
    //         res.status(200).send(results)
    //     } catch (error) {
    //         console.log(error);
    //         res.status(400).send(error);
    //     }
    // },
    // addEvents: async (req, res) => {
    //     try {
    //         let decoded = await jwt.decode(req.params.token);

    //         const event = await Event.create({...req.body, UserId: decoded.id});
    //         console.log(event);
    //         res.status(200).send(event)
    //     } catch (error) {
    //         console.log(error)
    //         res.status(400).send(error);
    //     }
    // },
    editEvents: async (req, res) => {
        try {
            const eventId = req.params.eventId;
            console.log(eventId)
            const updatedEvent = await Event.update(req.body, {
                where: {id: eventId}
            });
            if (updatedEvent) {
                const updated = await Event.findOne({
                    where: {id: eventId}
                });
                res.status(200).json({
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
            const eventId = req.params.eventId;
            const deletedEvent = await Event.destroy({
                where: {id: eventId}
            });
            if (deletedEvent) {
                res.status(204).send('Event deleted');
            }
        } catch (error) {
            console.log(error)
            return res.status(500).send(error.message);
        };
    }      
}