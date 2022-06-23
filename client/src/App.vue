<template>
    <!--
    Basic router navigation
    Update navigation by adding two router links for Home and About
   -->
    <div id="app">
        <div id="nav">
            <router-link to="/home">Home</router-link> |
            <router-link :to="{ name: 'about', params: { user: 'of Hans Muster' } }">About</router-link> |
            <router-link to="/contact">Contact</router-link>
        </div>
        <router-view />
        <MyNavigation />
    </div>
</template>

<style lang="scss">
//Import of global-style
@import 'styles/global';
</style>
