<template>
  <footer class="footer">
    <div class="content has-text-centered">
        <div class="copyrights"><strong>&copy; {{ constants.TITLE }}</strong> {{ currentYear }} </div>
        <div class="address">
            {{ constants.ADDRESS }}
        </div>
        <div class="phone">
            {{ constants.PHONE }}
        </div>
        Site desenvolvido por <a href="https://github.com/nenodias">Horácio Dias</a>
    </div>
  </footer>
</template>

<script>
import LayoutMixin from '@/mixins/LayoutMixin'
import constants from './../constants'

export default {
  name: "Footer",
  mixins:[LayoutMixin],
    data(){
        return {
            constants,
        }
    },
    computed:{
        currentYear(){
            return new Date().getFullYear();
        }
    }
};
</script>

<style>
.footer{
    padding: 3rem 1.5rem 3rem;
}
</style>