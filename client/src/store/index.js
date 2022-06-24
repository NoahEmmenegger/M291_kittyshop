import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        products: [
            {
                id: 1,
                title: 'door',
                price: 10,
                image: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg',
                description: 'Lorem ipsum',
            },
            {
                id: 2,
                title: 'collar',
                price: 20,
                image: 'https://cdn.pixabay.com/photo/2018/03/03/21/40/cat-3196660_960_720.jpg',
                description: 'Lorem ipsum',
            },
            {
                id: 3,
                title: 'bowl',
                price: 30,
                image: 'https://cdn.pixabay.com/photo/2015/08/10/04/58/pet-882446_960_720.jpg',
                description: 'Lorem ipsum',
            },
            {
                id: 4,
                title: 'food',
                price: 40,
                image: 'https://cdn.pixabay.com/photo/2019/07/30/09/51/cats-4372525_960_720.jpg',
                description: 'Lorem ipsum',
            },
        ],
        cart: [
            {
                productId: 1,
                amount: 2,
            },
            {
                productId: 2,
                amount: 1,
            },
        ],
    },
    getters: {
        getCartTotal(state) {
            return state.cart.reduce((total, item) => {
                let product = state.products.find((product) => product.id === item.productId);
                return total + product.price * item.amount;
            }, 0);
        },
    },
    mutations: {
        addToCart: (state, productId) => {
            let index = state.cart.findIndex((p) => p.productId === productId);
            if (index !== -1) {
                state.cart[index].amount++;
            } else {
                state.cart.push({ productId: productId, amount: 1 });
            }
        },
        removeFromCart: (state, productId) => {
            let index = state.cart.findIndex((p) => p.productId === productId);
            if (index !== -1) {
                state.cart[index].amount--;
                if (state.cart[index].amount === 0) state.cart.splice(index, 1);
            }
        },
    },
});
