<template>
  <div>
    <div class="portfolio">
      <div>ResultBox</div>
      <div>HeaderRow</div>
      <div>PurchaseRow</div>
      <div>AdderRow</div>
    </div>
    <div v-if="forecastTableIsOpen">ForecastTable</div>
  </div>
</template>

<script>
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
  }
}
</script>

<style scoped>
</style>
