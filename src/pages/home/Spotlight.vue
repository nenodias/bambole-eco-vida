<template>
  <div class="grid-container">
       <div v-for="product in products" :key="product.id">
           <ProductCard :product="product"></ProductCard>
       </div>
  </div>
</template>

<script>

import ProductCard from '@/components/ProductCard';
import LayoutMixin from '@/mixins/LayoutMixin';
import { productsSpotlight } from '@/models/index';

export default {
    name:'Spotlight',
    mixins:[LayoutMixin],
    components:{
        ProductCard
    },
    data(){
        return {
            products:[]
        };
    },
    props:{
    },
    async created(){
        this.products = await productsSpotlight();
    }
}
</script>

<style>
    .grid-container {
        display: grid;
        grid-template-columns: auto auto auto;
        grid-gap: 10px;
        padding: 10px;
    }

    .is-mobile .grid-container {
        grid-template-columns: auto !important;
    }

    .grid-container > div {
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
    }
</style>