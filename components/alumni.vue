<template>
  <div class="my-12 pa-6">
    <v-container></v-container>
    <v-container>
      <div class="flex flex-col items-center justify-center">
        <span class="text-4xl font-bold mb-5">Alumni Kami</span>
        <p class="mb-3 font-normal text-lg text-gray-600">
          Di bawah ini adalah gambar-gambar kaka-kaka alumni KOPPLING yang masih
          aktif mengikuti berbagai acara dari KOPPLING, serta masih sering
          membimbing anggota KOPPLING.
        </p>
      </div>
    </v-container>
    <v-container class="overflow-scroll md:overflow-auto">
      <div
        class="wrapper flex w-max md:grid gap-4 justify-items-stretch md:grid-cols-4 rounded-lg p-2 content-left self-center"
      >
        <alumni-card
          v-for="(item, i) in itemAlumni"
          :item="item"
          :key="`alumni-${i}`"
        />
      </div>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      itemAlumni: [
        {
          name: '@choirul_rizall',
          gen: 'Gen VII',
          imgUrl: 'choirulrizal.jpg',
          action:
            'https://www.instagram.com/p/Ci8GVCKvUjK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
          profilePic: 'karizalpfp.jpg',
        },
        {
          name: '@ri_iki',
          gen: 'Gen II',
          imgUrl: 'kariki.jpg',
          action: 'https://www.instagram.com/ri_iki/?hl=en',
          profilePic: 'kariki.jpg',
        },
      ],
    }
  },
}
</script>
