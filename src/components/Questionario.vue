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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis quam, facilisis at venenatis eu, posuere hendrerit elit.
          <br>
          Para ver a tabela de grau de acometimento, clique <a @click="modal_tabela = true">aqui</a>.
        </v-alert>
      </v-col>

      <v-container>
        <v-row
          dense
          v-for="pergunta in perguntas"
          :key="pergunta.id"
        >
          <v-col cols="12">
            <v-card>
              <v-card-title
                class="headline text-justify"
                style="word-break: break-word;"
              >{{ pergunta.id }} - {{ pergunta.texto }}</v-card-title>
              <v-card-actions>
                <v-radio-group v-model="pergunta.nota" row >
                  <v-radio
                    :label="alternativa.texto"
                    :value="alternativa.valor"
                    v-for="alternativa in alternativas"
                    :key="alternativa.id"
                  ></v-radio>
                </v-radio-group>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        
        <v-btn x-large block  color="primary" dark @click="enviar()">Enviar</v-btn>

      </v-container>

      <v-dialog
        v-model="modal_resultado"
        max-width="350"
      >
        <v-card>
          <v-card-title class="headline">Resultado</v-card-title>
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
                  <tr>
                    <td>{{ nota }}</td>
                    <td>
                      <v-chip :color="color" dark>{{ grau }}</v-chip>
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
              @click="modal_resultado = false"
            >
              Fechar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

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
                  <tr v-for="item in graus_por_indice" :key="item.id">
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

    </v-row>
  </v-container>
</template>

<script>
  import Questionario from '../api/questionario';
  export default {
    name: 'Questionario',
    data: () => ({
      nota: 0,
      grau: '',
      color: '',
      modal_resultado: false,
      modal_tabela: false,
      graus_por_indice: [
        {
          id: 1,
          range: '0 - 15',
          cor: 'green',
          descricao: 'SEM DTM',
        },
        {
          id: 2,
          range: '20 - 40',
          cor: 'orange',
          descricao: 'DTM LEVE',
        },
        {
          id: 3,
          range: '45 - 65',
          cor: 'yellow',
          descricao: 'DTM MODERADA',
        },
        {
          id: 4,
          range: '70 - 100',
          cor: 'red',
          descricao: 'DTM SEVERA',
        },
      ],
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
    methods: {
      async enviar() {
        
        this.nota = this.perguntas.reduce((total, pergunta) => total + parseInt(pergunta.nota), 0);
        
        //0-15 SEM DTM
        if(this.nota >= 0 && this.nota < 20) {
          this.grau = 'SEM DTM';
          this.color = 'green';
        }

        //20-40 DTM LEVE
        if(this.nota >= 20 && this.nota < 45) {
          this.grau = 'DTM LEVE';
          this.color = 'orange';
        }

        //45-65 DTM MODERADA
        if(this.nota >= 45 && this.nota < 70) {
          this.grau = 'DTM MODERADA';
          this.color = 'yellow';
        }

        //70-100 DTM SEVERA
        if(this.nota >= 70) {
          this.grau = 'DTM SEVERA';
          this.color = 'red';
        }

        this.modal_resultado = true;

        let resultado = {
          'nota': this.nota,
          'grau': this.grau,
          'respostas': this.perguntas.map(pergunta => pergunta.nota)
        }

        await Questionario.salvarRespostas(resultado);

      }
    },
  }
</script>
