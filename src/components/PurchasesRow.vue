<template>
  <div class="stock-row">
    <div class="stock action">
      <div class="icon">
        <icon name="regular/minus-square" />
      </div>
      <div class="icon">
        <icon name="chart-line" />
      </div>
    </div>
    <div class="stock symbol">T</div>
    <div class="stock share">65</div>
    <div class="stock market-price">32.675</div>
    <div class="stock market-value">2123.123</div>
    <div class="stock entry-price">35.45</div>
    <div class="stock entry-value">2304.25</div>
    <div class="stock weight">7.5</div>
    <div class="stock gain-loss red">-123</div>
    <div class="stock dividend-percentage">6.12</div>
    <div class="stock dividend">130.123123</div>
  </div>
</template>

<script>
export default {
  name: 'PurchasesRow'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.icon {
  cursor: pointer;
}
.stock-row:hover > .stock {
  background: #9E9E9E;
}
.stock-row:nth-child(odd) {
  background: rgb(218, 222, 226);
}
.stock-row {
  display: flex;
}
.stock.action {
  width: 5%;
  font-size: 1.3em;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: space-evenly;
  justify-content: space-evenly;
}
.stock {
  width: 10%;
  border: solid 1px white;
  padding: 0.3em;
}
</style>
