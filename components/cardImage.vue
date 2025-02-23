<template>
  <div class="h-full rounded-lg">
    <div
      @click="handleClick"
      href="#"
      class="flex min-w-fit md:max-w-sm flex-col h-full items-center rounded-xl shadow border border-[#F1FDF3] bg-[#80AF81] hover:bg-[#508D4E] cursor-pointer"
    >
      <div class="ma-2 overflow-hidden rounded-lg">
        <img
          class="object-cover w-full aspect-square rounded-lg"
          :src="item.imgUrl"
          alt=""
        />
      </div>
      <div class="flex flex-col justify-start p-4 leading-normal">
        <div class="flex justify-space-between" style="max-height: fit-content">
          <p class="font-normal md:text-sm text-xs text-[#F1FDF3]">
            Gen {{ item.gen }}
          </p>
          <p class="font-normal md:text-sm text-xs text-[#F1FDF3]">
            {{ item.date }}
          </p>
        </div>
        <h5
          class="md:mb-2 md:text-2xl text-lg font-bold tracking-tight text-[#F1FDF3]"
        >
          {{ item.title }}
        </h5>
        <div class="overflow-y-hidden max-h-[5vh] md:max-h-max">
          <p class="mb-3 font-normal md:text-sm text-xs text-[#F1FDF3]">
            {{
              item.descript.length > 60
                ? item.descript.slice(0, 60) + ' ...'
                : item.descript
            }}
          </p>
        </div>
        <button
          @click="handleClick"
          class="text-[#F1FDF3] text-sm hover:text-gray-300 mt-auto"
        >
          Lihat Detail
        </button>
        <!-- Added button for viewing details -->
      </div>
    </div>
    <dialog-kegiatan
      @close="handleClose"
      :item="item"
      :show="dialog.show"
    ></dialog-kegiatan>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
    },
  },
  data() {
    return {
      dialog: {
        show: false,
      },
    }
  },
  methods: {
    handleClick() {
      this.dialog.show = true
    },
    handleClose() {
      this.dialog.show = false
    },
  },
}
</script>
