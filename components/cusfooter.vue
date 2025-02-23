<template>
  <footer class="p-4 bg-[#508D4E] sm:p-6">
    <div class="mx-auto max-w-screen-xl">
      <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
          <a href="https://koppling.site" class="flex items-center">
            <img
              src="kopplingLogo.png"
              class="mr-3 h-8 rounded-full"
              alt="Koppling Logo"
            />
            <span
              class="self-center text-2xl font-semibold whitespace-nowrap text-white"
              >Koppling</span
            >
          </a>
        </div>
        <div class="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 class="mb-6 text-sm font-semibold text-white uppercase">
              Follow us
            </h2>
            <ul>
              <li class="mb-4 flex items-center">
                <v-icon class="text-white mr-2">mdi-instagram</v-icon>
                <a
                  href="https://www.instagram.com/koppling_smkn2bks/?hl=en"
                  class="hover:underline"
                >
                  <span class="text-white">@koppling_smkn2bks</span>
                </a>
              </li>
              <li class="flex items-center">
                <v-icon class="text-white mr-2">mdi-youtube</v-icon>
                <a
                  href="https://www.youtube.com/channel/UCXBwakJL8YeL-4-D7qhu4RQ"
                  class="hover:underline"
                >
                  <span class="text-white">Koppling Smkn2bks</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-white uppercase">
              Contact Us
            </h2>
            <ul>
              <li class="mb-4 flex items-center">
                <v-icon class="text-white mr-2">mdi-whatsapp</v-icon>
                <a href="https://wa.me/+6285718251092" class="hover:underline">
                  <span class="text-white">+62 85718251092</span>
                </a>
              </li>
              <li class="flex items-center">
                <v-icon class="text-white mr-2">mdi-email-outline</v-icon>
                <a
                  href="mailto:kopplingsmkn2bks@gmail.com"
                  class="hover:underline"
                >
                  <span class="text-white">kopplingsmkn2bks@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-white uppercase">
              Visitor Counter
            </h2>
            <ul>
              <li class="mb-4 flex items-center">
                <v-icon class="text-white mr-2">mdi-eye-outline</v-icon>
                <div class="flex gap-2">
                  <a href="https://www.cutercounter.com/" target="_blank"
                    ><img
                      src="https://counter6.optistats.ovh/private/freecounterstat.php?c=kzgmdbdnxb6nfpgtmgpcyfd7ulpt6eze"
                      border="0"
                      alt="visitor counter"
                  /></a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- kgkgkkjgg -->
      <hr
        class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
      />
      <div class="w-full flex items-center justify-center mx-auto">
        <span class="text-sm text-gray-200 text-center"
          >© 2025
          <a href="https://koppling.site" class="hover:underline text-white"
            ><span class="text-white">koppling.site</span></a
          >. All Rights Reserved.</span
        >
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
}
</script>

<style scoped>
@import url('https://cdn.jsdelivr.net/npm/@mdi/font@5.9.55/css/materialdesignicons.min.css');
</style>
