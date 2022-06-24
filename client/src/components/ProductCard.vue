<template>
    <div class="product">
        <img :src="product.image" />
        <div class="info">
            <p>$ {{ product.price }}</p>
            <h2>{{ product.title }}</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductCard',
    props: {
        product: {
            type: Object,
            required: true,
        },
    },
};
</script>
