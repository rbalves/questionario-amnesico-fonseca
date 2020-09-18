<template>
  <v-container >
    <v-row class="text-center">

      <v-col class="mb-4">
        <v-alert
          border="top"
          colored-border
          color="info"
          elevation="2"
        >
          <h1 class="display-1 font-weight-bold mb-3">
            Questionário Amnésico de Fonseca
          </h1>
          O objetivo deste aplicativo web é fornecer um dignóstico inicial a respeito do grau de Disfunção Temporomandibular (DTM) com base
          no questionário desenvolvido por Dickson Martins da Fonseca e coletar dados para análise de pesquisa sendo
          desenvolvida pela aluna finalista <a target="_blank" href="https://www.linkedin.com/in/dandara-lobo-081731197">Dandara Lobo</a> do 
          curso de Fisioterapia do <a target="_blank" href="https://fametro.edu.br/">CEUNI - FAMETRO</a>.
          É aconselhável procurar um especialista para diagnóstico e tratamento mais precisos.
          <br>
          Para visualizar a tabela de grau de acometimento, clique <a @click="modal_tabela = true">aqui</a>.

          <h3>Você está em tratamento ortodôntico?</h3>
          <v-row>
            <v-col>
              <v-btn block small color="success" @click="modal_aviso = true">Sim</v-btn>
            </v-col>
            <v-col>
              <router-link to="/questionario-amnesico-fonseca/questionario" style="text-decoration: none">
              <v-btn block small color="error">Não</v-btn>
              </router-link>
              </v-col>
          </v-row>
        </v-alert>
        
      </v-col>

      <v-dialog
        v-model="modal_tabela"
        max-width="450"
      >
        <v-card>
          <v-card-title
            class="headline text-justify"
            style="word-break: break-word;"
          >Tabela de índice amnésico e grau de acometimento</v-card-title>
          <v-card-text>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Índice amnésico</th>
                    <th class="text-left">Grau de acometimento</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in Helpers.graus_por_indice" :key="item.id">
                    <td>{{ item.range }}</td>
                    <td>
                      <v-chip :color="item.cor" dark>{{ item.descricao }}</v-chip>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              color="red darken-1"
              text
              @click="modal_tabela = false"
            >
              Fechar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="modal_aviso"
        max-width="450"
      >
        <v-card>
          <v-card-title class="headline">AVISO</v-card-title>

          <v-card-subtitle style="margin-top: 1%">
            Este questionário é destinado a pessoas que não estejam em tratamento ortodôntico!
          </v-card-subtitle>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              color="red darken-1"
              text
              @click="modal_aviso = false"
            >
              Fechar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Home',
    data: () => ({
      nota: 0,
      grau: '',
      color: '',
      modal_resultado: false,
      modal_aviso: false,
      alternativas: [
        {
          id: 1,
          texto: 'Sim',
          valor: 10,
        },
        {
          id: 2,
          texto: 'Não',
          valor: 0,
        },
        {
          id: 3,
          texto: 'Às vezes',
          valor: 5,
        },
      ],
      perguntas: [
        { 
          id: 1,
          nota: 0,
          texto: 'Sente dificuldade para abrir a boca?'
        },
        { 
          id: 2,
          nota: 0,
          texto: 'Você sente dificuldades para movimentar sua mandíbula para os lados?'
        },
        { 
          id: 3,
          nota: 0,
          texto: 'Tem cansaço/dor muscular quando mastiga?'
        },
        { 
          id: 4,
          nota: 0,
          texto: 'Sente dores de cabeça com frequência?'
        },
        { 
          id: 5,
          nota: 0,
          texto: 'Sente dor na nuca ou torcicolo?'
        },
        { 
          id: 6,
          nota: 0,
          texto: 'Tem dor de ouvido ou na região das articulações (ATMs)?'
        },
        { 
          id: 7,
          nota: 0,
          texto: 'Já notou se tem ruídos na ATM quando mastiga ou quando abre a boca?'
        },
        { 
          id: 8,
          nota: 0,
          texto: 'Você já observou se tem algum hábito como apertar e/ou ranger os dentes (mascar chiclete, morder o lápis ou lábios, roer a unha)?'
        },
        { 
          id: 9,
          nota: 0,
          texto: 'Sente que seus dentes não se articulam bem?'
        },
        { 
          id: 10,
          nota: 0,
          texto: 'Você se considera uma pessoa tensa ou nervosa?'
        },
      ],
    }),    

  }
</script>
