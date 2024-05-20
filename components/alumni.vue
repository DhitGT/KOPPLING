<template>
  <div class="my-12 pa-6">
    <v-container></v-container>
    <v-container>
      <div class="flex flex-col items-center justify-center">
        <span class="text-4xl font-bold mb-5">Alumni Kami</span>
        <p class="mb-3 font-normal text-lg text-gray-400">
          Dibawah ini ada kaka kaka alumni kita yang keren keren banget nih guys
        </p>
      </div>
    </v-container>
    <v-container class="overflow-scroll md:overflow-auto">
      <div
        class="wrapper flex w-max md:grid gap-4 justify-items-stretch md:grid-cols-4 rounded-lg p-2 content-left self-center"
      >
        <alumni-card />
        <alumni-card />
        <alumni-card />
        <alumni-card />
      </div>
    </v-container>
  </div>
</template>
