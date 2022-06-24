<template>
    <div id="cart">
        <img src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/shopping-cart-256.png" />
        <p>Cart ({{ cart.length }})</p>
        <div class="modal">
            <p>{{ cart.length }} Products in your cart</p>
            <div v-for="(product, idx) in cart" :key="idx">
                <div>test</div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'Cart',
    computed: {
        ...mapState({
            cart: 'cart',
        }),
    },
};
</script>
