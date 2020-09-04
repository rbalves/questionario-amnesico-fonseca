<script>
import { Doughnut } from "vue-chartjs";
export default {
  extends: Doughnut,
  props: ["pie_data"],
  data() {
    return {
      chartData: {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 10,
        labels: [],
        datasets: []
      }
    };
  },
  created() {
    this.chartData.labels = this.pie_data.map(item => item.descricao);
    this.chartData.datasets.push(
      {
        backgroundColor: this.pie_data.map(item => item.cor),
        data: this.pie_data.map(item => item.quantidade)
      }
    );
  },
  mounted() {
    this.renderChart(this.chartData, {
      borderWidth: "10px",
      hoverBackgroundColor: "red",
      hoverBorderWidth: "10px"
    });
  }
};
</script>