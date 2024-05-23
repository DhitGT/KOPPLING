<template>
  <div class="my-12 pa-6">
    <v-container></v-container>
    <v-container>
      <div class="flex flex-col items-center justify-center">
        <span class="text-4xl font-bold mb-5">Alumni Kami</span>
        <p class="mb-3 font-normal text-lg text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
          autem. Obcaecati delectus eum dolore illo ullam pariatur non minus
          fuga quis commodi
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
          gen: 'Gen VI',
          imgUrl: 'choirulrizal.jpg',
          action:
            'https://www.instagram.com/p/Ci8GVCKvUjK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
          profilePic: 'https://placehold.co/300',
        },
        {
          name: 'Koppling',
          gen: 'Gen X',
          imgUrl: 'bgJumbo2.jpg',
          action:
            'https://www.instagram.com/p/C6nUgY2Lv54/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
          profilePic: 'https://placehold.co/300',
        },
        {
          name: 'Koppling',
          gen: 'Gen X',
          imgUrl: 'bgJumbo3.jpg',
          action:
            'https://www.instagram.com/p/C6nUgY2Lv54/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
          profilePic: 'https://placehold.co/300',
        },
      ],
    }
  },
}
</script>
