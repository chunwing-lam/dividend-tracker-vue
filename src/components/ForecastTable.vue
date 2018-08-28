<template>
  <div>
    <div class="backdrop"></div>
    <div class="forecast-table">
      <div class="forecast-header-row">
        <div class="forecast year"><h3>Year</h3></div>
        <div class="forecast payable"><h3>Estimate Dividend/Payable</h3></div>
        <div class="forecast estimate"><h3>Estimate Dividend Forecast</h3></div>
      </div>

      <div class="forecast-row">
        <div class="forecast year">1</div>
        <div class="forecast payable">123123</div>
        <div class="forecast estimate">123123</div>
      </div>
      <div class="forecast-row">
        <div class="forecast year">2</div>
        <div class="forecast payable">123123</div>
        <div class="forecast estimate">123123</div>
      </div>
      <div class="forecast-row">
        <div class="forecast year">1</div>
        <div class="forecast payable">123123</div>
        <div class="forecast estimate">123123</div>
      </div>
      <div class="forecast-row">
        <div class="forecast year">2</div>
        <div class="forecast payable">123123</div>
        <div class="forecast estimate">123123</div>
      </div><div class="forecast-row">
        <div class="forecast year">1</div>
        <div class="forecast payable">123123</div>
        <div class="forecast estimate">123123</div>
      </div>
      <div class="forecast-row">
        <div class="forecast year">2</div>
        <div class="forecast payable">123123</div>
        <div class="forecast estimate">123123</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ForecastTable'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.29);
}
.forecast-table {
  width: 34%;
  position: fixed;
  top: 15%;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  -webkit-box-shadow: 1px 0px 9px 5px grey;
  box-shadow: 1px 0px 9px 5px grey;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  text-align: center;
  font-size: 0.7em;
}
.forecast-header-row {
  background: rgb(187, 221, 255);
  display: -ms-flexbox;
  display: flex;
}
.forecast.year {
  width: 10%;
}
.forecast {
  width: 45%;
  border: solid 1px white;
  padding: 0.3em;
}
.forecast-row {
  display: flex;
}
.forecast-row:nth-child(even) {
  background: white;
}
.forecast-row:nth-child(odd) {
  background: rgb(218, 222, 226);
}
</style>
