<template>
  <v-app>
    <v-main>
      <v-container fluid fill-height>
        <v-row align="center" justify="center" class="fill-height">
          <v-col cols="12" class="text-center">
            <v-progress-circular
              indeterminate
              color="primary"
              size="64"
            ></v-progress-circular>
            <h1 class="mt-4">Redirecting...</h1>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  mounted() {
    window.location.href =
      'https://docs.google.com/forms/d/e/1FAIpQLSdH5ainp7B7cj1kLM4UuAsTtGDs5U2RwPFDc1kRVJUoPLDn9g/viewform'
  },
}
</script>
