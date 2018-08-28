<template>
  <div class="result-box">
    <div class="result-header-rows">
      <div class="result-header-row">Dividend Average</div>
      <div class="result-header-row">Dividend Total</div>
    </div>
    <div class="result-rows">
      <div class="result-row">getDividendAverage</div>
      <div class="result-row">getDividendTotal</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResultBox'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.result-box {
  margin-bottom: 1%;
}
.result-header-rows, .result-rows {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: end;
    justify-content: flex-end;
}
.result-header-rows .result-header-row {
    background: rgb(187, 221, 255);
    border: solid 1px white;
}
.result-header-rows .result-header-row, .result-rows .result-row {
    width: 13%;
    padding: 0.3em;
}
</style>
