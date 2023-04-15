<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Button from '../../components/Button/Button.vue';
import Video from '../../components/Video/Video.vue';
import Testimonial from '../../components/Testimonial/Testimonial.vue';
import CopyAi from '../../components/CopyAi/CopyAi.vue';
import ImageWork from '../../components/ImageWork/ImageWork.vue';
import DescriptionWork from '../../components/DescriptionWork/DescriptionWork.vue';

export default {
    name: 'Home',
    components: { Button, Video, Testimonial, CopyAi, ImageWork, DescriptionWork },
    setup() {
        const router = useRouter();
        const handleClick = () => {
            router.push({
                name: 'login',
            });
        };

        return { handleClick };
    },
};
</script>

<template>
    <div class="home-container">
        <section class="heading">
            <h1 class="heading-title">
                Whatever you want to ask,
                <br />
                <span className="text-gradient">our chat has the answers</span>
            </h1>
            <p>Get your<strong> free account today</strong></p>
            <div class="buttons-horizontal">
                <Button
                    @click="handleClick"
                    :large="`large`"
                    :google="`https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/6284d82e4f84aa3855d624fc_google_g_logo.svg`"
                    :blue="`blue`"
                    :button="`Sign up with Google`"
                />
                <span class="or">or</span>
                <Button
                    @click="handleClick"
                    :large="`large`"
                    :iconRight="`https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/629d56e89252a851df58dc0f_arrow_right_alt_FILL1_wght300_GRAD200_opsz24_w.svg`"
                    :button="`Sign up with email`"
                />
            </div>
            <p class="text">No credit card required</p>
            <div class="line-horizontal"></div>
            <div class="list-case-links">
                <router-link to="#" class="case-link">
                    <div class="icon-large">
                        <img
                            src="https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/629d5658a211980c88c35762_library_books_FILL1_wght300_GRAD200_opsz24.svg"
                            alt=""
                        />
                    </div>
                    <div class="case-content">
                        <div class="case-link-name">For Blog Writers</div>
                        <h3 class="case-link-title">Write blogs 10x faster</h3>
                    </div>
                    <img
                        class="icon-arrow"
                        src="https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/629d56570b67a45f2a87186d_arrow_right_alt_FILL1_wght300_GRAD200_opsz24.svg"
                        alt=""
                    />
                </router-link>
                <router-link to="#" class="case-link">
                    <div class="icon-large">
                        <img
                            src="https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/629d5657d174c6c81ca49340_rate_review_FILL1_wght300_GRAD200_opsz24.svg"
                            alt=""
                        />
                    </div>
                    <div class="case-content">
                        <div class="case-link-name">For Social Media Managers</div>
                        <h3 class="case-link-title">Write higher converting posts</h3>
                    </div>
                    <img
                        class="icon-arrow"
                        src="https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/629d56570b67a45f2a87186d_arrow_right_alt_FILL1_wght300_GRAD200_opsz24.svg"
                        alt=""
                    />
                </router-link>
                <router-link to="#" class="case-link">
                    <div class="icon-large">
                        <img
                            src="https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/629d5657a38bde2f7200424e_drafts_FILL1_wght300_GRAD200_opsz24.svg"
                            alt=""
                        />
                    </div>
                    <div class="case-content">
                        <div class="case-link-name">For Email Marketers</div>
                        <h3 class="case-link-title">Write more engaging emails</h3>
                    </div>
                    <img
                        class="icon-arrow"
                        src="https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/629d56570b67a45f2a87186d_arrow_right_alt_FILL1_wght300_GRAD200_opsz24.svg"
                        alt=""
                    />
                </router-link>
            </div>
            <Video />
        </section>
        <Testimonial />
        <section class="copy-help-container">
            <h1 class="copy-help-title">
                Copy.ai helps
                <br />
                <div class="text-gradient">‍‍‍startup teams</div>
            </h1>
            <p class="copy-help-text">
                Get better results in a fraction of the time.
                <br />
                Finally, a writing tool you’ll actually use.
            </p>
            <div class="gallery-container">
                <div class="gallery-grid">
                    <div class="gallery-row">
                        <CopyAi
                            :icon="`https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/64301ba0880c637337aa7a2a_Group%20316126053.svg`"
                            :title="`Blog Content`"
                            :description="`Write optimized blog posts in a fraction of the time.`"
                            :buttonLink="`Try Blog Content`"
                        />
                        <CopyAi
                            :icon="`https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/64301b9f4909990f34a886ad_Group%20316126049.svg`"
                            :title="`Digital Ad Copy`"
                            :description="`Produce compelling ad copy in just a few clicks.`"
                            :buttonLink="`Try Digital Ad Copy`"
                        />
                        <CopyAi
                            :icon="`https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/64301ba0efaf3a3fc69701ba_Group%20316126051.svg`"
                            :title="`Commerce Copy`"
                            :description="`Increase sales with better product descriptions.`"
                            :buttonLink="`Try Commerce Copy`"
                        />
                        <CopyAi
                            :icon="`https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/64301b9f3433e52362dac227_Group%20316126052.svg`"
                            :title="`Sales Copy`"
                            :description="`Convert your audience with copy that sells.`"
                            :buttonLink="`Try Sales Copy`"
                        />
                        <CopyAi
                            :icon="`https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/64301ba041abf1e450fbbae9_Group%20316126050.svg`"
                            :title="`Social Media Content`"
                            :description="`Engage your audience with compelling social copy.`"
                            :buttonLink="`Try Social Media Content`"
                        />
                        <CopyAi
                            :icon="`https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/64301ba0a2fc9f86240b12c6_Group%20316126054.svg`"
                            :title="`Website Copy`"
                            :description="`Overhaul your website with more compelling copy.`"
                            :buttonLink="`Try Website Copy`"
                        />
                    </div>
                </div>
            </div>
            <div class="copy-help-footer">
                <div class="line-horizontal"></div>
                <div class="copy-help-footer-content">
                    <div class="content-item">
                        <h4 class="content-item-title">Write better content faster</h4>
                        <p class="content-item-text">Leverage AI to write your content and copy in minutes.</p>
                    </div>
                    <div class="content-item">
                        <h4 class="content-item-title">Say ‘goodbye’ to the blank page</h4>
                        <p class="content-item-text">
                            Generate high-converting copy for all your campaigns with just a few clicks.
                        </p>
                    </div>
                    <div class="content-item">
                        <h4 class="content-item-title">90+ tools and templates</h4>
                        <p class="content-item-text">
                            Streamline content production by leveraging 90+ tools and templates.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="works-container">
            <h1 class="works-title">How it works</h1>
            <div class="how-it-work">
                <ImageWork
                    :img="`https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/6297c0caffa00e75739ceb0b_step-1.svg`"
                />
                <DescriptionWork
                    :stepNumber="`1`"
                    :stepTitle="`Enter your copywriting project`"
                    :contentStep="`Choose from emails, social posts, long-form blog posts, and more!`"
                />
            </div>
            <img
                src="https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/628288c5cd3e84f1470a378c_line_right.svg"
                alt=""
                class="step-line"
            />
            <div class="how-it-work">
                <DescriptionWork
                    :stepNumber="`2`"
                    :stepTitle="`Give Copy.ai a bit of context`"
                    :contentStep="`Enter a few sentences about your brand and products.`"
                />
                <ImageWork
                    :img="`https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/6297c0cab1392750c5d86460_step-2.svg`"
                />
            </div>
            <img
                src="https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/628288c5cd3e84727f0a378f_line_left.svg"
                alt=""
                class="step-line"
            />
            <div class="how-it-work">
                <ImageWork
                    :img="`https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/629d8cb48867426d37876661_feature-thumbnail3-min%20(1).png`"
                />
                <DescriptionWork
                    :stepNumber="`3`"
                    :stepTitle="`Sift through the results`"
                    :contentStep="`Our AI content generator gives you multiple options for each campaign that you’re working on.`"
                />
            </div>
            <img
                src="https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/628288c5cd3e84d55f0a378e_line_middle-from-left.svg"
                alt=""
                class="step-line"
            />
            <DescriptionWork
                :center="`center`"
                :stepNumber="`4`"
                :stepTitle="`Edit, polish, and publish`"
                :contentStep="`Use Copy.ai’s editor to rewrite paragraphs and polish up sentences. Then, just copy and paste the work into your CMS for publishing.`"
            />
        </section>
    </div>
</template>

<style lang="scss" scoped>
@import './Home.scss';
</style>
