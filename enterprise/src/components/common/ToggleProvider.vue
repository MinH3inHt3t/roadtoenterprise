<script>
export default {
  props: {
    on: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isOn: this.on,
    };
  },
  render() {
    // const { isOn, toggle, turnOn, turnOff } = this;

    return this.$slots.default({
      isOn: this.isOn,
      toggle: this.toggle,
      turnOn: this.turnOn,
      turnOff: this.turnOff,
    });
  },
  methods: {
    turnOn() {
      this.isOn = true;
    },
    turnOff() {
      this.isOn = false;
    },
    toggle() {
      this.isOn = !this.isOn;
    },
  },
};
</script>
