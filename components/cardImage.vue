<template>
  <div>
    <dialog-kegiatan
      @close="handleClose"
      :item="item"
      :show="dialog.show"
    ></dialog-kegiatan>
    <div
      @click="handleClick"
      href="#"
      class="flex flex-col min-h-[100%] lg:flex-row items-center rounded-lg shadow w-[70vw] border md:w-max border-gray-700 bg-gray-800 hover:bg-gray-700 cursor-pointer"
    >
      <div class="md:w-full pa-2 md:h-full overflow-hidden rounded-lg">
        <img
          class="object-cover aspect-square md:w-full rounded-lg md:h-full"
          :src="item.imgUrl"
          alt=""
        />
      </div>
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5
          class="mb-2 md:text-2xl text-sm font-bold tracking-tight text-white"
        >
          {{ item.title }}
        </h5>
        <div class="overflow-y-hidden max-h-[5vh] md:max-h-max">
          <p class="mb-3 font-normal md:text-sm text-xs text-gray-400">
            {{
              item.descript.length > 50
                ? item.descript.slice(0, 50) + ' Baca Selengkapnya..'
                : item.descript
            }}
          </p>
        </div>
        <button
          @click="handleClick"
          class="text-white text-sm hover:text-gray-300"
        >
          Lihat Detail
        </button>
        <!-- Added button for viewing details -->
      </div>
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
