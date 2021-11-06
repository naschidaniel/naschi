<template>
  <HelloWorld />
  <AppFooter />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppFooter from "./components/AppFooter.vue";
import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
  name: "App",
  components: { AppFooter, HelloWorld },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>
