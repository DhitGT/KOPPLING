<template>
  <div class="min-w-fit">
    <div
      class="min-w-fit md:max-w-sm border rounded-lg shadow bg-gray-800 border-gray-700"
    >
      <div class="p-5 pb-0">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img
              class="w-10 h-10 rounded-full"
              src="https://placehold.co/300"
              alt="Bonnie image"
            />
          </div>
          <div class="flex flex-col justify-center items-start min-w-0 ms-4">
            <span class="text-sm font-medium truncate text-white">
              {{ name }}
            </span>
            <span class="text-sm truncate text-gray-400"> {{ gen }} </span>
          </div>
        </div>
      </div>
      <a
        :href="action"
        target="_blank"
        class="overflow-hidden w-full pa-2 pt-0"
      >
        <v-icon class="fixed top-10 left-4" color="grey"
          >mdi-image-multiple</v-icon
        >

        <img
          class="rounded-lg w-full aspect-square object-cover"
          :src="img"
          alt=""
        />
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    img: {
      type: String,
    },
    action: {
      type: String,
    },
    name: {
      type: String,
    },
    gen: {
      type: String,
    },
  },
}
</script>
