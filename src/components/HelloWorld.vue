<template>
  <div class="main">
    <h1 style="text-align: center">Daniel Naschberger</h1>
    <NaschiLogoIcon />
    <div class="link-box">
      <GithubIcon class="icon-github" />
      <OutlineMailIcon class="icon-mail" />
    </div>
  </div>
</template>

<script setup lang="ts">
import GithubIcon from "./GithubIcon.vue";
import NaschiLogoIcon from "./NaschiLogoIcon.vue";
import OutlineMailIcon from "./OutlineMailIcon.vue";
</script>

<style scoped>
.icon-github {
  fill: rgb(201, 201, 201);
  height: 1.5em;
  width: 1.5em;
}

.icon-mail {
  height: 1.6em;
  margin-left: 3em;
  width: 1.6em;
}

.link-box {
  align-items: center;
  display: flex;
  font-size: 150%;
  justify-content: center;
  height: 2em;
  margin: auto;
}
</style>
