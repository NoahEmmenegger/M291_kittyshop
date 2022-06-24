<template>
    <div class="cartItem">
        {{ cartItem.title }}
    </div>
</template>

<script>
export default {
    name: 'CartItem',
    props: {
        cartItem: {
            type: Object,
            required: true,
        },
    },
};
</script>
