<template>
  <div class="container">
    <div class="wrapper">
      <div class="img-area mx-auto bg-white pa-4 rounded-xl flex-col">
        <a href="" class="flex items-start text-start self-start p-1 gap-3">
          <img
            src="/kopplingLogo.png"
            class="h-8 rounded-full"
            alt="Koppling Logo"
          />
          <span
            class="self-center text-2xl font-semibold whitespace-nowrap text-black"
            >Koppling</span
          >
        </a>
        <img
          class="rounded-xl my-2"
          v-if="imageUrl"
          :src="imageUrl"
          alt="Shared Image"
          @load="onImageLoad"
        />
        <div v-else>Loading...</div>
        <p class="text-xs">{{ fullUrl }}</p>
      </div>
    </div>
    <v-btn @click="downloadImage">Download Image</v-btn>
  </div>
</template>

<script>
import { ref } from 'vue'
import { storage } from '~/plugins/firebase'
import { getDownloadURL, ref as storageRef } from 'firebase/storage'
import html2canvas from 'html2canvas' // Import html2canvas

export default {
  data() {
    return {
      imageUrl: null, // Initialize imageUrl to null
      imageName: '', // Store the image name
    }
  },
  computed: {
    fullUrl() {
      const protocol = window.location.protocol // e.g., http:
      const host = window.location.host // e.g., 192.168.137.1:3000
      const path = this.$route.path // The current route path

      // Combine into the full URL
      return `${protocol}//${host}${path}`
    },
  },
  async asyncData({ params }) {
    const imageName = params.image // Get dynamic image name from route
    const fileRef = storageRef(storage, `${imageName}.jpg`) // Adjust the path accordingly

    // Fetch the image URL from Firebase Storage
    try {
      const imageUrl = await getDownloadURL(fileRef)
      return { imageUrl, imageName } // Return both imageUrl and imageName
    } catch (error) {
      console.error('Error fetching image:', error)
      return { imageUrl: null, imageName } // Return null if there's an error
    }
  },
  methods: {
    onImageLoad() {
      console.log('Image loaded successfully')
    },
    async downloadImage() {
      const imgArea = document.querySelector('.wrapper') // Select the img-area div
      if (imgArea) {
        try {
          // Use html2canvas to convert the img-area to canvas
          const canvas = await html2canvas(imgArea, {
            scale: 6, // Increase scale for HD
            backgroundColor: '#ffffff', // Set background color to white
          })

          // Convert canvas to data URL
          const dataUrl = canvas.toDataURL('image/png', 1.0)

          const link = document.createElement('a')
          link.href = dataUrl // Set the data URL as the link's href
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
.img-area {
  display: flex;
  flex-direction: column; /* Ensure flex column is applied */
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  width: 20rem;
}
</style>
