<template>
    <!--
    Basic router navigation
    Update navigation by adding two router links for Home and About
   -->
    <div id="app">
        <div id="header">
            <div id="logo">
                <img src="https://cdn.pixabay.com/photo/2021/02/19/09/36/heart-6029680_960_720.png" />
                <h1>Kittyshop</h1>
            </div>
            <div id="nav">
                <router-link to="/">Home</router-link> |
                <router-link :to="{ name: 'about', params: { user: 'of Hans Muster' } }">About</router-link> |
                <router-link to="/contact">Contact</router-link>
            </div>
            <div id="cart">
                <img src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/shopping-cart-256.png" />
                <p>Cart (2)</p>
            </div>
        </div>

        <router-view />
        <MyNavigation />
    </div>
</template>

<style lang="scss">
//Import of global-style
@import 'styles/global';
</style>
