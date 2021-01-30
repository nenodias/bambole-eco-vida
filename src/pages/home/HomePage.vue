<template>
  <div id="app">
    <Banners />
    <Spotlight />
  </div>
</template>

<script>
import Spotlight from './Spotlight';
import Banners from '../../components/Banners';
export default {
  name: 'HomePage',
  components: {
    Spotlight,
    Banners
  }
}
</script>

<style>
</style>
