<template>
  <div class="header-row">
    <div class="stock action"><h3>Action</h3></div>
    <div class="stock symbol"><h3>Symbol</h3></div>
    <div class="stock share"><h3>Share</h3></div>
    <div class="stock market-price"><h3>Market price</h3></div>
    <div class="stock market-value"><h3>Market value</h3></div>
    <div class="stock entry-price"><h3>Entry price</h3></div>
    <div class="stock entry-value"><h3>Entry value</h3></div>
    <div class="stock weight"><h3>Weight Percentage</h3></div>
    <div class="stock gain-loss"><h3>Gain/Loss</h3></div>
    <div class="stock dividend-percentage"><h3>Dividend Percentage</h3></div>
    <div class="stock dividend"><h3>Dividend</h3></div>
  </div>
</template>

<script>
export default {
  name: 'HeaderRow'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-row {
    display: -ms-flexbox;
    display: flex;
    background: rgb(187, 221, 255);
}

.stock.action {
  width: 5%;
}

.stock {
  width: 10%;
  border: solid 1px white;
  padding: 0.3em;
}
</style>
