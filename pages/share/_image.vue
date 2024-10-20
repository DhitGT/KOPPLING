<template>
  <div>
    <div class="img-area flex-col">
      <h4>Koppling.site</h4>
      <img
        v-if="imageUrl"
        :src="imageUrl"
        alt="Shared Image"
        @load="onImageLoad"
      />

      <div v-else>Loading...</div>
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
  async asyncData({ params }) {
    const imageName = params.image // Get dynamic image name from route
    // alert(imageName);
    const fileRef = storageRef(storage, `${imageName}.jpg`) // Adjust the path accordingly

    // Fetch the image URL from Firebase Storage
    try {
      const imageUrl = await getDownloadURL(fileRef)
      return { imageUrl }
    } catch (error) {
      console.error('Error fetching image:', error)
      return { imageUrl: null } // Return null if there's an error
    }
  },
  methods: {
    onImageLoad() {
      console.log('Image loaded successfully')
    },
    async downloadImage() {
      const imgArea = document.querySelector('.img-area') // Select the img-area div
      if (imgArea) {
        const canvas = await html2canvas(imgArea) // Convert the img-area to canvas
        const link = document.createElement('a')
        link.href = canvas.toDataURL('image/jpeg') // Convert canvas to data URL
        link.download = 'downloaded_image.jpg' // Name of the downloaded file
        link.click()
      } else {
        console.error('Image area not found')
      }
    },
  },
}
</script>

<style>
.img-area {
  /* Optional styling for the image area */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  width: 20rem;
}
</style>
