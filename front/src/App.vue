<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
<h1>Clima</h1>
      </div>

      <v-spacer></v-spacer>

<p  class="font-weight-light">Esste sistema se actualiza cada 10 segundos de manera automatica...</p>
    </v-app-bar>

    <v-content>
      <Weather/>
    </v-content>
  </v-app>
</template>

<script>

import Weather from './components/Weather';
export default {
  name: 'App',

  components: {
 
    Weather
  },

  data: () => ({
    //
  }),
};
</script>
