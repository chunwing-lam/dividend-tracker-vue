<template>
  <div>
    <div class="portfolio">
      <ResultBox />
      <HeaderRow />
      <PurchasesRow />
      <AdderRow />
    </div>
    <div v-if="forecastTableIsOpen">ForecastTable</div>
  </div>
</template>

<script>
import ResultBox from './ResultBox'
import HeaderRow from './HeaderRow'
import PurchasesRow from './PurchasesRow'
import AdderRow from './AdderRow'

export default {
  name: 'Portfolio',
  data () {
    return {
      forecastTableIsOpen: false,
      forecast: [],
      stocks: {},
      purchases: {
        purchaseOrder: []
      }
    }
  },
  components: {
    ResultBox,
    HeaderRow,
    PurchasesRow,
    AdderRow
  }
}
</script>

<style scoped>
.portfolio {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    text-align: center;
    font-size: 0.7em;
}
</style>
