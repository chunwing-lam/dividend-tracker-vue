<template>
  <div class="stock-row">
    <div class="stock action">
      <div class="icon">
        <FaMinusSquareO />
      </div>
      <div class="icon">
        <FaLineChart />
      </div>
    </div>
    <div class="stock symbol"></div>
    <div class="stock share"></div>
    <div class="stock market-price"></div>
    <div class="stock market-value"></div>
    <div class="stock entry-price"></div>
    <div class="stock entry-value"></div>
    <div class="stock weight"></div>
    <div class="stock gain-loss"></div>
    <div class="stock dividend-percentage"></div>
    <div class="stock dividend"></div>
  </div>
</template>

<script>
export default {
  name: 'PurchasesRow'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
