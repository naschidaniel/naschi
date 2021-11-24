<template>
  <div style="text-align: center">
    <router-link to="/">home</router-link>
    <span class="spacer">–</span>
    <router-link to="/imprit">imprit</router-link>
    <span class="spacer">–</span>
    <span>Version: {{ formatDate(updateTime) }},&nbsp;</span>
    <a
      href="https://github.com/naschidaniel/naschi/"
      target="_blank"
      rel="noopener"
      >{{ currentGitSha }}</a
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { formatDate } from "../util/formatDate";

export default defineComponent({
  name: "AppFooter",
  data() {
    return {
      updateTime: new Date(import.meta.env.VITE_APP_UPDATETIME),
      currentGitSha: import.meta.env.VITE_APP_GITSHA,
    };
  },
  methods: {
    formatDate,
  },
});
</script>

<style scoped>
div {
  color: #525464;
  font-size: 85%;
  margin-top: 40px;
}
.spacer {
  margin-left: 1em;
  margin-right: 1em;
}
@media only screen and (min-width: 600px) {
  .spacer {
    margin-left: 0.5em;
    margin-right: 0.5em;
  }
}
</style>
