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
        :src="selectedImage.src"
        height="100%"
        width="100%"
        :title="selectedImage.title"
      />
    </picture>
    <div class="thumbnails-container">
      <div class="thumbnails">
        <button class="nav-button" title="Back" @click="navigate(-1)">❰</button>
      </div>
      <div
        v-for="(item, index) in gallery"
        :key="item.fileNameSrc"
        class="thumbnails"
      >
        <div class="md-d-none">
          <span
            :style="index === count ? 'opacity: 100%;' : 'opacity: 30%;'"
            class="dot"
          ></span>
        </div>
        <div class="sm-d-none">
          <picture
            style="cursor: pointer"
            :style="index === count ? 'opacity: 100%;' : 'opacity: 30%;'"
            @click="count = index"
          >
            <source
              :srcset="
                getResponsiveSource(
                  '',
                  true,
                  filteredMedia(item.fileNameSrc),
                  ''
                ).srcsetWebp
              "
              type="image/webp"
            />
            <source :srcset="selectedImage.srcset" type="image/jpeg" />
            <img
              class="image"
              :srcset="
                getResponsiveSource(
                  '',
                  true,
                  filteredMedia(item.fileNameSrc),
                  ''
                ).src
              "
              height="100%"
              width="100%"
              :title="selectedImage.title"
            />
          </picture>
        </div>
      </div>
      <div class="thumbnails">
        <button class="nav-button" title="Next" @click="navigate(1)">❱</button>
      </div>
    </div>
    <div class="thumbnails-container">
      <p>
        {{ selectedImage.alt }}
      </p>
    </div>
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

function filteredMedia(fileNameSrc: string) {
  return optimizedImages.filter((o) => fileNameSrc === o.fileNameSrc);
}

const selectedImage: ComputedRef<ResponsiveSource> = computed(() => {
  const alt = gallery[count.value].alt;

  const title = gallery[count.value].title;
  const isThumbnail = gallery[count.value].isThumbnail;
  return getResponsiveSource(
    alt,
    isThumbnail,
    filteredMedia(gallery[count.value].fileNameSrc),
    title
  );
});
</script>

<style scoped>
.thumbnails-container {
  display: flex;
  justify-content: space-between;
}
.thumbnails {
  padding: 2px;
  align-self: center;
}

.dot {
  height: 12px;
  width: 12px;
  background-color: #bbb;
  border-radius: 50%;
  display: block;
}

.nav-button {
  background-color: #303030;
  border: none;
  color: white;
  padding: 15px;
  font-size: 16px;
}

.image {
  display: block;
  margin: auto;
}
</style>
