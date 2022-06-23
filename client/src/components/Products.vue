<template>
    <div class="products">
        products
        <tr v-for="(product, idx) in products" :key="idx">
            <ProductCard :product="product" />
        </tr>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import ProductCard from './ProductCard.vue';

export default {
    name: 'Products',
    computed: {
        ...mapState({
            products: 'products',
        }),
    },
    components: {
        ProductCard,
    },
};
</script>
