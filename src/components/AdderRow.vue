<template>
  <form>
    <div class="add-row">
      <div class="stock action">
        <div class="icon">
          <button class="submit icon">
            <icon name="regular/plus-square" />
          </button>
        </div>
      </div>
      <div class="stock symbol">
        <input type="text" name="stock" required />
      </div>
      <div class="stock share">
        <input type="number" name="share" required />
      </div>
      <div class="stock market-price"></div>
      <div class="stock market-value"></div>
      <div class="stock entry-price">
        <input type="number" step="0.0001" name="entry_price" required />
      </div>
      <div class="stock entry-value"></div>
      <div class="stock weight"></div>
      <div class="stock gain-loss"></div>
      <div class="stock dividend-percentage"></div>
      <div class="stock dividend"></div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'AdderRow'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.icon {
  cursor: pointer;
}
button.submit {
  font-size: 1em;
  border: 0;
}
.add-row {
  display: -ms-flexbox;
  display: flex;
}
.add-row input[type="text"] {
  width: 50%;
}
.stock.action {
  font-size: 1.3em;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: space-evenly;
  justify-content: space-evenly;
  width: 5%;
}
.stock {
  width: 10%;
  border: solid 1px white;
  padding: 0.3em;
}
</style>
