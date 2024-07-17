<template>
  <div>
    <section
      class="relative min-h-[100vh] pt-24 md:pt-0 transition-opacity duration-500 ease-in-out"
    >
      <!-- Black background div -->
      <div class="absolute inset-0 bg-black"></div>

      <!-- Main background image div with fading animation -->
      <div
        :style="{ backgroundImage: `url(${currentBackground})` }"
        class="absolute inset-0 bg-center bg-no-repeat bg-cover bg-gray-700 bg-blend-multiply transition-opacity duration-1000 ease-in-out"
        :class="{ 'opacity-0': fadingOut, 'opacity-100': !fadingOut }"
      ></div>

      <div
        class="relative z-10 px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56"
      >
        <h1
          class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl"
        >
          Komunitas Pelajar Pecinta Lingkungan
        </h1>
        <p
          class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48"
        >
          We Safe, We Care
        </p>
        <div
          class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0"
        >
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdH5ainp7B7cj1kLM4UuAsTtGDs5U2RwPFDc1kRVJUoPLDn9g/viewform"
            target="_blank"
            style="color: white"
            class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-[#80AF81] hover:bg-[#508D4E]"
          >
            <span class="text-white"> Join Koppling </span>
            <svg
              class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
          <a
            href="#about-us"
            class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-[#80AF81] visited:text-[#80AF81] rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
          >
            <span class="text-[#80AF81]"> Pelajari Lebih Lanjut </span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      backgrounds: [
        'bgJumbo.jpg',
        'bgJumbo2.jpg',
        'bgJumbo3.jpg',
        'bgJumbo4.jpg',
        'bgJumbo5.jpg',
        'choirulrizal.jpg',
        'mandala3.jpg',

        // Add more image URLs here
      ],
      currentBackgroundIndex: 0,
      fadingOut: false,
      phoneNumber: '6285718251092', // Replace with your phone number
      message: 'Saya mau join Koppling',
    }
  },

  computed: {
    whatsappLink() {
      const encodedMessage = encodeURIComponent(this.message)
      return `https://wa.me/${this.phoneNumber}?text=${encodedMessage}`
    },
    currentBackground() {
      return this.backgrounds[this.currentBackgroundIndex]
    },
  },
  methods: {
    changeBackground() {
      this.fadingOut = true
      setTimeout(() => {
        this.currentBackgroundIndex =
          (this.currentBackgroundIndex + 1) % this.backgrounds.length
        this.fadingOut = false
      }, 1000) // Match this duration with the CSS animation duration
    },
  },
  mounted() {
    setInterval(this.changeBackground, 5000) // Change background every 10 seconds
  },
}
</script>
<style scoped>
.section {
  transition: opacity 1s ease-in-out;
}
</style>
