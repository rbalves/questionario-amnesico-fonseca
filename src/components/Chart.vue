<script>
import { Bar } from 'vue-chartjs'
import Chart from 'chart.js'

Chart.defaults.global.defaultFontColor = 'Black';
Chart.defaults.global.defaultFontFamily = 'Roboto';

export default {
    extends: Bar,
    data() {
        return {
            data: {
                labels: ['Q01','Q02','Q03','Q04','Q05','Q06','Q07','Q08','Q09','Q10',],
                datasets: [
                    {
                        label: 'Sim',
                        backgroundColor: '#F44336',
                        data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
                    },
                    {
                        label: 'Não',
                        backgroundColor: '#4CAF50',
                        data: [20, 15, 9, 11, 10, 23, 20, 5, 50, 28, 15, 26]
                    },
                    {
                        label: 'Às vezes',
                        backgroundColor: '#FFC107',
                        data: [35, 20, 22, 55, 5, 40, 22, 45, 40, 15, 10, 32]
                    },
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                layout: {
                    padding: {
                        left: 10,
                        right: 10,
                        top: 10,
                        bottom: -10
                    }
                }
            },
        }
    },
    mounted () {
        this.renderChart(this.data, this.options)
    }
}
</script>