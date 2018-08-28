<template>
  <form onSubmit={this.handleSubmit}>
    <div class="add-row">
      <div class="stock action">
        <div class="icon">
          <button class="submit icon">
            <FaPlusSquareO />
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
</style>
