<template>
    <div id="cart">
        <img src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/shopping-cart-256.png" @click="toggleModal" />
        <p @click="toggleModal">Cart ({{ cart.length }})</p>
        <div class="modal" ref="modal" v-if="isModalOpen">
            <p>{{ cart.length }} Products in your cart with a total value of CHF {{ getCartTotal.toFixed(2) }}</p>

            <div class="table">
                <div class="headerRow">
                    <div>Artikel</div>
                    <div>Menge</div>
                </div>
                <div v-for="(item, idx) in cart" :key="idx">
                    <CartItem :cartItem="item" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import CartItem from './CartItem.vue';

export default {
    name: 'Cart',
    computed: {
        ...mapState({
            cart: 'cart',
            products: 'products',
        }),
        ...mapGetters({
            getCartTotal: 'getCartTotal',
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
