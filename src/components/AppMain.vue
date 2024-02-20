<template>
  <main :class="{ main: true, 'main-checked': isChecked }">
    <div class="toggle-switch">
      <label class="switch">
        <input type="checkbox" v-model="isChecked" @change="updateChecked" />
        <span class="slider"></span>
      </label>
    </div>
    <div class="main-button">
      <button class="animated-button">
        <svg
          viewBox="0 0 24 24"
          class="arr-2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
          ></path>
        </svg>
        <span class="text">Test API .py</span>
        <span class="circle"></span>
        <svg
          viewBox="0 0 24 24"
          class="arr-1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
          ></path>
        </svg>
      </button>
      <ApiFlask />
    </div>
  </main>
</template>

<script>
import ApiFlask from './ApiFlask.vue';

export default {
    computed: {
        isChecked: {
            get() {
                return this.$store.state.isChecked;
            },
            set(value) {
                this.$store.commit("setChecked", value);
            },
        },
    },
    methods: {
        updateChecked() {
            this.$store.commit("setChecked", this.isChecked);
        },
    },
    components: { ApiFlask }
};
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  background-color: #434343;
  height: 90vh;
  width: 100%;
  align-items: center;
  text-align: center;
}

.main-checked {
  background-color: #f0f0f0;
}

.toggle-switch {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  padding: 0.5rem 1rem;
}

/* The switch - the box around the slider */
.switch {
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 3.5em;
  height: 2em;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  --background: #d9d9d9;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--background);
  transition: 0.5s;
  border-radius: 30px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 1.4em;
  width: 1.4em;
  border-radius: 50%;
  left: 10%;
  bottom: 15%;
  box-shadow: inset 8px -4px 0px 0px #595959;
  background: var(--background);
  transition: 0.5s;
}

input:checked + .slider {
  background-color: #595959;
}

input:checked + .slider:before {
  transform: translateX(100%);
  box-shadow: inset 15px -4px 0px 15px #d9d9d9;
}

.main-button {
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
}

.animated-button {
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 16px 36px;
  border: 4.5px solid;
  border-color: transparent;
  font-size: 16px;
  background-color: inherit;
  border-radius: 100px;
  font-weight: 600;
  color: #faad14;
  box-shadow: 0 0 0 2px #faad14;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.animated-button svg {
  position: absolute;
  width: 24px;
  fill: #faad14;
  z-index: 9;
  transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}

.animated-button .arr-1 {
  right: 16px;
}

.animated-button .arr-2 {
  left: -25%;
}

.animated-button .circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  background-color: #faad14;
  border-radius: 50%;
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}

.animated-button .text {
  position: relative;
  z-index: 1;
  transform: translateX(-12px);
  transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}

.animated-button:hover {
  box-shadow: 0 0 0 12px transparent;
  color: #141414;
  border-radius: 12px;
}

.animated-button:hover .arr-1 {
  right: -25%;
}

.animated-button:hover .arr-2 {
  left: 16px;
}

.animated-button:hover .text {
  transform: translateX(12px);
}

.animated-button:hover svg {
  fill: #212121;
}

.animated-button:active {
  scale: 0.95;
  box-shadow: 0 0 0 4px #faad14;
}

.animated-button:hover .circle {
  width: 220px;
  height: 220px;
  opacity: 1;
}
</style>
