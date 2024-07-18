<template>
  <div class="min-w-fit">
    <div
      class="min-w-fit md:max-w-sm border rounded-lg shadow bg-[#80AF81] border-[#D1E9D2]"
    >
      <div class="p-5 pb-0">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img
              class="w-10 h-10 rounded-full border-2 border-solid border-[#F1FDF3] object-cover"
              :src="item.profilePic"
            />
          </div>
          <div class="flex flex-col justify-center items-start min-w-0 ms-4">
            <span class="text-lg font-medium truncate text-[#F1FDF3]">
              {{ item.name }}
            </span>
            <span class="text-sm truncate text-[#F1FDF3]">
              {{ item.gen }}
            </span>
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
          class="rounded-b-lg w-full aspect-square object-cover"
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
