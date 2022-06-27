<template>
    <div>
        <Back />
        <div class="productDetail">
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
    components: { Back },
};
</script>
