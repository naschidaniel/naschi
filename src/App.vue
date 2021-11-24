<template>
  <router-view />
  <AppFooter />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppFooter from "./components/AppFooter.vue";
import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
  name: "App",
  components: { AppFooter },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  height: 100%;
  text-align: center;
  width: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
