<template>
  <div :class="getClass()">
    <app-bar></app-bar>
    <!-- <breadcrumb></breadcrumb> -->
    <div class="level">
        <div class="level-item width-100">
          <router-view></router-view>
        </div>
      
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>

import AppBar from '@/components/AppBar.vue'
import AppFooter from '@/components/Footer.vue'

import LayoutMixin from '@/mixins/LayoutMixin'

export default {
  name: 'Layout',
  mixins:[LayoutMixin],
  components: {
    AppBar,
    AppFooter
  },
  methods:{
    getClass(){
        return {container:true, 'is-widescreen':true, 'flexbox':true, 'is-mobile':this.isMobile};
    },
  }
}
</script>

<style>
</style>
