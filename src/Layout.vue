<template>
  <div :class="getClass()">
    <app-bar></app-bar>
    <breadcrumb></breadcrumb>
    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <router-view></router-view>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <talk-with-us v-if="!isMobile"></talk-with-us>
        </div>
      </div>
      
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>

import AppBar from '@/components/AppBar.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import AppFooter from '@/components/Footer.vue'
import TalkWithUs from '@/components/TalkWithUs.vue'

import LayoutMixin from '@/mixins/LayoutMixin'

export default {
  name: 'Layout',
  mixins:[LayoutMixin],
  components: {
    AppBar,
    Breadcrumb,
    AppFooter,
    TalkWithUs
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
