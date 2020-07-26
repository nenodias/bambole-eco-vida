<template>
  <div class="card product-card">
        <header class="card-header">
            <p class="card-header-title product-name">
                {{ product.name }}
            </p>
        </header>
        <div class="card-content">
            <figure>
                <img class="image" :src="product.photo" />
            </figure>
            <div class="content product-description">
                {{ abreviatte(product.description, 500) }}
            </div>
        </div>
        <footer class="card-footer">
            <span class="card-footer-item price"><strong>{{ printMoney(product.price) }}</strong></span>
            <button href="#" class="card-footer-item">Comprar</button>
        </footer>
    </div>
</template>

<script>

import LayoutMixin from '@/mixins/LayoutMixin';
import ValueConvertMixin from '@/mixins/ValueConvertMixin';

export default {
    name:'ProductCard',
    mixins:[LayoutMixin, ValueConvertMixin],
    props:{
        product:{
            type:Object,
            default:() => {
                return {
                    "id":1,
                    "sku":"PROD_EXAMPLE",
                    "name":"Produto Exemplo",
                    "description":"Esse é um produto de exemplo para mock",
                    "price":125.50,
                };
            }
        }
    }
}
</script>

<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
}

.price {
  color: grey;
  font-size: 16px;
}

.card button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
}

.card button:hover {
  opacity: 0.7;
}
.product-card .product-name {
    font-size: 18px;
}

.product-card .product-description {
    font-size: 12px;
    border-top: 1px #ddd solid;
    padding-top: 20px;
}

</style>