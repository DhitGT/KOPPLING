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
        <v-container>
          <section
            class="relative bg-center bg-no-repeat rounded-xl bg-cover bg-blend-multiply bg-[url('../static/bgJumbo2.jpg')]"
          >
            <div
              class="absolute rounded-xl inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.2)] to-black"
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
                class="text-xl mt-auto absolute bottom-7 opacity-90 font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl"
              >
                Judul Kegiatan nya
              </span>
            </div>
          </section>
        </v-container>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'success',
    },
    text: {
      type: String,
      default: '',
    },
    loading: {
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
  }),
  methods: {
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
