<template>
    <nav :class="getClass()" aria-label="breadcrumbs">
        <nav class="breadcrumb is-left" aria-label="breadcrumbs" v-if="crumbs">
            <ul>
                <li v-for="(item, idx) in crumbs" :key="idx" :class="getItemClass(item)">
                    <router-link :to="item.link">
                        <span class="icon is-small">
                        <i :class="getIconClass(item)" aria-hidden="true"></i>
                        </span>
                        <span>{{item.title}}</span>
                    </router-link>
                </li>
            </ul>
        </nav>
    </nav>
</template>

<script>
import LayoutMixin from '@/mixins/LayoutMixin'
import constants from './../constants'

export default {
    name:'Breadcrumb',
    mixins:[LayoutMixin],
    data(){
        return {
            constants,
            crumbs:[]
        }
    },
    methods:{
        getClass(){
            return {breadcrumb:true, 'is-mobile':this.isMobile};
        },
        getIconClass(item){
            return {fa:true, [item.icon]:true };
        },
        getItemClass(item){
            let isActive = false;
            if(item.link == ''){
                isActive = true;
            }
            return {"is-active":isActive };
        },
        updateCrumbs(){
            let meta = this.$route.meta;
            this.crumbs = meta.breadcrumb;
        }
    },
    watch:{
        '$route':function(){
            this.updateCrumbs();
        }
    },
    created(){
        const self = this;
        this.$nextTick(() => self.updateCrumbs());
    }
}
</script>

<style>
    .breadcrumb.is-mobile{
        margin-top: 20px;
    }
    .breadcrumb {
        margin-left: 20px;
    }
</style>