<template>
  <div class="my-12">
    <div class="pa-6">
      <v-container>
        <div class="flex flex-col items-center justify-center">
          <span class="text-4xl font-bold mb-5">Aktivitas Kami</span>
          <div>
            <p class="mb-3 font-normal text-lg text-gray-600">
              Adapun kegiatan yang kami lakukan adalah kegiatan yang
              berkontribusi pada pelestarian lingkungan dan pengembangan diri.
              Kami berusaha menyelenggarakan kegiatan yang bervariasi dan
              mendidik untuk menginspirasi anggota kami. Berikut adalah beberapa
              contohnya:
            </p>

            <ul class="text-gray-600">
              <li class="list-disc mb-2">
                <span class="font-bold"> Mountaineering: </span>
                Mendaki gunung untuk merasakan keindahan alam dan meningkatkan
                keterampilan bertahan hidup di lingkungan yang keras.
              </li>
              <li class="list-disc mb-2">
                <span class="font-bold"> Pembelajaran Hidroponik: </span>
                Mengenal teknik bertani modern yang ramah lingkungan dan
                berkontribusi pada ketahanan pangan.
              </li>
              <li class="list-disc mb-2">
                <span class="font-bold">
                  Pembelajaran tentang Lingkungan Hidup:
                </span>
                Memahami isu-isu lingkungan dan mencari solusi inovatif untuk
                mengatasi tantangan yang dihadapi.
              </li>
              <li class="list-disc mb-2">
                <span class="font-bold"> Kunjungan Studi: </span>
                Mengunjungi tempat-tempat yang memiliki praktik terbaik dalam
                pengelolaan lingkungan dan belajar dari pengalaman mereka.
              </li>
            </ul>

            <p class="mb-3 font-normal text-lg text-gray-600">
              Nah dibawah ini ada detail beberapa kegiatan yang pernah kita
              lakuin.
            </p>
          </div>
        </div>
      </v-container>
    </div>
    <div class="bg-[#D1E9D2]">
      <v-container class="bg-[#D1E9D2] py-6">
        <carousel
          paginationColor="gray"
          paginationActiveColor="black"
          ref="carouselActivities"
          :per-page-custom="[
            [320, 1],
            [768, 3],
            [1200, 4],
          ]"
          :mouse-drag="true"
          :pagination-enabled="true"
        >
          <slide v-if="indexPage > 1"> </slide>
          <slide
            style="padding: 10px"
            v-for="(item, i) in itemActivities"
            :key="`activity-${i}`"
          >
            <card-image :item="item" />
          </slide>
          <slide v-if="itemActivities.length === 7 * perPage && dotsTotal > 7">
          </slide>
        </carousel>
      </v-container>
    </div>
  </div>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      windowWidth: 0,
      startIndex: 0,
      indexPage: 1,
      isNext: false,
      itemActivities: [],
      originalItemActivities: [
        {
          title: 'Mandalawangi Camping',
          gen: 'VII',
          location: 'Mandalawangi, Bogor',
          date: '30 September 2023',
          imgUrl: 'bgJumbo2.jpg',
          action:
            'https://www.instagram.com/p/C6nUgY2Lv54/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
          descript: 'Kegiatan Camping di Mandalawangi, selama 1 hari 1 malam',
          galery: [
            'mandala1.jpg',
            'mandala2.jpg',
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
            'mandala14.jpg',
            'mandala15.jpg',
          ],
        },
        {
          title: 'Goa Tawanan Outdoor Explore',
          gen: 'X/XI/XII',
          location: 'Goa Tawanan, Bogor Timur',
          date: '19 Oktober 2024',
          imgUrl: 'goa_tawanan_4.jpg',
          action: 'https://www.instagram.com/koppling_smkn2bks/',
          descript: 'Kegiatan Outdoor exploration Goa Tawanan Bogor Timur',
          galery: [
            'goa_tawanan.jpg',
            'goa_tawanan_2.jpg',
            'goa_tawanan_3.jpg',
            'goa_tawanan_4.jpg',
            'goa_tawanan_5.jpg',
            'goa_tawanan_6.jpg',
            'goa_tawanan_7.jpg',
          ],
        },
        {
          title: 'Waste 4 Change River Clean Up',
          gen: 'XI/XI',
          location: 'Sungai Pekayon, Bekasi',
          date: '25 September 2024',
          imgUrl: 'w4c_cleanup.jpg',
          action: 'https://www.instagram.com/koppling_smkn2bks/',
          descript:
            'Kegiatan River Clean Up dan Reboisasi Yang diadakan oleh Waste 4 Change dan PT Dow Indonesia, dan berkolaborasi dengan Osis SMKN 2 Bekasi',
          galery: [
            'w4c_cleanup.jpg',
            'w4c_cleanup_2.jpg',
            'w4c_cleanup_3.jpg',
            'w4c_cleanup_5.jpg',
            'w4c_cleanup_6.jpg',
            'w4c_cleanup_7.jpg',
            'w4c_cleanup_8.jpg',
          ],
        },
        {
          title: 'Koppling Outbond',
          gen: 'IV',
          location: 'Sumur Batu',
          date: '5 Mei 2024',
          imgUrl: 'bgJumbo.jpg',
          action:
            'https://www.instagram.com/p/C6nUgY2Lv54/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
          descript:
            'Kegiatan Out Bond Anggota Koppling bersama kaka-kaka alumni ',
          galery: [
            'outb1.jpg',
            'outb2.jpg',
            'outb3.jpg',
            'outb4.jpg',
            'outb5.jpg',
            'outb6.jpg',
            'outb7.jpg',
            'outb8.jpg',
          ],
        },
        {
          title: 'Pelatihan Vertical & Pengenalan Reptile',
          gen: 'IX',
          location: 'SMKN 2 Bekasi, Bekasi',
          date: '12 Agustus 2023',
          imgUrl: 'bgJumbo3.jpg',
          action:
            'https://www.instagram.com/p/C6nUgY2Lv54/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
          descript:
            'Pelatihan Vertical dan pengenalan reptile dari team panakawanrescue',
          galery: [
            'fest1.jpg',
            'fest2.jpg',
            'fest3.jpg',
            'fest4.jpg',
            'fest5.jpg',
            'fest6.jpg',
            'fest7.jpg',
            'fest8.jpg',
          ],
        },
        {
          title: 'Kunjungan Ke Kini Farm Hidroponik',
          gen: 'IX-X',
          location: 'Bantargebang',
          date: '31 Agustus 2023',
          imgUrl: 'kinifarm6.jpg',
          action:
            'https://www.instagram.com/p/C6nUgY2Lv54/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
          descript: 'Kunjungan dan pembelajaran seputar hidroponik di Kinifarm',
          galery: [
            'kinifarm1.jpg',
            'kinifarm2.jpg',
            'kinifarm3.jpg',
            'kinifarm4.jpg',
            'kinifarm5.jpg',
            'kinifarm6.jpg',
            'kinifarm7.jpg',
            'kinifarm8.jpg',
            'kinifarm9.jpg',
          ],
        },
        {
          title: 'Plogging World Clean Up Day',
          gen: 'X',
          location: 'Bundaran HI, Jakarta Pusat',
          date: '28 Mei 2023',
          imgUrl: 'plogging1.jpg',
          action:
            'https://www.instagram.com/p/C6nUgY2Lv54/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
          descript: 'Plogging CFD Hari Tanpa Tembakau Sedunia',
          galery: [
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
          ],
        },
      ],
    }
  },
  mounted() {
    this.getWindowWidth()
    window.addEventListener('resize', this.getWindowWidth)
    this.$refs.carouselActivities.$on('pageChange', this.onPageChange)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.getWindowWidth)
    this.$refs.carouselActivities.$off('pageChange', this.onPageChange)
  },

  computed: {
    dotsTotal() {
      this.windowWidth = window.innerWidth
      if (this.windowWidth >= 320 && this.windowWidth < 768) {
        return this.originalItemActivities.length / 1
      } else if (this.windowWidth >= 768 && this.windowWidth < 1200) {
        return this.originalItemActivities.length / 3
      } else if (this.windowWidth >= 1200) {
        return this.originalItemActivities.length / 4
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
      this.$refs.carouselActivities.goToPage(
        this.$refs.carouselActivities.currentPage - 1
      )
    },
    next() {
      this.$refs.carouselActivities.goToPage(
        this.$refs.carouselActivities.currentPage + 1
      )
    },
    getWindowWidth() {
      this.windowWidth = window.innerWidth

      if (this.dotsTotal > 7) {
        this.itemActivities = this.originalItemActivities.slice(
          this.startIndex,
          this.startIndex + 7 * this.perPage
        )
      } else {
        this.itemActivities = this.originalItemActivities
      }
    },
    showNextItems() {
      this.indexPage++
      this.$refs.carouselActivities.goToPage(1)
      this.startIndex += 7 * this.perPage
      this.itemActivities = this.originalItemActivities.slice(
        this.startIndex,
        this.startIndex + 7 * this.perPage
      )
    },
    showPreviousItems() {
      this.indexPage--
      if (this.indexPage == 1) {
        this.$refs.carouselActivities.goToPage(0)
      } else {
        this.$refs.carouselActivities.goToPage(1)
      }
      this.startIndex -= 7 * this.perPage
      this.itemActivities = this.originalItemActivities.slice(
        this.startIndex,
        this.startIndex + 7 * this.perPage
      )
    },
  },
}
</script>
