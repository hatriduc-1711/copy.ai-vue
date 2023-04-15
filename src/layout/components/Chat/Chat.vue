<script>
import { ref } from 'vue';
export default {
    name: 'Chat',
    setup() {
        const show = ref(false);
        const namePage = ref('Home');

        const handleShow = () => (show.value = !show.value);

        const handleActive = (value) => (namePage.value = value);
        return { show, namePage, handleShow, handleActive };
    },
};
</script>

<template>
    <div class="wrapper">
        <div @click="handleShow" :class="['button', show && 'show']">
            <img
                v-show="!show"
                src="https://downloads.intercomcdn.com/i/o/351757/b2dc9aba0c21dd8b59d674da/9e1acb87fc9fef46a35b7a8f17d4ceea.png"
                alt=""
            />
            <svg
                v-show="show"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.601 8.39897C18.269 8.06702 17.7309 8.06702 17.3989 8.39897L12 13.7979L6.60099 8.39897C6.26904 8.06702 5.73086 8.06702 5.39891 8.39897C5.06696 8.73091 5.06696 9.2691 5.39891 9.60105L11.3989 15.601C11.7309 15.933 12.269 15.933 12.601 15.601L18.601 9.60105C18.9329 9.2691 18.9329 8.73091 18.601 8.39897Z"
                    fill="white"
                ></path>
            </svg>
        </div>
        <div :class="['chat', show && 'showChat']">
            <div class="heading">
                <div class="name-page">{{ namePage }}</div>
            </div>
            <div class="loading">
                <span class="loader"></span>
            </div>
            <div class="navbar">
                <div @click="handleActive('Home')" :class="['button-nav', namePage === 'Home' && 'active']">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" class="nav-icon">
                        <path
                            class="home_svg__stroke"
                            d="M2.85 9.35c0-.423.218-.85.635-1.143l7.496-5.172h.001a1.84 1.84 0 012.036 0s0 0 0 0l7.495 5.17.002.002c.417.293.635.72.635 1.142V19.7c0 .73-.676 1.45-1.65 1.45h-15c-.974 0-1.65-.72-1.65-1.45V9.35z"
                            stroke="#1A1A1A"
                            stroke-width="1.7"
                        ></path>
                        <path
                            class="home_svg__stroke"
                            d="M17.25 15A7.855 7.855 0 0112 17.002 7.855 7.855 0 016.75 15"
                            stroke="#1A1A1A"
                            stroke-width="1.7"
                            stroke-linecap="round"
                        ></path>
                    </svg>
                    <span>Home</span>
                </div>
                <div @click="handleActive('Message')" :class="['button-nav', namePage === 'Message' && 'active']">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" class="nav-icon">
                        <mask id="messages_svg__a" fill="#fff">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M19 2a3 3 0 013 3V20.806c0 1.335-1.613 2.005-2.559 1.062L15.56 18H5a3 3 0 01-3-3V5a3 3 0 013-3h14z"
                            ></path>
                        </mask>
                        <path
                            class="messages_svg__fill"
                            d="M19.441 21.868l1.2-1.204-1.2 1.204zM15.56 18v-1.7h.702l.498.496-1.2 1.204zM20.3 5A1.3 1.3 0 0019 3.7V.3A4.7 4.7 0 0123.7 5h-3.4zm0 8.956V5h3.4v8.956h-3.4zm0 2.544v-2.544h3.4V16.5h-3.4zm0 4.306V16.5h3.4v4.306h-3.4zm.341-.142a.23.23 0 00-.218-.043.228.228 0 00-.123.185h3.4c0 2.848-3.441 4.277-5.459 2.267l2.4-2.409zm-3.882-3.868l3.882 3.868-2.4 2.409-3.882-3.869 2.4-2.408zM5 16.3h10.559v3.4H5v-3.4zM3.7 15A1.3 1.3 0 005 16.3v3.4A4.7 4.7 0 01.3 15h3.4zm0-10v10H.3V5h3.4zM5 3.7A1.3 1.3 0 003.7 5H.3A4.7 4.7 0 015 .3v3.4zm14 0H5V.3h14v3.4z"
                            fill="#1A1A1A"
                            mask="url(#messages_svg__a)"
                        ></path>
                        <path
                            class="messages_svg__fill"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M17 7a.85.85 0 010 1.7H7A.85.85 0 117 7h10zm-5 4a.85.85 0 010 1.7H7A.85.85 0 017 11h5z"
                            fill="#1A1A1A"
                        ></path>
                    </svg>
                    <span>Message</span>
                </div>
                <div @click="handleActive('Help')" :class="['button-nav', namePage === 'Help' && 'active']">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" class="nav-icon">
                        <circle
                            class="help_svg__stroke help_svg__circle"
                            cx="12"
                            cy="12"
                            r="9.65"
                            stroke="#1A1A1A"
                            stroke-width="1.7"
                        ></circle>
                        <path
                            class="help_svg__stroke help_svg__negative"
                            d="M9.664 8.576a2.41 2.41 0 114.102 2.39l-1.075 1.104c-.326.322-.765.76-.765 1.544v.364"
                            stroke="#1A1A1A"
                            stroke-width="1.7"
                            stroke-linecap="round"
                        ></path>
                        <circle
                            class="help_svg__fill help_svg__negative"
                            cx="11.927"
                            cy="16.884"
                            r="0.884"
                            fill="#1A1A1A"
                        ></circle>
                    </svg>
                    <span>Help</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './Chat.scss';
</style>
