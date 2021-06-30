<template>
  <div id='app' class="container">
  <GChart
    :settings="{packages: ['bar']}"    
    :data="chartData"
    :options="chartOptions"
    :createChart="(el, google) => new google.charts.Bar(el)"
    @ready="onChartReady"
  />
  </div>
</template>

<script>
import { GChart } from 'vue-google-charts'
export default {
  name: 'App',
  components: {
    GChart
  },
  data () {
    return {
      chartsLib: null, 
      chartData: [
        ['Estudios', 'Titulos', 'Episodios'],
        ['MAPPA', 1, 260],
        ['Studio Pierrot', 1, 220],
        ['toei animatio', 1, 190],
        ['kyoto Animation', 2, 264],
        ['Sunrise', 1, 12]
      ]
    }
  },
  computed: {
    chartOptions () {
      if (!this.chartsLib) return null
      return this.chartsLib.charts.Bar.convertOptions({
        chart: {
          title: 'Estudios com mais Produções.'
        },
        bars: 'vertical',
        hAxis: { format: 'decimal' },
        height: 400,
        colors: ['blue', 'black']
      })
    }
  },
  methods: {
    onChartReady (chart, google) {
      this.chartsLib = google
    }
  }
}
</script>
