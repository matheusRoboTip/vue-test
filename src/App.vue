<!-- App.vue -->
<template>
  <AppHeader msg="Teste API .py" />
  <AppMain />
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue';


export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain
}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

/* Redefinir estilos de elementos HTML */
* {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  background: transparent;
  box-sizing: border-box;
  transition: all 0.3s;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
  font-family: 'Roboto', 'Montserrat';
}

/* Estilos para navegadores WebKit (Chrome, Safari) */
::-webkit-scrollbar {
  width: 3px;
  height: 3px;
}

::-webkit-scrollbar-thumb {
  background-color: #8c8c8c; /* Cor do polegar da scrollbar */
  border-radius: 6px; /* Borda arredondada para o polegar */
}

::-webkit-scrollbar-track {
  background: transparent; /* Cor de fundo da trilha da scrollbar */
}
</style>