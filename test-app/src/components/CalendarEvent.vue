<template>
  <div class="day-event" :style="getEventBackgroundColor">
    <div v-if="!event.edit">
      <span class="has-text-centered details">{{ event.details }}</span>
      <div class="has-text-centered icons">
        <i
          class="fa fa-pencil-square edit-icon"
          @click="editEvent(day.id, event.details)"
        ></i>
        <i
          class="fa fa-trash delete-icon"
          @click="deleteEditEvent(day.id, event.details)"
        ></i>
      </div>
    </div>

    <div v-if="event.edit">
      <input
        type="text"
        :placeholder="event.details"
        v-model="newEvent"
        @keyup.enter="saveEditEvent(day.id, event.details)"
      />
      <div class="has-text-centered icons">
        <i
          class="fa fa-cancel"
          @click="cancelEditEvent(day.id, event.details)"
        ></i>
        <i
          class="fa fa-check"
          @click="saveEditEvent(day.id, event.details)"
        ></i>
      </div>
    </div>
  </div>
</template><script>
import { store } from "../store.js";
export default {
  name: "CalendarEvent",
  data() {
    return {
      newEvent: "",
    };
  },
  props: ["event", "day"],
  methods: {
    editEvent(dayId, eventDetails) {
      store.editEvent(dayId, eventDetails);
    },
    saveEditEvent(dayId, oldEventDetails) {
      store.saveEditEvent(dayId, oldEventDetails, this.newEvent);
    },
    cancelEditEvent(dayId, eventDetails) {
      store.cancelEditEvent(dayId, eventDetails);
      this.newEvent = "";
    },
    deleteEditEvent(dayId, eventDetails) {
      store.deleteEditEvent(dayId, eventDetails);
    },
  },
  computed: {
    getEventBackgroundColor() {
      const colors = ["#FF9999", "#85D6FF", "#99FF99"];
      let randomColor = colors[Math.floor(Math.random() * colors.length)];
      return `background-color: ${randomColor}`;
    },
  },
};
</script>
<style lang="scss" scoped>
.day-event {
  margin-top: 6px;
  margin-bottom: 6px;
  display: block;
  color: #4c4c4c;
  padding: 5px;
  .details {
    display: block;
  }
  .icons .fa {
    padding: 0 2px;
  }
  input {
    background: none;
    border: 0;
    border-bottom: 1px solid #fff;
    width: 100%;
    &:focus {
      outline: none;
    }
  }
}
</style>