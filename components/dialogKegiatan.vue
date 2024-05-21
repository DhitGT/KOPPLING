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
          <v-toolbar-title>Lorem ipsum dolor sit.</v-toolbar-title>
        </v-toolbar>
        <v-list three-line subheader color="#1f2937">
          <v-subheader>User Controls</v-subheader>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Content filtering</v-list-item-title>
              <v-list-item-subtitle
                >Set the content filtering level to restrict apps that can be
                downloaded</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Password</v-list-item-title>
              <v-list-item-subtitle
                >Require password for purchase or use password to restrict
                purchase</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list three-line subheader color="#1f2937">
          <v-subheader>General</v-subheader>
          <v-list-item>
            <v-list-item-action>
              <v-checkbox v-model="notifications"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Notifications</v-list-item-title>
              <v-list-item-subtitle
                >Notify me about updates to apps or games that I
                downloaded</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <v-checkbox v-model="sound"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Sound</v-list-item-title>
              <v-list-item-subtitle
                >Auto-update apps at any time. Data charges may
                apply</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <v-checkbox v-model="widgets"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Auto-add widgets</v-list-item-title>
              <v-list-item-subtitle
                >Automatically add home screen widgets</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>
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
