/* eslint-disable prettier/prettier */
import { seedData } from "./seed.js";
import { reactive } from "vue";
export const store = {
    state: {
        data: reactive(seedData),
    },

    getActiveDay() {
        return this.state.data.find((day) => day.active)
    },

    setActiveDay(dayId) {
        this.state.data.map((day) => {
            day.id === dayId ? day.active = true : day.active = false;
        });

    },

    submitEvent(eventDetails) {
        const activeDay = this.getActiveDay();
        activeDay.events.push({ details: eventDetails, edit: false })
    },

    editEvent(dayId, eventDetails) {
        const day = this.state.data.find((day) => day.id == dayId);
        const event = day.events.find((event) => event.details == eventDetails);
        event.edit = true;
    },

    saveEditEvent(dayId, oldEventDetails, newEventDetails) {
        const day = this.state.data.find((day) => day.id == dayId);
        const event = day.events.find((event) => event.details == oldEventDetails);
        event.details = newEventDetails;
        event.edit = false;
    },

    cancelEditEvent(dayId, eventDetails) {
        const day = this.state.data.find((day) => day.id == dayId);
        const event = day.events.find((event) => event.details == eventDetails);
        event.edit = false;
    },

    deleteEditEvent(dayId, eventDetails) {
        const day = this.state.data.find((day) => day.id == dayId);
        // const event = day.events.find((event) => event.details == eventDetails);
        const index = day.events.findIndex((event) => event.details == eventDetails);
        day.events.splice(index, 1);
    }


};
