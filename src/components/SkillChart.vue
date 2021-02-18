<template>
  <div class="custom-header">
    <div class="">
      <h3>Technical Skills</h3>
    </div>
    <div class="barChart-css ">
      <bar-chart
        style="height: 100%"
        chart-id="blue-bar-chart"
        :chart-data="chartData"
        :gradient-stops="blueBarChart.gradientStops"
        :extra-options="blueBarChart.extraOptions"
        ref="barChart"
      >
      </bar-chart>
    </div>
  </div>
</template>

<script>
import BarChart from "@/components/Chart/BarChart";

export default {
  name: "SkillChart",
  components: {
    BarChart,
  },

  data() {
    return {
      blueBarChart: {
        extraOptions: {
          maintainAspectRatio: false,
          legend: {
            display: false,
          },
          responsive: true,
          tooltips: {
            backgroundColor: "#f5f5f5",
            titleFontColor: "#333",
            bodyFontColor: "#666",
            bodySpacing: 4,
            xPadding: 12,
            mode: "nearest",
            intersect: 0,
            position: "nearest",
          },
          scales: {
            yAxes: [
              {
                gridLines: {
                  drawBorder: false,
                  color: "rgba(29,140,248,0.1)",
                  zeroLineColor: "transparent",
                },
                ticks: {
                  suggestedMin: 60,
                  suggestedMax: 100,
                  padding: 20,
                  fontColor: "#9e9e9e",
                },
              },
            ],
            xAxes: [
              {
                gridLines: {
                  drawBorder: false,
                  color: "rgba(29,140,248,0.1)",
                  zeroLineColor: "transparent",
                },
                ticks: {
                  padding: 20,
                  fontColor: "#9e9e9e",
                },
              },
            ],
          },
        },

        // gradientColors: [
        //   "rgba(29,0,0,0.2)",
        //   "rgba(29,0,0,0.0)",
        //   "rgba(29,0,0,0)",
        // ],
        gradientStops: [1, 0.4, 0],
      },
      chartData: {
        labels: [
          "Java",
          "JavaScript",
          "Spring Frameworks",
          "Vue.Js",
          "Bootstrap",
          "Chart.js",
        ],
        datasets: [
          {
            labels: [
              "Java",
              "JavaScript",
              "Spring Frameworks",
              "Vue.Js",
              "Bootstrap",
              "Chart.js",
            ],
            fill: true,
            borderColor: "#1f8ef1",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            data: [90, 85, 90, 85, 100, 80],
          },
        ],
      },
    };
  },

  /* 
  ----------------------------TODO---------------------------
  ---------------------Chart Theme Changer ------------------
  created() {
    this.$store.watch(() => {
      let theme = this.$store.getters.exotheme;
      // console.log(theme.chartBorder);
      // console.log(this.chartData.datasets[0].borderColor);
      this.chartData.datasets[0].borderColor = theme.chartBorder;
      console.log(this.chartData.datasets[0].borderColor);

      // this.BarChart.renderChart();
    });
  },
  */
};
</script>

<style lang="scss" scoped>
// var(--chart-background);
.barChart-css {
  padding: 2rem;
  margin: 2rem 0;
  background-color: var(--white-dark);
  border-radius: 5%;
  box-shadow: 0 15px 15px rgba(0, 0, 0, 0.5);
}
.custom-header:hover {
  h3 {
    background: linear-gradient(90deg, #ff8a00, #e52e71);
    text-shadow: none;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
}
</style>
