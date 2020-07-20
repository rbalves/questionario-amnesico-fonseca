<template>
  <v-app>
    <v-content style="background-color: #ecf0f5">
      <Questionario/>
    </v-content>
  </v-app>
</template>

<script>
import Questionario from './components/Questionario';

export default {
  name: 'App',

  components: {
    Questionario,
  },

  data: () => ({
    //
  }),
};
</script>
