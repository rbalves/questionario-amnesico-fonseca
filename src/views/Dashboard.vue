<template>
  <div>
    <v-app-bar
      color="primary"
      dense
      dark
    >
      <v-toolbar-title>QAF DASHBOARD</v-toolbar-title>
    </v-app-bar>

    <v-container fluid>
      <v-row dense>
        <v-col cols="3" v-for="item in graus" :key="item.id">
          <v-card
            :color="item.cor"
            dark
          >
            <v-card-title class="headline">{{ item.descricao }}</v-card-title>
            
            <v-card-text>
                <v-row align="center">
                    <v-col class="display-2" cols="12">
                        {{ item.quantidade }}
                    </v-col>
                </v-row>
            </v-card-text>

          </v-card>
        </v-col>

      </v-row>
      <v-row dense>
          <v-col cols="3">
              <v-card height="100%">
                  <PieChart  :pie_data="graus"/>
              </v-card>
          </v-col>
          <v-col cols="9">
              <v-card>
                  <Chart />
              </v-card>
          </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Chart from './../components/Chart';
import PieChart from './../components/PieChart';

import Questionario from '../api/questionario';

export default {
    components: {
        Chart,
        PieChart,
    },
    data() {
        return {
            graus: [],
        }
    },
    async created() {
        this.graus = [ ...this.Helpers.graus_por_indice ];
        const respostas = await Questionario.buscarRespostas();
        this.graus.forEach(element => {
          element['quantidade'] = respostas.data.filter(item => item.grau === element.descricao).length;
        });
    },
}
</script>
