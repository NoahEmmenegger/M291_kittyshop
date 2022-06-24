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
        cart: [1, 3, 4, 1],
    },
});
