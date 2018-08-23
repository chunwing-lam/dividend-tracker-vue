<template>
  <h1>{{currentTime.toUTCString()}}</h1>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      currentTime: new Date()
    }
  },

  beforeMount () {
    this.dataTimerID = setInterval(function () {
      this.currentTime = new Date()
    }.bind(this), 1000)
  },

  beforeDestroy () {
    clearInterval(this.dataTimerID)
  }
}

</script>

<style scoped>
</style>
