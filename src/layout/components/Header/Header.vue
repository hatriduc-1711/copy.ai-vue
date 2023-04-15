<script>
export default {
    name: 'Header',
};
</script>

<template>
    <header class="wrapper">
        <div class="top-bar-text---copy">
            <strong>Introducing Chat by Copy.ai: </strong>
            Whatever you need,
            <span className="text-gradient"> just ask it.</span>
        </div>
        <router-link :to="{ name: 'chat' }" class="top-bar-button"> Learn more </router-link>
    </header>
</template>

<style lang="scss" scoped>
@import './Header.scss';
</style>
