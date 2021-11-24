<template>
  <div>
    <h1>Daniel Naschberger</h1>
    <NaschiLogoIcon />
    <div class="link-box">
      <GithubIcon class="icon-github" />
      <OutlineMailIcon class="icon-mail" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GithubIcon from "./icons/GithubIcon.vue";
import NaschiLogoIcon from "./icons/NaschiLogoIcon.vue";
import OutlineMailIcon from "./icons/OutlineMailIcon.vue";

export default defineComponent({
  name: "HelloWorld",
  components: { GithubIcon, NaschiLogoIcon, OutlineMailIcon },
});
</script>

<style scoped>
h1 {
  color: #d3d3d3;
  margin: 100px 0 0;
}

.link-box {
  align-items: center;
  color: #d3d3d3;
  display: flex;
  font-size: 150%;
  justify-content: center;
  height: 2em;
  margin: auto;
}
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
</style>
