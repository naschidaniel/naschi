<template>
  <router-view />
  <AppFooter />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppFooter from "./components/AppFooter.vue";

export default defineComponent({
  name: "App",
  components: { AppFooter },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #d3d3d3;
  height: 100%;
  width: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
a {
  color: rgb(162, 168, 168);
  cursor: pointer;
  transition: color 0.5s ease-in-out;
}

a:hover {
  color: #2865a2;
  transition: color 0.5s ease-in-out;
}

.container {
  display: flex;
  justify-content: center;
  margin: auto;
  margin-bottom: 4em;
  max-width: 95%;
  text-align: left;
}

.main {
  margin-top: 4em;
}

h1 {
  margin: 1em 0 0;
}

h2 {
  margin: 2em 0 0;
}

@media only screen and (min-width: 600px) {
  .container {
    max-width: 75%;
  }
  .main {
    margin-top: 10em;
  }
  h1 {
    margin: 3em 0 0;
  }
}
</style>
