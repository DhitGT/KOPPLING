<template>
  <div class="my-12 pa-6">
    <v-container>
      <div class="flex flex-col items-center justify-center">
        <span class="text-4xl font-bold mb-5">Aktivitas Kami</span>
        <div>
          <p class="mb-3 font-normal text-lgs text-gray-600">
            Koppling itu ngapain aja sih kak? Dalam menjalankan misinya, kami
            aktif dalam berbagai kegiatan yang berkontribusi pada pelestarian
            lingkungan dan pengembangan diri. Kami berusaha menyelenggarakan
            kegiatan yang bervariasi dan mendidik untuk menginspirasi anggota
            kami. Berikut adalah beberapa contohnya:
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

          <p class="mb-3 font-normal text-lgs text-gray-600">
            Dibawah ini ada detail kegiatan yang pernah kita lakuin nihh
          </p>
        </div>
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
      ],
    }
  },
}
</script>
