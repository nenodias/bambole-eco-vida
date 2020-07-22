<template>
  <div class="container is-widescreen">
    <app-bar></app-bar>
    <breadcrumb></breadcrumb>
    <router-view></router-view>
  </div>
</template>

<script>

import AppBar from '@/components/AppBar.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import LayoutMixin from '@/mixins/LayoutMixin'

export default {
  name: 'Layout',
  mixins:[LayoutMixin],
  components: {
    AppBar,
    Breadcrumb
  }
}
</script>

<style>
</style>
