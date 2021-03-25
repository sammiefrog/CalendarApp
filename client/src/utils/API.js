/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
    getEvents: () => {
        return axios.get(`/api/events`);
    },
    addEvents: (data) => {
        return axios.post(`/api/addevent`, data);
    },
    editEvents: eventId => {
        return axios.put(`/api/events/${eventId}`);
    },
    deleteEvents: eventId => {
        return axios.delete(`/api/events/${eventId}`);
    }
};