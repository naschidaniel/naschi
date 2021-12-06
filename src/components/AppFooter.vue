<template>
  <div style="text-align: center">
    <router-link to="/">Home</router-link>
    <span class="spacer">–</span>
    <router-link to="/impressum">Impressum</router-link>
    <span class="spacer sm-d-none">–</span>
    <br class="md-d-none" />
    <span class="sm-mt-2"
      >Version: {{ formatDate(updateTime) }},&nbsp;<a
        href="https://github.com/naschidaniel/naschi/"
        target="_blank"
        rel="noopener"
        >{{ currentGitSha }}</a
      ></span
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
      updateTime: new Date(import.meta.env.VITE_APP_BUILDTIME),
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
  margin-top: 4em;
  margin-bottom: 3em;
}
.spacer {
  margin-left: 1em;
  margin-right: 1em;
}

@media only screen and (max-width: 600px) {
  .sm-d-none {
    display: none;
  }
  .sm-mt-2 {
    margin-top: 2em;
    display: block;
  }
  .spacer {
    margin-left: 0.7em;
    margin-right: 0.7em;
  }
}
@media only screen and (min-width: 600px) {
  .md-d-none {
    display: none;
  }
}
</style>
