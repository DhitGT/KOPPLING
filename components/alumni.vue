<template>
  <div class="my-12">
    <div class="pa-6">
      <v-container>
        <div class="flex flex-col items-center justify-center">
          <span class="text-4xl font-bold mb-5">Alumni Kami</span>
          <p class="mb-3 font-normal text-lg text-gray-600">
            Di bawah ini adalah kaka-kaka alumni KOPPLING yang masih aktif
            mengikuti berbagai acara dari KOPPLING, serta masih sering
            membimbing anggota KOPPLING.
          </p>
        </div>
      </v-container>
    </div>

    <div class="bg-[#D1E9D2]">
      <v-container class="bg-[#D1E9D2] py-6">
        <carousel
          paginationColor="gray"
          paginationActiveColor="black"
          ref="carousel"
          :per-page-custom="[
            [320, 1],
            [768, 3],
            [1200, 4],
          ]"
          :mouse-drag="true"
          :pagination-enabled="true"
        >
          <slide
            v-if="indexPage > 1"
            style="padding-right: 10px; padding-left: 10px"
            class="flex items-center justify-center w-full h-100 pa-1"
          >
          </slide>
          <slide
            style="padding: 10px"
            v-for="(item, i) in itemAlumni"
            :key="`alumni-${i}`"
          >
            <alumni-card :item="item" />
          </slide>
          <slide
            v-if="itemAlumni.length === 7 * perPage && dotsTotal > 7"
            style="padding-right: 10px; padding-left: 10px"
            class="flex items-center justify-center w-full h-100 pa-1"
          >
          </slide>
        </carousel>
      </v-container>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
// sgdgdfgdfgdf
export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      itemAlumni: [],
      windowWidth: 0,
      startIndex: 0,
      indexPage: 1,
      isNext: false,
      originalItemAlumni: [
        {
          name: '@ri_iki',
          gen: 'Koppling Gen II',
          imgUrl: 'kariki.jpg',
          action: 'https://www.instagram.com/ri_iki/',
          profilePic: 'kariki.jpg',
        },
        {
          name: '@naufal121m',
          gen: 'Koppling Gen III',
          imgUrl: 'kanaufal.jpg',
          action: 'https://www.instagram.com/p/Cg6iQD_L6XX/',
          profilePic: 'kanaufalpfp.jpg',
        },
        {
          name: '@deviany_azhra',
          gen: 'Koppling Gen IV',
          imgUrl: 'kadevi.jpg',
          action: 'https://www.instagram.com/deviany_azhra/?hl=en',
          profilePic: 'kadevipfp.jpg',
        },
        {
          name: '@arsitaa.a',
          gen: 'Koppling Gen VI',
          imgUrl: 'kaarsita.jpg',
          action: 'https://www.instagram.com/arsitaa.a/',
          profilePic: 'kaarsitapfp.jpg',
        },
        {
          name: '@choirul_rizall',
          gen: 'Koppling Gen VI',
          imgUrl: 'karizal.jpg',
          action: 'https://www.instagram.com/p/CpHB6M0r8u2/?hl=en',
          profilePic: 'karizalpfp.jpg',
        },
        {
          name: '@adha_ysn',
          gen: 'Koppling Gen VII',
          imgUrl: 'kaadha.jpg',
          action: 'https://www.instagram.com/adha_ysn/',
          profilePic: 'kaadhapfp.jpg',
        },
        {
          name: '@faturhmnfr',
          gen: 'Koppling Gen VII',
          imgUrl: 'kafatur.jpg',
          action: 'https://www.instagram.com/faturhmnfr/',
          profilePic: 'kafaturpfp.jpg',
        },
        {
          name: '@dfsyaa_',
          gen: 'Koppling Gen VII',
          imgUrl: 'kadaffa.jpg',
          action: 'https://www.instagram.com/dfsyaa_/',
          profilePic: 'kadaffapfp.jpg',
        },
        {
          name: '@ranggaa_2604',
          gen: 'Koppling Gen IX',
          imgUrl: 'karangga.jpg',
          action: 'https://www.instagram.com/ranggaa_2604/?hl=en',
          profilePic: 'karanggapfp.jpg',
        },
      ],
      currentPage: 0,
    }
  },
  mounted() {
    this.getWindowWidth()
    window.addEventListener('resize', this.getWindowWidth)
    this.$refs.carousel.$on('pageChange', this.onPageChange)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.getWindowWidth)
    this.$refs.carousel.$off('pageChange', this.onPageChange)
  },

  computed: {
    dotsTotal() {
      this.windowWidth = window.innerWidth
      if (this.windowWidth >= 320 && this.windowWidth < 768) {
        return this.originalItemAlumni.length / 1
      } else if (this.windowWidth >= 768 && this.windowWidth < 1200) {
        return this.originalItemAlumni.length / 3
      } else if (this.windowWidth >= 1200) {
        return this.originalItemAlumni.length / 4
      }
    },
    perPage() {
      this.windowWidth = window.innerWidth
      if (this.windowWidth >= 320 && this.windowWidth < 768) {
        return 1 // 1 item per page for screens smaller than 320px
      } else if (this.windowWidth >= 768 && this.windowWidth < 1200) {
        return 3 // 3 items per page for screens between 320px and 767px
      } else if (this.windowWidth >= 1200) {
        return 4 // 4 items per page for screens between 768px and 1199px
      }
    },
  },

  methods: {
    onPageChange(page) {
      this.currentPage = page // Update the current page
      console.log('Page changed to', page)
      if (page === 7 && this.indexPage == 1) {
        console.log('next')
        this.showNextItems()
      } else if (page === 0 && this.indexPage != 1) {
        console.log('prev')
        this.showPreviousItems()
      } else if (page === 8 && this.indexPage != 1) {
        this.showNextItems()
      }
    },
    prev() {
      this.$refs.carousel.goToPage(this.$refs.carousel.currentPage - 1)
    },
    next() {
      this.$refs.carousel.goToPage(this.$refs.carousel.currentPage + 1)
    },
    getWindowWidth() {
      this.windowWidth = window.innerWidth

      if (this.dotsTotal > 7) {
        this.itemAlumni = this.originalItemAlumni.slice(
          this.startIndex,
          this.startIndex + 7 * this.perPage
        )
      } else {
        this.itemAlumni = this.originalItemAlumni
      }
    },
    showNextItems() {
      this.indexPage++
      this.$refs.carousel.goToPage(1)
      this.startIndex += 7 * this.perPage
      this.itemAlumni = this.originalItemAlumni.slice(
        this.startIndex,
        this.startIndex + 7 * this.perPage
      )
    },
    showPreviousItems() {
      this.indexPage--
      if (this.indexPage == 1) {
        this.$refs.carousel.goToPage(0)
      } else {
        this.$refs.carousel.goToPage(1)
      }
      this.startIndex -= 7 * this.perPage
      this.itemAlumni = this.originalItemAlumni.slice(
        this.startIndex,
        this.startIndex + 7 * this.perPage
      )
    },
  },
}
</script>

<style scoped>
.carousel__pagination-indicator {
  width: 6px;
  height: 6px;
  margin: 0 2px;
  background-color: rgb(206, 0, 0); /* Adjust the color as needed */
}

.carousel__arrow {
  z-index: 1; /* Ensure the buttons are on top of the card image */
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
}

.carousel__arrow:hover {
  background-color: rgba(0, 0, 0, 0.7);
}
.carousel__arrow--left {
  left: 10px;
}
.carousel__arrow--right {
  right: 10px;
}
</style>
