<template>
  <div>
    <span>{{ apiData }}</span>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      apiData: null,
    };
  },
  mounted() {
    this.fetchApiData();
  },
  methods: {
    fetchApiData() {
      axios
        .get("https://flask-py-test.vercel.app/simulate") // Substitua pela URL da sua API Flask
        .then((response) => {
          this.apiData = response.data;
        })
        .catch((error) => {
          console.error("Erro ao chamar a API:", error);
        });
    },
  },
};
</script>

<style scoped>
/* Seus estilos aqui, se necessário */
</style>
