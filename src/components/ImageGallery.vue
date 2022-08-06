<template>
  <div>
    <picture>
      <source
        :sizes="selectedImage.sizes"
        :srcset="selectedImage.srcsetWebp"
        type="image/webp"
      />
      <source :srcset="selectedImage.srcset" type="image/jpeg" />
      <img
        :src="selectedImage.fallback.src"
        height="70%"
        width="70%"
        title="hoho"
      />
    </picture>
    <button @click="add()">Add 1</button>
    <p>Count is: {{ count }}</p>
  </div>
</template>
<script setup lang="ts">
import { ref, computed, ComputedRef } from "vue";
import { ResponsiveSource } from "../model/image";

const count = ref(0);
const add = () => (count.value = count.value + 1);

const images = [
  {
    sizes: "",
    srcset: "",
    srcsetWebp: "",
    fallback: {
      src: "/media/8_schlafzimmer_thumbnail_640.jpg",
      width: 640,
      height: 640,
    },
  } as ResponsiveSource,
];

const gitsha = import.meta.env.VITE_APP_GITSHA;

const selectedImage: ComputedRef<ResponsiveSource> = computed(() => images[0]);
</script>
