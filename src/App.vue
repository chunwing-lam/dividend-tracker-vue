<template>
  <div>
    <Header />
    <Portfolio />
  </div>
</template>

<script>
import Header from './components/Header'
import Portfolio from './components/Portfolio'

export default {
  name: 'App',
  components: {
    Header,
    Portfolio
  }
}
</script>

<style>
  body {
    font-family: Arial, Helvetica, sans-serif
  }
</style>
