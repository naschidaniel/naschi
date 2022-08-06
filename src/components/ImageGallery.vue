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
import _gallery from "../media/gallery.json";
import _optimizedImages from "../media/media.json";

const gallery = _gallery as Gallery[];
const optimizedImages = _optimizedImages as OptimizedImage[];

const gitsha = import.meta.env.VITE_APP_GITSHA;

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

function getResponsiveSource(
  alt: string,
  isThumbnail: boolean,
  optimizedImages: OptimizedImage[],
  title: string
): ResponsiveSource {
  return {
    alt,
    height: 123, // TODO Dummy Value
    sizes: optimizedImages
      .map((i) => `(max-width: ${i.width}px) ${i.width}px`)
      .join(", "),
    src: optimizedImages.find((i) => i.width === 1280).fileNameSrc,
    srcset: optimizedImages
      .map((i) =>
        isThumbnail
          ? `${i.fileNameThumbnail}?v=${gitsha} ${i.width}w`
          : `${i.fileName}?v=${gitsha} ${i.width}w`
      )
      .join(", "),
    srcsetWebp: optimizedImages
      .map((i) =>
        isThumbnail
          ? `${i.fileNameThumbnailWebp}?v=${gitsha} ${i.width}w`
          : `${i.fileNameWebp}?v=${gitsha} ${i.width}w`
      )
      .join(", "),
    title,
    width: 1234,
  };
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
