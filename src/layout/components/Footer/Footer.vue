<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Button from '../../../components/Button/Button.vue';

export default {
    name: 'Footer',
    components: { Button },
    setup() {
        const product = ref([
            'Chat by Copy.ai',
            'Copy.ai Reviews',
            'Copy.ai vs Jasper.ai',
            'Copy.ai API',
            'Pricing',
            'Alternatives',
            'Templates',
            'Write in 29+ Languages',
            'Use Free AI Tools',
        ]);

        const company = ref([
            'Blog',
            'Press',
            'Careers',
            'Community',
            'Creator Program',
            'Twitter',
            'LinkedIn',
            'Affiliate Program',
        ]);

        const support = ref([
            'Weekly Demos',
            'Contact Us',
            'Report a Bug',
            'Report an Outage',
            'Request a New Feature',
        ]);

        const useCases = ref(['For Teams', 'For Blog Writers', 'For Social Media Managers', 'For Email Marketers']);
        const router = useRouter();
        const handleClick = () => {
            router.push({
                name: 'login',
            });
        };

        return { product, company, support, useCases, handleClick };
    },
};
</script>

<template>
    <footer class="wrapper">
        <section class="first-child">
            <h1 class="first-child-title">Ready to level-up?</h1>
            <p class="first-child-text">Write 10x faster, engage your audience, &</p>
            <p class="first-child-text">never struggle with the blank page again.</p>
            <Button @click="handleClick" class="first-child-button" :large="`large`" :button="`Get Started for Free`" />
            <div class="first-child-utilities">
                <div class="utilities-item">
                    <div class="icon">
                        <img
                            src="https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/629d56562d72ff080d4738fc_done_FILL1_wght300_GRAD200_opsz24.svg"
                            alt=""
                        />
                    </div>
                    <span class="text">No credit card required</span>
                </div>
                <div class="utilities-item">
                    <div class="icon">
                        <img
                            src="https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/629d56562d72ff080d4738fc_done_FILL1_wght300_GRAD200_opsz24.svg"
                            alt=""
                        />
                    </div>
                    <span class="text">2,000 free words per month</span>
                </div>
                <div class="utilities-item">
                    <div class="icon">
                        <img
                            src="https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/629d56562d72ff080d4738fc_done_FILL1_wght300_GRAD200_opsz24.svg"
                            alt=""
                        />
                    </div>
                    <span class="text">90+ content types to explore</span>
                </div>
            </div>
        </section>
        <section class="last-child">
            <div class="background">
                <div class="layout-grid">
                    <div class="layout-row">
                        <div class="layout-column">
                            <h6 class="name">Product</h6>
                            <div class="footer-list">
                                <router-link to="#" v-for="item in product" :key="item" class="footer-item">{{
                                    item
                                }}</router-link>
                            </div>
                        </div>
                        <div class="layout-column">
                            <h6 class="name">Company</h6>
                            <div class="footer-list">
                                <router-link to="#" v-for="item in company" :key="item" class="footer-item">{{
                                    item
                                }}</router-link>
                            </div>
                        </div>
                        <div class="layout-column">
                            <h6 class="name">Support</h6>
                            <div class="footer-list">
                                <router-link to="#" v-for="item in support" :key="item" class="footer-item">{{
                                    item
                                }}</router-link>
                            </div>
                        </div>
                        <div class="layout-column">
                            <h6 class="name">Use Cases</h6>
                            <div class="footer-list">
                                <router-link to="#" v-for="item in useCases" :key="item" class="footer-item">{{
                                    item
                                }}</router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-meta">
                    <div class="footer-meta-left">
                        <img
                            src="https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/62828ef38380777cb33cdf29_5f579853dab605076f3cbf3f_logo.svg"
                            alt="Copy.ai"
                            class="image-container"
                        />
                        <p>© 2023 CopyAI, Inc.</p>
                        <router-link to="#">Privacy Notice</router-link>
                        <router-link to="#">Terms of Service</router-link>
                        <router-link to="#">Status</router-link>
                    </div>
                    <div class="footer-meta-right">
                        <a href="https://www.twitter.com/copy_ai" target="_blank" rel="noreferrer">
                            <div class="icon">
                                <img
                                    src="https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/629d5654e4ddd922389689ee_twitter-1.svg"
                                    alt=""
                                />
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/company/copyai" target="_blank" rel="noreferrer">
                            <div class="icon">
                                <img
                                    src="https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/629d565515e065bee9dfd489_linkedin-1.svg"
                                    alt=""
                                />
                            </div>
                        </a>
                        <a href="https://www.facebook.com/groups/887950931991543" target="_blank" rel="noreferrer">
                            <div class="icon">
                                <img
                                    src="https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/629d5654ab109b738382986c_facebook-6.svg"
                                    alt=""
                                />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </footer>
</template>

<style lang="scss" scoped>
@import './Footer.scss';
</style>
