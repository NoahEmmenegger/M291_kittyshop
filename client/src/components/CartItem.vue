<template>
    <div class="cartItem" :set="(product = products.find((p) => p.id === cartItem.productId))">
        <div>{{ product.title }}</div>
        <div>
            <button>-</button>
            <span>{{ cartItem.amount }}</span>
            <button @click="addToCart(product.id)">+</button>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
    name: 'CartItem',
    props: {
        cartItem: {
            type: Object,
            required: true,
        },
    },
    computed: {
        ...mapState({
            products: 'products',
        }),
    },
    methods: {
        addToCart(productId) {
            this.$store.commit('addToCart', productId);
        },
    },
};
</script>
