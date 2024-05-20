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
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
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
                href="#"
                class="block py-2 px-3 rounded md:bg-transparent md:p-0 text-white md:text-blue-500"
                aria-current="page"
                >Home</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 rounded md:border-0 md:p-0 text-white hover:text-blue-500 hover:bg-gray-700 md:hover:bg-transparent"
                >About</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 rounded md:border-0 md:p-0 text-white hover:text-blue-500 hover:bg-gray-700 md:hover:bg-transparent"
                >Services</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isTop: true,
    }
  },
  methods: {
    handleScroll() {
      this.isTop = window.scrollY === 0
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll() // Initialize state based on current scroll position
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>
<style scoped>
nav {
  transition: background-color 0.5s ease-in-out;
}

.bg-transparent {
  background-color: transparent;
}
</style>
