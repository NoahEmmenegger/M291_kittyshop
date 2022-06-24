<template>
    <div id="cart" @click="toggleModal">
        <img src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/shopping-cart-256.png" />
        <p>Cart ({{ cart.length }})</p>
        <div class="modal" ref="modal" v-if="isModalOpen">
            <p>{{ cart.length }} Products in your cart</p>
            <div v-for="(productId, idx) in cart" :key="idx">
                <CartItem :cartItem="products.find((x) => x.id === productId)" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import CartItem from './CartItem.vue';

export default {
    name: 'Cart',
    computed: {
        ...mapState({
            cart: 'cart',
            products: 'products',
        }),
    },
    data() {
        return {
            isModalOpen: true,
        };
    },
    methods: {
        toggleModal() {
            this.isModalOpen = !this.isModalOpen;
        },
    },
    components: { CartItem },
};
</script>
