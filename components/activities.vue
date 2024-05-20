<template>
  <div class="my-12 pa-6">
    <v-container>
      <div class="flex flex-col items-center justify-center">
        <span class="text-4xl font-bold mb-5">Aktivitas Kami</span>
        <p class="mb-3 font-normal text-lg text-gray-400">
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
        <card-image />
        <card-image />
        <card-image />
        <card-image />
      </div>
    </v-container>
  </div>
</template>
