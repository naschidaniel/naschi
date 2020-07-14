<template>
  <div class="bg-gray-900">
    <div class="antialiased flex flex-col min-h-screen mx-auto lg:max-w-6xl">
      <TheNavbar class="w-full p-6" />
      <nuxt class="flex-grow w-full p-6 text-gray-100 text-xl" />
      <TheFooter class="flex justify-center p-6" />
    </div>
  </div>
</template>

<script>
import TheFooter from "@/components/TheFooter"
import TheNavbar from "@/components/TheNavbar"

export default {
  components: {
    TheNavbar,
    TheFooter,
  },
}
</script>
