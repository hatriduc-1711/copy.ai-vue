<script>
export default {
    name: 'Button',
    props: ['button', 'onClick', 'large', 'small', 'blue', 'google', 'iconRight'],
};
</script>

<template>
    <button @click="onClick" :class="['wrapper', large, small, blue]">
        <img :src="google" alt="" :class="[!!google && 'google']" />
        <span>{{ button }}</span>
        <img :src="iconRight" alt="" :class="[!!iconRight && 'icon-right']" />
    </button>
</template>

<style lang="scss" scoped>
@import './Button.scss';
</style>
