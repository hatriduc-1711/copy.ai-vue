<script>
import { ref } from 'vue';

export default {
    name: 'Video',
    setup() {
        let show = ref(false);

        const handleClick = () => (show.value = !show.value);

        return { show, handleClick };
    },
};
</script>

<template>
    <div class="wrapper">
        <div class="browser-top">
            <div class="browser-dot-wrapper">
                <div class="browser-dot"></div>
                <div class="browser-dot"></div>
                <div class="browser-dot"></div>
            </div>
            <div class="browser-address"></div>
            <div class="browser-button"></div>
        </div>
        <div class="wrapper-video" @click="handleClick">
            <div class="button-play">
                <img
                    src="https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/629d6a08b00da561ba4cfdfd_play_arrow_FILL1_wght700_GRAD200_opsz40.svg"
                    alt=""
                    class="icon-play"
                />
            </div>
            <video class="video" autoPlay muted loop>
                <source
                    src="https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/629d6fefd174c645f3a545da_Image%20from%20iOS%20(2)-transcode.mp4"
                    type="video/mp4"
                />
            </video>
        </div>
    </div>
    <div v-show="show" class="show-video">
        <div class="button-close" @click="handleClick">
            <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00IDAgMTggMTciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNyI+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJtMCAwaDd2LTdoNXY3aDd2NWgtN3Y3aC01di03aC03eiIgb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtMSAxaDd2LTdoM3Y3aDd2M2gtN3Y3aC0zdi03aC03eiIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4="
                alt=""
            />
        </div>
        <video width="900" controls>
            <source
                src="https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/629d6fefd174c645f3a545da_Image%20from%20iOS%20(2)-transcode.mp4"
                type="video/mp4"
            />
        </video>
    </div>
</template>

<style lang="scss" scoped>
@import './Video.scss';
</style>
