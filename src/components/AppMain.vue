<template>
  <main class="main">
    <div class="toogle-switch">
      <label>
        <input type="checkbox" v-model="isChecked" @change="updateChecked" />
        Checkbox Label
      </label>

      <p>Estado do Checkbox: {{ isChecked }}</p>
    </div>
    <button>button api .py</button>
  </main>
</template>

<script>
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
};
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;
  height: 90vh;
  width: 100%;
  align-items: center;
  text-align: center;
}

.toogle-switch {
  display: flex;
  flex-direction: row;
  justify-content: end;
  width: 100%;
}
</style>
