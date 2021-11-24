<template>
  <div>
    Version: {{ formatDate(updateTime) }},
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
  margin-top: 40px;
  color: #525464;
  font-size: 85%;
}
</style>
