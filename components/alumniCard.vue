<template>
  <div class="min-w-fit">
    <div
      class="min-w-fit md:max-w-sm border rounded-lg shadow bg-gray-800 border-gray-700"
    >
      <div class="p-5 pb-0">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img class="w-10 h-10 rounded-full" :src="item.profilePic" />
          </div>
          <div class="flex flex-col justify-center items-start min-w-0 ms-4">
            <span class="text-sm font-medium truncate text-white">
              {{ item.name }}
            </span>
            <span class="text-sm truncate text-gray-400"> {{ item.gen }} </span>
          </div>
        </div>
      </div>
      <a
        :href="item.action"
        target="_blank"
        class="overflow-hidden w-full pa-0 pt-0"
      >
        <v-icon class="fixed top-10 left-4" color="white">mdi-instagram</v-icon>

        <img
          class="rounded-lg w-full aspect-square object-cover"
          :src="item.imgUrl"
          alt=""
        />
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
    },
  },
}
</script>
