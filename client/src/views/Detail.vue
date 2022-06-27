<template>
    <div>
        <Back />
        <div v-if="!product">
            <Loading />
        </div>
        <div class="loading" v-else-if="!product.title">
            <p>No product found.</p>
        </div>
        <div class="productDetail" v-else>
            <img :src="product.image" />
            <div>
                <h1>{{ product.title }}</h1>
                <p>{{ product.description }}</p>
                <p>{{ product.price }} CHF</p>
            </div>
        </div>
    </div>
</template>

<script>
import { getProduct } from '../utils/product';
import Back from '../components/common/Back.vue';
import Loading from '../components/common/Loading.vue';
export default {
    name: 'Detail',
    created() {
        getProduct(this.$route.params.id).then((product) => {
            this.product = product;
        });
    },
    data() {
        return {
            product: this.product,
        };
    },
    components: { Back, Loading },
};
</script>
