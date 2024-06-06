<template>
  <div>
    <nav
      :class="{ 'bg-transparent': isTop, 'bg-gray-900': !isTop }"
      class="fixed w-full top-0 transition-colors duration-500 ease-in-out"
      style="z-index: 999"
    >
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
      >
        <a href="" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="kopplingLogo.png"
            class="h-8 rounded-full"
            alt="Flowbite Logo"
          />
          <span
            class="self-center text-2xl font-semibold whitespace-nowrap text-white"
            >Koppling</span
          >
        </a>
        <button
          @click="toggleSidebar"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul
            class="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0"
          >
            <li>
              <a
                href="#about-us"
                class="block nav-link py-2 px-3 rounded md:bg-transparent md:p-0 text-white md:text-blue-500"
                >About</a
              >
            </li>
            <li>
              <a
                href="#activities"
                class="block nav-link py-2 px-3 rounded md:border-0 md:p-0 text-white hover:text-blue-500 hover:bg-gray-700 md:hover:bg-transparent"
                >Activities</a
              >
            </li>
            <li>
              <a
                href="#alumni"
                class="block nav-link py-2 px-3 rounded md:border-0 md:p-0 text-white hover:text-blue-500 hover:bg-gray-700 md:hover:bg-transparent"
                >Alumni</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Mobile Sidebar -->
    <!-- Sidebar with transition classes -->
    <div
      v-if="isSidebarOpen"
      class="fixed inset-0 bg-gray-900 bg-opacity-75 z-50 md:hidden transition-opacity duration-1000 ease-in-out"
      :class="isSidebarOpen ? 'opacity-100' : 'opacity-0'"
      style="z-index: 999999"
    >
      <div
        class="absolute top-0 right-0 w-64 h-full bg-gray-800 shadow-md p-4 transform transition-transform duration-1000 ease-in-out"
        :class="isSidebarOpen ? 'translate-x-0' : 'translate-x-full'"
      >
        <button @click="toggleSidebar" class="mb-4 text-right">
          <svg
            class="w-6 h-6 text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <ul class="font-medium flex flex-col space-y-4">
          <li>
            <a
              href="#about-us"
              class="block nav-link py-2 px-3 rounded text-gray-800 hover:text-blue-500 hover:bg-gray-200"
              aria-current="page"
              >About</a
            >
          </li>
          <li>
            <a
              href="#activities"
              class="block nav-link py-2 px-3 rounded text-gray-800 hover:text-blue-500 hover:bg-gray-200"
              >Activities</a
            >
          </li>
          <li>
            <a
              href="#alumni"
              class="block nav-link py-2 px-3 rounded text-gray-800 hover:text-blue-500 hover:bg-gray-200"
              >Alumni</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isTop: true,
      isSidebarOpen: false,
      offset: 100, // Set your desired offset height here (e.g., height of the navbar)
    }
  },
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
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll() // Initialize state based on current scroll positionkkjhhk

    // Add event listeners to nav links
    document.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', this.scrollToSection)
    })
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)

    // Remove event listeners from nav links
    document.querySelectorAll('.nav-link').forEach((link) => {
      link.removeEventListener('click', this.scrollToSection)
    })
  },
}
</script>
