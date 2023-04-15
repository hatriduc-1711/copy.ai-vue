<script>
export default {
    name: 'CopyAi',
    props: ['icon', 'title', 'description', 'buttonLink'],
};
</script>

<template>
    <div class="wrapper">
        <a href="#" class="copy-ai-container">
            <img :src="icon" alt="" class="icon" />
            <div class="copy-ai-content">
                <h3 class="title">{{ title }}</h3>
                <div class="description">{{ description }}</div>
                <div class="button-link">
                    {{ buttonLink }}
                    <img
                        src="https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/629d56570b67a45f2a87186d_arrow_right_alt_FILL1_wght300_GRAD200_opsz24.svg"
                        alt=""
                        class="icon-arrow"
                    />
                </div>
            </div>
        </a>
    </div>
</template>

<style lang="scss" scoped>
@import './CopyAi.scss';
</style>
