<template>
    <div class="products">
        <ProductCard v-for="(product, idx) in products" :key="idx" :product="product"> </ProductCard>
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
