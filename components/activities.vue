<template>
  <div class="my-12 pa-6">
    <v-container>
      <div class="flex flex-col items-center justify-center">
        <span class="text-4xl font-bold mb-5">Aktivitas Kami</span>
        <p class="mb-3 font-normal text-lgs text-gray-400">
          Koppling itu ngapain aja sih kak?. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Nah Dibawah ini ada detail
          kegiatan-kegiatan yang kita lakuin nih.
        </p>
      </div>
    </v-container>
    <v-container class="overflow-scroll md:overflow-auto">
      <div
        class="wrapper flex w-max md:grid gap-6 justify-items-stretch md:grid-cols-2 rounded-lg p-2 content-left self-center"
      >
        <card-image
          v-for="(item, i) in itemActivities"
          :item="item"
          :key="`activity-${i}`"
        />
      </div>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      itemActivities: [
        {
          title: 'Koppling outbond',
          gen: 'IV',
          location: 'Setu, Bogor',
          date: '1 Juni 2023',
          imgUrl: 'bgJumbo.jpg',
          action:
            'https://www.instagram.com/p/C6nUgY2Lv54/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
          descript:
            'lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, eum.',
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
          title: 'Camping Ceria',
          gen: 'VII',
          location: 'Mandalawangi, Bogor',
          date: '1 Maret 2023',
          imgUrl: 'bgJumbo2.jpg',
          action:
            'https://www.instagram.com/p/C6nUgY2Lv54/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
          descript:
            'lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, eum.',
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
          title: 'Koppling Fest',
          gen: 'IX',
          location: 'SMKN 2 Bekasi, Bekasi',
          date: '1 Juni 2024',
          imgUrl: 'bgJumbo3.jpg',
          action:
            'https://www.instagram.com/p/C6nUgY2Lv54/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
          descript:
            'lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, eum.',
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
      ],
    }
  },
}
</script>
