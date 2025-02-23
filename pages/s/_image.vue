<template>
  <div class="container">
    <div ref="imgArea" class="p-4 bg-[#f1fdf3]">
      <div class="wrapper mx-auto bg-white p-4 rounded-xl flex-col">
        <div class="flex items-start text-start self-start p-1 gap-3">
          <img
            src="/kopplingLogo.png"
            class="h-11 rounded-full"
            alt="Koppling Logo"
          />
          <span
            class="self-center text-2xl font-semibold whitespace-nowrap text-black"
          >
            Koppling
          </span>
        </div>
        <img
          class="rounded-xl my-2"
          v-if="imageUrl"
          :src="imageUrl"
          alt="Shared Image"
          ref="OriginalImgArea"
          @load="onImageLoad"
        />
        <div v-else>Loading...</div>
        <p class="text-xs">{{ fullUrl }}</p>
      </div>
    </div>
    <div class="flex gap-2 justify-center">
      <div>
        <v-btn @click="downloadImage" class="mx-auto">
          <v-icon
            color="black"
            size="20"
            class="text-white text-xs rounded-full p-1"
            >mdi-content-save</v-icon
          >
          Save Image</v-btn
        >
      </div>
      <div>
        <v-btn @click="downloadOriginalImage" class="mx-auto">
          <v-icon
            color="black"
            size="20"
            class="text-white text-xs rounded-full p-1"
            >mdi-content-save</v-icon
          >
          Save Original Image</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { storage } from '~/plugins/firebase'
import { getDownloadURL, ref as storageRef } from 'firebase/storage'
import { toPng } from 'html-to-image' // Import the library

export default {
  data() {
    return {
      imageUrl: null,
      imageName: '',
    }
  },
  computed: {
    fullUrl() {
      const protocol = window.location.protocol
      const host = window.location.host
      const path = this.$route.path
      return `${protocol}//${host}${path}`
    },
  },
  async asyncData({ params }) {
    const imageName = params.image
    const fileRef = storageRef(storage, `${imageName}.jpg`)

    try {
      const imageUrl = await getDownloadURL(fileRef)
      return { imageUrl, imageName }
    } catch (error) {
      console.error('Error fetching image:', error)
      return { imageUrl: null, imageName }
    }
  },
  methods: {
    onImageLoad() {
      console.log('Image loaded successfully')
    },
    async downloadImage() {
      const imgArea = this.$refs.imgArea // Use ref to access the imgArea div
      if (imgArea) {
        try {
          const dataUrl = await toPng(imgArea, {
            quality: 1, // Set quality to highest
            pixelRatio: 3, // Increase pixel ratio for HD
            bgcolor: '#f1fdf3', // Set background color to white
          })

          const link = document.createElement('a')
          link.href = dataUrl
          link.download = `${this.imageName}.png` // Name of the downloaded file
          link.click() // Trigger the download
        } catch (error) {
          console.error('Error generating image:', error)
        }
      } else {
        console.error('Image area not found')
      }
    },
    async downloadOriginalImage() {
      const imgArea = this.$refs.OriginalImgArea // Use ref to access the imgArea div
      if (imgArea) {
        try {
          const dataUrl = await toPng(imgArea, {
            quality: 1, // Set quality to highest
            pixelRatio: 3, // Increase pixel ratio for HD
            bgcolor: '#f1fdf3', // Set background color to white
          })

          const link = document.createElement('a')
          link.href = dataUrl
          link.download = `${this.imageName}.png` // Name of the downloaded file
          link.click() // Trigger the download
        } catch (error) {
          console.error('Error generating image:', error)
        }
      } else {
        console.error('Image area not found')
      }
    },
  },
}
</script>

<style>
.wrapper {
  display: flex;
  flex-direction: column; /* Ensure flex column is applied */
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  width: 100%; /* Change to 100% to prevent cropping */
  max-width: 600px; /* Optional: Set a maximum width */
}
</style>
