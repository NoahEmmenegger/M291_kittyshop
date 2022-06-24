<template>
    <div>
        <input class="searchInput" @keyup="onChange" type="text" placeholder="Search..." />
        <div class="products">
            <ProductCard
                v-for="(product, idx) in products.filter((p) => p.title.includes(searchText))"
                :key="idx"
                :product="product"
            >
            </ProductCard>
        </div>
        <div v-if="products.filter((p) => p.title.includes(searchText)).length === 0">
            <p>No products found.</p>
        </div>
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
    data() {
        return {
            searchText: '',
        };
    },
    methods: {
        onChange(e) {
            this.searchText = e.target.value;
            console.log(this.searchText);
        },
    },
};
</script>
