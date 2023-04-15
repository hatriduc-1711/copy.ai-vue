<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import NavItem from './NavItem.vue';
import Button from '../../../components/Button/Button.vue';

export default {
    name: 'Navbar',
    components: { NavItem, Button },
    setup() {
        const useCases = ref(['For Teams', 'For Emails', 'For Blogs', 'For Social Media']);
        const resources = ref([
            'Learn from our Blog',
            'Compare',
            'Free AI Writing Generators',
            'Free AI Writing Templates',
            'Weekly Demos',
            'Join the Community',
        ]);

        const router = useRouter();
        const handleClick = () => {
            router.push({
                name: 'login',
            });
        };

        return { useCases, resources, handleClick };
    },
};
</script>

<template>
    <div class="wrapper-navbar">
        <div class="navbar-container">
            <div class="logo-left">
                <router-link :to="{ name: 'home' }" class="brand">
                    <img
                        src="https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/62828ef38380777cb33cdf29_5f579853dab605076f3cbf3f_logo.svg"
                        alt="Copy.ai"
                        class="image-container"
                    />
                </router-link>
                <a href="https://jobs.lever.co/CopyAI" rel="noreferrer" target="_blank" class="badge">
                    We're Hiring!
                </a>
            </div>
            <nav class="navbar">
                <NavItem :to="`chat`" :name="`Chat`" class="nav-item" />
                <div class="nav-item">
                    <div class="dropdown-nav">
                        <span>Use Cases</span>
                        <img
                            class="icon-down"
                            src="https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/629d63cc2733a71773633c2b_expand_more_FILL1_wght300_GRAD200_opsz20.svg"
                            alt=""
                        />
                    </div>
                    <div class="dropdown-list">
                        <NavItem
                            v-for="nav in useCases"
                            :to="`chat`"
                            :name="nav"
                            :key="nav"
                            class="dropdown-nav-item"
                        />
                    </div>
                </div>
                <div class="nav-item">
                    <div class="dropdown-nav">
                        <span>Resources</span>
                        <img
                            class="icon-down"
                            src="https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/629d63cc2733a71773633c2b_expand_more_FILL1_wght300_GRAD200_opsz20.svg"
                            alt=""
                        />
                    </div>
                    <div class="dropdown-list">
                        <NavItem
                            v-for="nav in resources"
                            :to="`chat`"
                            :name="nav"
                            :key="nav"
                            class="dropdown-nav-item"
                        />
                    </div>
                </div>
                <NavItem :to="`pricing`" :name="`Pricing`" class="nav-item" />
            </nav>
            <div class="button-right">
                <router-link :to="{ name: 'login' }" class="navigate-login"> Login </router-link>
                <Button :large="`large`" :button="`Get Started ― It's Free`" @click="handleClick" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './Navbar.scss';
</style>
