<template>
    <div class="product">
        <img :src="product.image" />
        <!-- <h2>{{ product.title }}</h2> -->
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
