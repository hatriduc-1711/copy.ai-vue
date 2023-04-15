<script>
export default {
    name: 'DescriptionWork',
    props: ['stepNumber', 'stepTitle', 'contentStep', 'center'],
};
</script>

<template>
    <div :class="['wrapper', center]">
        <div class="step-wrapper">
            <div class="step-number">{{ stepNumber }}</div>
            <div class="step-title">{{ stepTitle }}</div>
        </div>
        <div class="content-step">{{ contentStep }}</div>
    </div>
</template>

<style lang="scss" scoped>
@import './DescriptionWork.scss';
</style>
