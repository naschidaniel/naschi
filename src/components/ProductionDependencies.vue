<template>
  <ul>
    <li v-for="dependency in dependencies" :key="dependency.version">
      <span style="font-weight: bold">{{ dependency.name }} </span> –
      <span style="font-style: italic">{{ dependency.version }}</span> –
      {{ dependency.license }} License
    </li>
  </ul>
</template>

<script setup lang="ts">
import { Dependency } from "../model/dependency";
const dependencies = JSON.parse(
  import.meta.env.VITE_APP_DEPENDENCIES
) as Dependency[];
</script>

<style>
ul {
  list-style-type: square;
  padding-left: 1em;
}
</style>
