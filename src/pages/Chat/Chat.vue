<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Button from '../../components/Button/Button.vue';

export default {
    name: 'Chat',
    components: { Button },
    setup() {
        const logo = ref([
            {
                id: '1',
                img: 'https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/63e2adeba2a8cb825735c159_confluent.svg',
            },
            {
                id: '2',
                img: 'https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/63e53df69ac55e1a7fe14e48_seismic%20logo.png',
            },
            {
                id: '3',
                img: 'https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/63e53da1b10eff674798d46d_datadog%20logo.png',
            },
            {
                id: '4',
                img: 'https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/63e53da060f2150986e8e57c_survery%20monkey.svg',
            },
            {
                id: '5',
                img: 'https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/63e53da0ca34d0484fb75ee5_Salesforce%20logo.png',
            },
            {
                id: '6',
                img: 'https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/63e53da0e2f0086e287bc1da_okta%20logo.png',
            },
            {
                id: '7',
                img: 'https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/63e53da0be6068106a8bbd18_talkdesk%20logo.png',
            },
            {
                id: '8',
                img: 'https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/63e2ae2dd39a500a46c210b8_mongo.svg',
            },
            {
                id: '9',
                img: 'https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/63e2ae36a372ba26f328e4fd_sisense.png',
            },
            {
                id: '10',
                img: 'https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/63e2ae41d376b76810c28ec1_groove.png',
            },
            {
                id: '11',
                img: 'https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/63e53d9fd4680968708024bc_zoom%20logo.svg',
            },
            {
                id: '12',
                img: 'https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/63e53d9fd4394e57b5b5f8bc_hubspot%20logo.svg',
            },
        ]);

        const router = useRouter();
        const handleClick = () => {
            router.push({
                name: 'login',
            });
        };

        return { logo, handleClick };
    },
};
</script>

<template>
    <section class="heading">
        <h1 class="heading-title">
            <span className="text-gradient">Chat By Copy.ai:</span> Whatever you need, just ask.
        </h1>
        <div class="description">
            Scale your vision with Chat by Copy.ai, the most natural way to interface with AI to{' '}
            <strong>research, create, and achieve.</strong>
        </div>
        <div class="heading-button">
            <Button
                @click="handleClick"
                :button="`Try Chat by Copy.ai Free`"
                :large="`large`"
                :blue="`blue`"
                :iconRight="`https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/629d56e89252a851df58dc0f_arrow_right_alt_FILL1_wght300_GRAD200_opsz24_w.svg`"
            />
        </div>
        <p class="text">No credit card required</p>
    </section>
    <section class="block">
        <div class="text-block">The Chat AI platform powering sales and marketing teams behind world-class brands.</div>
        <section class="carousel">
            <div class="logo-carousel">
                <ul class="logo-carousel-list">
                    <li v-for="item in logo" :key="item.id" class="logo-carousel-item">
                        <img :src="item.img" alt="" />
                    </li>
                </ul>
                <ul class="logo-carousel-list">
                    <li v-for="item in logo" :key="item.id" class="logo-carousel-item">
                        <img :src="item.img" alt="" />
                    </li>
                </ul>
            </div>
        </section>
    </section>
    <section class="cards">
        <div class="cards-wrapper">
            <div class="cards-container">
                <div class="cards-left">
                    <h1 class="cards-left-title">Chat by Copy.ai, the #1 ChatGPT alternative</h1>
                    <ul class="cards-left-list">
                        <li class="cards-left-item">
                            <img
                                src="https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/63f52de8823d3d491df72288_Icon.svg"
                                alt=""
                                class="icon-check"
                            />
                            <p>Scrape websites for public data</p>
                        </li>
                        <li class="cards-left-item">
                            <img
                                src="https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/63f52de8823d3d491df72288_Icon.svg"
                                alt=""
                                class="icon-check"
                            />
                            <p>Generate personalized copy for sales outreach</p>
                        </li>
                        <li class="cards-left-item">
                            <img
                                src="https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/63f52de8823d3d491df72288_Icon.svg"
                                alt=""
                                class="icon-check"
                            />
                            <p>Summarize YouTube videos into key bullet points</p>
                        </li>
                        <li class="cards-left-item">
                            <img
                                src="https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/63f52de8823d3d491df72288_Icon.svg"
                                alt=""
                                class="icon-check"
                            />
                            <p>Learn how prospects engage on LinkedIn</p>
                        </li>
                    </ul>
                    <p class="text">Chat by Copy.ai is the only AI Chat platform you’ll ever need.</p>
                    <Button :large="`large`" :button="`Try Chat by Copy.ai For Free`" />
                </div>
                <div class="cards-right">
                    <div class="cards-right-item">
                        <img
                            src="https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/640620f2a140c39dc6204ab6_card1-p-800.png"
                            alt=""
                        />
                        <h3 class="cards-item-title">Real-time data</h3>
                        <div class="cards-item-content">
                            ChatGPT is only trained with data up to 2021. That means all your responses are over two
                            years old (ask ChatGPT who won Super Bowl LVII, for example). But in today’s world, things
                            change fast. That’s why Chat by Copy.ai delivers the most up-to-date responses by pulling
                            from real-time data.
                        </div>
                    </div>
                    <div class="cards-right-item item2">
                        <img
                            src="https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/64062134295412ca7ec476c4_card2-p-800.png"
                            alt=""
                        />
                        <h3 class="cards-item-title">Inline doc editor</h3>
                        <div class="cards-item-content">
                            Chat by Copy.ai gives you an intuitive dashboard to help you deliver higher-quality content
                            in less time. On the left, you have a layout that looks and feels similar to ChatGPT. And on
                            the right is an inline doc editor that allows you to cut, copy, paste, and polish your way
                            to long-form content in minutes.
                        </div>
                    </div>
                    <div class="cards-right-item item3">
                        <img
                            src="https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/64062148f760aa627964a47e_card3-p-800.png"
                            alt=""
                        />
                        <h3 class="cards-item-title">Prebuilt prompts</h3>
                        <div class="cards-item-content">
                            Increase the quality of your output by working with Chat by Copy.ai’s prebuilt prompts. This
                            helps you guide our software to better content and copy from your first draft. Prompts
                            include helpful commands for creating personalized sales emails, SEO-friendly blog posts
                            (long-form), content repurposing, and pay-per-click (PPC) ads.
                        </div>
                    </div>
                    <div class="cards-right-item item4">
                        <img
                            src="https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/6406215c5fe07b7a249a07ac_card4-p-800.png"
                            alt=""
                        />
                        <h3 class="cards-item-title">Built for teams</h3>
                        <div class="cards-item-content">
                            There’s no such thing as a silver-bullet solution in business - but Chat by Copy.ai is
                            dangerously close. Our goal is to help teams collaborate on higher-level problem-solving
                            that leads to sustainable growth for your business. To do that, we developed Chat by Copy.ai
                            to provide everyone with the information, data, and relevant resources they need to thrive.
                            In other words, getting Chat by Copy.ai is like gifting a genius personal assistant to each
                            team member.
                        </div>
                    </div>
                    <div class="cards-right-item item5">
                        <img
                            src="https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/640621c1a6f3a4d6123bc1f1_card5-p-800.png"
                            alt=""
                        />
                        <h3 class="cards-item-title">Forever-free</h3>
                        <div class="cards-item-content">
                            Are you a small fish in a big pond? Or a big fish hoping to test new waters? Either way, our
                            platform helps get you started without the risk. You can implement an AI-driven workflow on
                            our forever-free plan. After that, if you want to upgrade, you’ll be charged a flat rate of
                            $49/month for unlimited access. No strings. No asterisks. Just the tools you need to hit
                            your goals.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import './Chat.scss';
</style>
