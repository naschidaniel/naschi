<template>
  <div class="flex-container">
    <div><button title="Back" @click="navigate(-1)">❰</button></div>
    <div @click="navigate(1)">
      <picture>
        <source
          :sizes="selectedImage.sizes"
          :srcset="selectedImage.srcsetWebp"
          type="image/webp"
        />
        <source :srcset="selectedImage.srcset" type="image/jpeg" />
        <img
          :src="selectedImage.src"
          height="100%"
          width="100%"
          :title="selectedImage.title"
        />
      </picture>
    </div>
    <div><button title="Next" @click="navigate(1)">❱</button></div>
  </div>
  <div class="flex-container">
    <p>
      {{ selectedImage.alt }}
    </p>
  </div>
</template>
<script setup lang="ts">
import { ref, computed, ComputedRef } from "vue";
import { ResponsiveSource, OptimizedImage, Gallery } from "../model/image";
import { getResponsiveSource } from "../util/getResponsiveSource";
import _gallery from "../media/gallery.json";
import _optimizedImages from "../media/media.json";

const gallery = _gallery as Gallery[];
const optimizedImages = _optimizedImages as OptimizedImage[];

const count = ref(0);
function navigate(change: number) {
  const newValue = count.value + change;
  count.value =
    gallery.length === newValue
      ? (count.value = 0)
      : newValue === -1
      ? (count.value = gallery.length - 1)
      : count.value + change;
}

const selectedImage: ComputedRef<ResponsiveSource> = computed(() => {
  const alt = gallery[count.value].alt;
  const filteredMedia = optimizedImages.filter(
    (o) => gallery[count.value].fileNameSrc === o.fileNameSrc
  );
  const title = gallery[count.value].title;
  const isThumbnail = gallery[count.value].isThumbnail;
  return getResponsiveSource(alt, isThumbnail, filteredMedia, title);
});
</script>

<style>
.flex-container {
  display: flex;
  justify-content: center;
}

.flex-container > div {
  padding: 5px;
}

button {
  position: relative;
  min-height: 100%;
  background-color: #303030;
  border: none;
  color: white;
  padding: 15px;
  font-size: 16px;
}

@media only screen and (max-width: 600px) {
  button {
    padding: 5px;
  }
}
</style>
