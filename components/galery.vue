<template>
  <div class="my-12 pa-6">
    <v-container>
      <div>
        <div class="font-bold text-xl my-6 md:text-3xl text-center lg:text-4xl">
          Gallery
        </div>
        <div
          class="gallery grid grid-cols-2 gap-3 md:gap-4 justify-evenly md:grid-cols-5"
        >
          <div
            :key="`dialog-gallery-${i}`"
            class="rounded-lg border border-gray-700 cursor-pointer"
            v-for="(item, i) in displayedImages"
            @click="openImageDialog(imgUrls[item])"
          >
            <v-img
              class="rounded-lg object-cover aspect-square"
              :src="imgUrls[item]"
            >
              <template #placeholder>
                <v-skeleton-loader
                  type="image"
                  width="100%"
                  height="100%"
                ></v-skeleton-loader>
              </template>
            </v-img>
          </div>
        </div>
        <v-btn
          v-if="displayedImages.length < itemGallery.length"
          class="mt-4"
          color="primary"
          @click="loadMoreImages"
        >
          Load More
        </v-btn>
      </div>
      <!-- Dialog for fullscreen image -->
      <v-dialog
        v-model="imageDialog"
        style="margin-top: 10rem; z-index: 999"
        fullscreen
        hide-overlay
      >
        <v-card class="pt-16">
          <v-toolbar dark color="#1f2937">
            <v-btn icon dark @click="closeImageDialog">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
          <v-img :src="selectedImage" contain max-height="90vh">
            <template v-slot:append>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn icon dark @click="closeImageDialog">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-card-actions>
            </template>
          </v-img>
        </v-card>
      </v-dialog>
    </v-container>
  </div>
</template>

<script>
import { storage } from '~/plugins/firebase'
import { ref, getDownloadURL } from 'firebase/storage'

export default {
  data() {
    return {
      itemGallery: [
        'choirulrizal.jpg',
        'fest3.jpg',
        'fest4.jpg',
        'fest5.jpg',
        'mandala3.jpg',
        'mandala4.jpg',
        'mandala5.jpg',
        'mandala6.jpg',
        'mandala7.jpg',
        'mandala8.jpg',
        'mandala9.jpg',
        'mandala10.jpg',
        'mandala11.jpg',
        'mandala12.jpg',
        'mandala13.jpg',
        'outb2.jpg',
        'outb3.jpg',
        'outb4.jpg',
        'outb5.jpg',
        'outb6.jpg',
        'outb7.jpg',
        'outb8.jpg',
      ],
      imageDialog: false,
      selectedImage: '',
      imageCache: {},
      imgUrls: {},
      displayedImages: [],
    }
  },
  async created() {
    await this.preFetchImageUrls()
    this.displayedImages = this.itemGallery.slice(0, 10)
  },
  methods: {
    openImageDialog(imageUrl) {
      this.selectedImage = imageUrl
      this.imageDialog = true
    },
    closeImageDialog() {
      this.selectedImage = ''
      this.imageDialog = false
    },
    async preFetchImageUrls() {
      const promises = this.itemGallery.map(async (imgName) => {
        try {
          const fileRef = ref(storage, imgName)
          const url = await getDownloadURL(fileRef)
          this.$set(this.imgUrls, imgName, url)
        } catch (error) {
          console.error('Error getting image URL:', error)
        }
      })
      await Promise.all(promises)
    },
    loadMoreImages() {
      const startIndex = this.displayedImages.length
      const endIndex = startIndex + 10
      this.displayedImages = this.itemGallery.slice(0, endIndex)
    },
  },
}
</script>
