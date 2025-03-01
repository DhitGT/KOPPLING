<template>
  <div class="my-12 py-6">
    <v-container>
      <div>
        <div class="text-4xl font-bold text-center mb-12 mx-auto">Gallery</div>
        <div
          class="gallery grid grid-cols-2 gap-3 md:gap-4 justify-between md:grid-cols-5"
        >
          <div
            :key="`dialog-gallery-${i}`"
            class="relative rounded-lg border border-[#D6EFD8] cursor-pointer"
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
              <!-- Share icon -->
              <router-link
                :to="`/s/${item.split('.')[0]}`"
                class="absolute top-2 right-2"
              >
                <v-icon
                  color="white"
                  size="20"
                  class="text-white text-xs rounded-full p-1"
                  >mdi-share-variant</v-icon
                >
              </router-link>
            </v-img>
          </div>
        </div>
        <div class="w-full flex items-center">
          <v-btn
            v-if="displayedImages.length < itemGallery.length"
            class="mt-4 mx-auto px-9"
            color="#80AF81"
            @click="loadMoreImages"
          >
            <span class="text-[#F1FDF3]"> Load More </span>
          </v-btn>
        </div>
      </div>
      <!-- Dialog for fullscreen image -->
      <v-dialog
        v-model="imageDialog"
        style="margin-top: 10rem; z-index: 999"
        fullscreen
        hide-overlay
      >
        <v-toolbar dark color="#508D4E">
          <v-btn icon dark @click="closeImageDialog">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card class="pt-16" color="black">
          <div class="flex items-center bg-black justify-center min-h-[85vh]">
            <v-img :src="selectedImage" contain max-height="100vh"></v-img>
          </div>
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
        'w4c_cleanup.jpg',
        'w4c_cleanup_2.jpg',
        'w4c_cleanup_3.jpg',
        'w4c_cleanup_5.jpg',
        'w4c_cleanup_6.jpg',
        'w4c_cleanup_7.jpg',
        'w4c_cleanup_8.jpg',
        'kuta.jpg',
        'goa_tawanan.jpg',
        'goa_tawanan_2.jpg',
        'goa_tawanan_3.jpg',
        'goa_tawanan_4.jpg',
        'goa_tawanan_5.jpg',
        'goa_tawanan_6.jpg',
        'goa_tawanan_7.jpg',
        'kinifarm1.jpg',
        'kinifarm2.jpg',
        'kinifarm3.jpg',
        'kinifarm4.jpg',
        'kinifarm6.jpg',
        'kinifarm7.jpg',
        'kinifarm8.jpg',
        'plogging1.jpg',
        'plogging2.jpg',
        'plogging3.jpg',
        'plogging4.jpg',
        'plogging5.jpg',
        'plogging6.jpg',
        'plogging7.jpg',
        'plogging8.jpg',
        'plogging9.jpg',
        'plogging10.jpg',
        'butik1.jpg',
        'halimun1.jpg',
        'kariki.jpg',
        'kafatur.jpg',
        'kadaffa.jpg',
        'karizal.jpg',
        'diklat12-1.jpg',
        'diklat12-2.jpg',
        'diklat12-3.jpg',
        'diklat12-4.jpg',
        'diklat12-5.jpg',
        'diklat12-6.jpg',
        'diklat12-7.jpg',
        'diklat12-8.jpg',
        'diklat12-9.jpg',
        'diklat12-10.jpg',
        'diklat12-11.jpg',
        'diklat12-12.jpg',
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
    this.shuffleArray(this.itemGallery)
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
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
    },
  },
}
</script>
