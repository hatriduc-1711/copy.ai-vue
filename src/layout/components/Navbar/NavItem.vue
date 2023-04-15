<script>
export default {
    name: 'NavItem',
    props: ['to', 'name', 'active'],
};
</script>

<template>
    <router-link :to="{ name: to }" :class="active">{{ name }}</router-link>
</template>

<style lang="scss" scoped>
@import './Navbar.scss';
</style>
