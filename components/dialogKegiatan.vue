<template>
  <v-row justify="center  my-2" style="z-index: 9999">
    <v-dialog
      v-model="tampilkan"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
      class="pt-28 green"
    >
      <v-card color="#1f2937">
        <v-toolbar dark color="#111827">
          <v-btn icon dark @click="tampilkan = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-container class="flex flex-col md:gap-6 md:flex-row">
          <div class="md:w-1/3">
            <section
              :class="[
                'relative',
                'bg-center',
                'bg-no-repeat',
                'rounded-t-xl',
                'bg-cover',
                'bg-blend-multiply',
              ]"
              :style="{ backgroundImage: `url(${item.imgUrl})` }"
              @click="openImageDialog(item.imgUrl)"
            >
              <div
                class="absolute rounded-t-xl inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.2)] to-black"
              ></div>
              <v-img
                class="fixed top-4 rounded-full w-8 h-8 left-4"
                color="grey"
                src="kopplingLogo.png"
              />
              <div
                class="flex flex-col px-4 mx-auto max-w-screen-xl h-full py-24 lg:py-56 relative"
              >
                <span
                  class="text-xl mt-auto absolute bottom-7 opacity-90 font-extrabold tracking-tight leading-none text-white md:text-3xl lg:text-4xl"
                >
                  {{ item.title }}
                </span>
              </div>
            </section>
            <div class="detail">
              <div>
                <span class="text-gray-300">{{ item.descript }}</span>
              </div>
              <div class="flex gap-2 text-gray-300 mt-2">
                <v-icon small>mdi-map-marker</v-icon>
                <span>{{ item.location }}</span>
              </div>
              <div class="flex gap-2 text-gray-300">
                <v-icon small>mdi-calendar-outline</v-icon>
                <span>{{ item.date }}</span>
              </div>
            </div>
          </div>
          <div class="md:w-2/3">
            <div class="font-bold text-xl my-6 md:text-3xl lg:text-4xl">
              Gallery
            </div>
            <div class="gallery grid grid-cols-3 gap-2 md:grid-cols-4">
              <div
                :key="`gallery-${i}`"
                class="rounded-lg border border-gray-700 cursor-pointer"
                v-for="(item, i) in item.galery"
                @click="openImageDialog(item)"
              >
                <v-img
                  class="rounded-lg object-cover aspect-square"
                  :src="item"
                ></v-img>
              </div>
            </div>
          </div>
        </v-container>
      </v-card>
    </v-dialog>

    <!-- Dialog for fullscreen image -->
    <v-dialog v-model="imageDialog" fullscreen hide-overlay>
      <v-card>
        <v-toolbar dark color="#1f2937">
          <v-btn icon dark @click="closeImageDialog">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <div class="flex items-center justify-center pa-1 h-[90vh]">
          <v-img
            :src="selectedImage"
            class="my-auto align-center"
            contain
            max-height="90vh"
          >
          </v-img>
        </div>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    tampilkan: false,
    dialog: false,
    notifications: false,
    sound: true,
    widgets: false,
    galery: [
      {
        url: 'https://placehold.co/300',
      },
      {
        url: 'https://placehold.co/300',
      },
      // Other gallery items...
    ],
    imageDialog: false,
    selectedImage: '',
  }),
  methods: {
    openImageDialog(imageUrl) {
      this.selectedImage = imageUrl
      this.imageDialog = true
    },
    closeImageDialog() {
      this.selectedImage = ''
      this.imageDialog = false
    },
    konfirmasiBtn() {
      this.$emit('confirm')
    },
  },
  watch: {
    tampilkan(val) {
      if (!val) {
        this.$emit('close', val)
      }
    },
    show(val) {
      this.tampilkan = val
    },
  },
}
</script>
