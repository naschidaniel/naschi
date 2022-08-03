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
        :title="selectedImage.fallback.title"
      />
    </picture>
    <button @click="count++">Add 1</button>
    <p>Count is: {{ count }}</p>
  </div>
</template>
<script setup lang="ts">
import { ref, computed, ComputedRef } from "vue";
import { ResponsiveSourceInterface } from "../model/image";

const count = ref(0);

class ResponsiveSource implements ResponsiveSourceInterface {
  sizes: string;
  srcset: string;
  srcsetWebp: string;
  fallback: {
    src: string;
    width: number;
    height: number;
  };
  constructor(
    gitsha: string,
    heights: number[],
    image: string,
    widths: number[]
  ) {
    const srcset = [];
    const srcsetWebp = [];
    for (const [i, width] of widths.entries()) {
      const prefix = image.split(".")[0];
      const extension = image.split(".")[1];
      const postfix = `.${extension}`;
      const postfixWebp = postfix.replace(extension, "webp");
      srcset.push(`${prefix}_${width}${postfix}?v=${gitsha} ${width}w`);
      srcsetWebp.push(`${prefix}_${width}${postfixWebp}?v=${gitsha} ${width}w`);
      this.sizes = `(max-width: ${width}px) 100vw`;
    }
    this.srcset = srcset.join(", ");
    this.srcsetWebp = srcsetWebp.join(", ");
    this.fallback = {
      src: image.replace(".jpg", "_1280.jpg"),
      width: widths[0],
      height: heights[0],
    };
  }
}

const gitsha = import.meta.env.VITE_APP_GITSHA;

const images: ResponsiveSource[] = [
  new ResponsiveSource(
    gitsha,
    [1280, 768, 640],
    "/media/1_grundriss.jpg",
    [1280, 768, 640]
  ),
  new ResponsiveSource(
    gitsha,
    [1280, 768, 640],
    "/media/2_wohn_esszimmer_li.jpg",
    [1280, 768, 640]
  ),
  new ResponsiveSource(
    gitsha,
    [1280, 768, 640],
    "/media/3_wohn_esszimmer_re.jpg",
    [1280, 768, 640]
  ),
];

const selectedImage: ComputedRef<ResponsiveSource> = computed(() => images[0]);
</script>
