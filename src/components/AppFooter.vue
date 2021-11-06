<template>
  <div>Version: {{ formatDateTime(today) }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { formatDateTime } from "../util/formatDate";

export default defineComponent({
  name: "AppFooter",
  data() {
    return {
      today: new Date(),
    };
  },
  methods: {
    formatDateTime,
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
