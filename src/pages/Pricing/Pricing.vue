<script>
import { ref } from 'vue';

export default {
    name: 'Pricing',
    setup() {
        const free = ref([
            {
                exclude: false,
                title: 'Only 1 user seat',
            },
            {
                exclude: false,
                title: 'Chat by Copy.ai',
            },
            {
                exclude: false,
                title: '90+ copywriting tools',
            },
            {
                exclude: false,
                title: 'Unlimited projects',
            },
            {
                exclude: false,
                title: 'Blog Wizard tool',
            },
            {
                exclude: true,
                title: '25+ languages',
            },
            {
                exclude: true,
                title: 'Access to newest features',
            },
        ]);

        const pro = ref([
            '5 user seats',
            'Chat by Copy.ai',
            '90+ copywriting tools',
            'Unlimited projects',
            'Priority email support',
            '25+ languages',
            'Blog Wizard tool',
            'Access to newest features',
        ]);

        const enterprise = ref([
            'API access',
            'Chat interface',
            'Prebuilt workflows library',
            'Private company Infobase',
        ]);

        const active = ref('monthly');
        const handleClick = (value) => {
            active.value = value;
        };

        const handleClickButton = () => {
            active.value === 'monthly' ? (active.value = 'yearly') : (active.value = 'monthly');
        };

        const question1 = ref(true);
        const question2 = ref(false);
        const question3 = ref(false);
        const question4 = ref(false);
        const question5 = ref(false);
        const handleClickQuestion = (value) => {
            switch (value) {
                case 1:
                    question1.value = !question1.value;
                    break;
                case 2:
                    question2.value = !question2.value;
                    break;
                case 3:
                    question3.value = !question3.value;
                    break;
                case 4:
                    question4.value = !question4.value;
                    break;
                case 5:
                    question5.value = !question5.value;
                    break;
            }
        };

        return {
            free,
            pro,
            enterprise,
            active,
            question1,
            question2,
            question3,
            question4,
            question5,
            handleClick,
            handleClickButton,
            handleClickQuestion,
        };
    },
};
</script>

<template>
    <section class="wrapper-option">
        <div class="pricing-tabs-menu">
            <div @click="handleClick('monthly')" class="pricing-tab-left">
                <strong>Pay Monthly</strong>
            </div>
            <div
                @click="handleClickButton"
                :class="['switcher', active === 'monthly' && 'monthly', active === 'yearly' && 'yearly']"
            >
                <div></div>
            </div>
            <div @click="handleClick('yearly')" class="pricing-tab-right">
                <strong>Pay Yearly </strong>
                <div class="sale">Save 25%!</div>
            </div>
        </div>
        <div class="option-container">
            <div class="option option-left">
                <div class="heading">
                    <h5 class="name">Free</h5>
                    <div class="price">$<strong>0</strong></div>
                    <p class="text">
                        2,000 words
                        <br />
                        per month
                    </p>
                    <p class="characteristic">No credit card required</p>
                    <button class="button">Sign Up for Free</button>
                </div>
                <ul class="list-characteristic">
                    <li v-for="item in free" :key="item.title" class="characteristic-item">
                        <div :class="['icon', item.exclude && 'exclude']">
                            <img
                                v-show="!item.exclude"
                                src="https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/629d69004ed1a8e11530602f_done_FILL1_wght700_GRAD200_opsz20.svg"
                                alt=""
                            />
                            <img
                                v-show="item.exclude"
                                src="https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/629d69006e12ef82104692bf_close_FILL1_wght700_GRAD200_opsz20.svg"
                                alt=""
                            />
                        </div>
                        <p :class="[item.exclude && 'exclude']">{{ item.title }}</p>
                    </li>
                </ul>
            </div>
            <div class="option option-center">
                <div class="heading">
                    <h5 class="name">Fro</h5>
                    <div class="price">
                        $<strong>{{ active === 'monthly' ? 49 : 36 }}</strong
                        >/mo
                    </div>
                    <p class="text">{{ active === 'monthly' ? 'Billed Monthly' : 'Billed $432/year' }}</p>
                    <p class="text-gradient pro">Unlimited words</p>
                    <button class="button button-pro">
                        Get Started
                        <img
                            src="https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/629d56e89252a851df58dc0f_arrow_right_alt_FILL1_wght300_GRAD200_opsz24_w.svg"
                            alt=""
                            class="icon-arrow"
                        />
                    </button>
                </div>
                <ul class="list-characteristic">
                    <li v-for="item in pro" :key="item" class="characteristic-item">
                        <div class="icon">
                            <img
                                src="https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/629d69004ed1a8e11530602f_done_FILL1_wght700_GRAD200_opsz20.svg"
                                alt=""
                            />
                        </div>
                        <p>{{ item }}</p>
                    </li>
                </ul>
            </div>
            <div class="option option-right">
                <div class="heading">
                    <h5 class="name">Enterprise</h5>
                    <h3 class="title">
                        Automate Any
                        <br />
                        Workflow
                    </h3>
                    <button class="button">Request a Demo</button>
                </div>
                <ul class="list-characteristic">
                    <li v-for="item in enterprise" :key="item" class="characteristic-item">
                        <div class="icon">
                            <img
                                src="https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/629d69004ed1a8e11530602f_done_FILL1_wght700_GRAD200_opsz20.svg"
                                alt=""
                            />
                        </div>
                        <p>{{ item }}</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>

    <section class="questions-wrapper">
        <h1 class="question-title">Frequently Asked Questions</h1>
        <div @click="handleClickQuestion(1)" :class="['question-item', question1 && 'active']">
            <div class="question">
                <h3>What can I create with Copy.ai?</h3>
                <div class="icon">+</div>
            </div>
            <div class="content-question">
                We have copywriting tools for everything you need to start and run your business! You can write blog
                posts, product descriptions, and even Instagram captions with Copy.ai. We're always updating our tools,
                so let us know what else you'd like to see!
            </div>
        </div>
        <div @click="handleClickQuestion(2)" :class="['question-item', question2 && 'active']">
            <div class="question">
                <h3>How much does it cost?</h3>
                <div class="icon">+</div>
            </div>
            <div class="content-question">
                We have copywriting tools for everything you need to start and run your business! You can write blog
                posts, product descriptions, and even Instagram captions with Copy.ai. We're always updating our tools,
                so let us know what else you'd like to see!
            </div>
        </div>
        <div @click="handleClickQuestion(3)" :class="['question-item', question3 && 'active']">
            <div class="question">
                <h3>What languages does it support?</h3>
                <div class="icon">+</div>
            </div>
            <div class="content-question">
                We have copywriting tools for everything you need to start and run your business! You can write blog
                posts, product descriptions, and even Instagram captions with Copy.ai. We're always updating our tools,
                so let us know what else you'd like to see!
            </div>
        </div>
        <div @click="handleClickQuestion(4)" :class="['question-item', question4 && 'active']">
            <div class="question">
                <h3>Can I get a demo of the product?</h3>
                <div class="icon">+</div>
            </div>
            <div class="content-question">
                We have copywriting tools for everything you need to start and run your business! You can write blog
                posts, product descriptions, and even Instagram captions with Copy.ai. We're always updating our tools,
                so let us know what else you'd like to see!
            </div>
        </div>
        <div @click="handleClickQuestion(5)" :class="['question-item', question5 && 'active']">
            <div class="question">
                <h3>Where can I learn more about copywriting or entrepreneurship?</h3>
                <div class="icon">+</div>
            </div>
            <div class="content-question">
                We have copywriting tools for everything you need to start and run your business! You can write blog
                posts, product descriptions, and even Instagram captions with Copy.ai. We're always updating our tools,
                so let us know what else you'd like to see!
            </div>
        </div>
    </section>

    <section class="client-wrapper">
        <h1 class="client-title">Our customers love Copy.ai</h1>
        <div class="client-container">
            <div class="client-content">
                <div class="avatar">
                    <img
                        src="https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/629a9c6aa211982467b2d87d_jeremy-moser-p-500.jpeg"
                        alt=""
                    />
                </div>
                <p>
                    "Copy.ai saves us thousands of dollars a week. We create content briefs and write 50-100 unique
                    SEO-driven pieces per month. With Copy.ai, we now craft briefs, outlines, and full first drafts in
                    minutes that our writers can use as the perfect inspiration for fine-tuning a valuable piece of
                    content."
                </p>
                <div class="star">
                    <img
                        src="https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/629d67a0d174c6cdc5a50c70_star_FILL1_wght300_GRAD200_opsz20.svg"
                        alt=""
                    />
                    <img
                        src="https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/629d67a0d174c6cdc5a50c70_star_FILL1_wght300_GRAD200_opsz20.svg"
                        alt=""
                    />
                    <img
                        src="https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/629d67a0d174c6cdc5a50c70_star_FILL1_wght300_GRAD200_opsz20.svg"
                        alt=""
                    />
                    <img
                        src="https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/629d67a0d174c6cdc5a50c70_star_FILL1_wght300_GRAD200_opsz20.svg"
                        alt=""
                    />
                    <img
                        src="https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/629d67a0d174c6cdc5a50c70_star_FILL1_wght300_GRAD200_opsz20.svg"
                        alt=""
                    />
                </div>

                <h3 class="name-client">Jeremy Moser</h3>
                <div class="role">CEO, uSERP</div>
            </div>
            <div class="client-image">
                <div>uSERP has sped up their content creation process by 10x after using Copy.ai</div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import './Pricing.scss';
</style>
