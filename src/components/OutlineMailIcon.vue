// https://heroicons.com/ - by @steveschoger - MIT Licensed - solid mail icon
<template>
  <a class="box" href="mailto:daniel@naschi.at" title="Write me a message">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-mail"
      viewBox="0 0 20 20"
      fill="rgb(201, 201, 201)"
    >
      <path
        d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
      />
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>
  </a>
</template>

<style scoped>
a {
  align-items: center;
  display: flex;
  fill-opacity: 0.8;
  transition: fill-opacity 0.5s ease-in-out;
}

a:hover {
  fill-opacity: 1;
  transition: fill-opacity 0.5s ease-in-out;
}
</style>
