<script>
export default {
    name: 'ImageWork',
    props: ['img'],
};
</script>

<template>
    <div class="wrapper">
        <img :src="img" alt="" />
    </div>
</template>

<style lang="scss" scoped>
@import './ImageWork.scss';
</style>
