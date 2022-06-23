<template>
    <div>
        <h1>HOME</h1>

        <Products />
    </div>
</template>

<script>
import Products from '../components/Products.vue';
export default {
    name: 'Home',
    components: {
        Products,
    },
};
</script>
