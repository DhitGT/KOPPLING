<template>
  <footer class="rounded-lg shadow bg-gray-900">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <a
          href="https://koppling.site/"
          class="flex items-center mb-4 rounded-full sm:mb-0 space-x-3 rtl:space-x-reverse"
        >
          <img
            src="kopplingLogo.png"
            class="h-8 rounded-full"
            alt="Koppling Logo"
          />
          <span
            class="self-center text-2xl font-semibold whitespace-nowrap text-white"
            >Koppling</span
          >
        </a>
        <ul
          class="flex justify-end gap-8 flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 text-gray-400"
        >
          <li>
            <a href="#about-us" class="foo-link hover:underline me-4 md:me-6"
              >About</a
            >
          </li>

          <li>
            <a href="#" class="foo-link hover:underline">Contact</a>
          </li>
        </ul>
      </div>
      <hr class="my-6 sm:mx-auto border-gray-700 lg:my-8" />
      <span class="block text-sm sm:text-center text-gray-400"
        >© 2024
        <a href="https://koppling.site/" class="hover:underline"
          >koppling.site</a
        >. All Rights Reserved.</span
      >
    </div>
  </footer>
</template>
<script>
export default {
  methods: {
    handleScroll() {
      this.isTop = window.scrollY === 0
    },
    scrollToSection(event) {
      event.preventDefault()
      const targetId = event.currentTarget.getAttribute('href').substring(1)
      const targetElement = document.getElementById(targetId)
      const offsetPosition = targetElement.offsetTop - this.offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll() // Initialize state based on current scroll position

    // Add event listeners to nav links
    document.querySelectorAll('.foo-link').forEach((link) => {
      link.addEventListener('click', this.scrollToSection)
    })
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)

    // Remove event listeners from nav links
    document.querySelectorAll('.foo-link').forEach((link) => {
      link.removeEventListener('click', this.scrollToSection)
    })
  },
}
</script>
