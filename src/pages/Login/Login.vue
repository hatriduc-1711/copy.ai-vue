<script>
import { useRouter } from 'vue-router';

export default {
    name: 'Login',
    setup() {
        const router = useRouter();
        const handleLogin = () => {
            router.push({
                name: 'home',
            });
        };

        return { handleLogin };
    },
};
</script>

<template>
    <div class="wrapper">
        <div class="name-page">
            <h2 class="title-page">
                Log in or <br />
                create an account
            </h2>
            <p class="text">Quickly get started by signing in using your existing accounts.</p>
        </div>
        <div class="content">
            <p class="text">
                By proceeding, you are agreeing to Copy.ai's
                <router-link :to="{ name: 'home' }">Terms of Service</router-link> and
                <router-link :to="{ name: 'home' }">Privacy Notice</router-link>
            </p>
            <div class="button-login">
                <button @click="handleLogin" class="button">
                    <div class="icon">
                        <svg
                            viewBox="0 0 28 29"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4 w-4 h-7 w-7 !mr-8 -ml-8"
                        >
                            <path
                                d="M14 0.779297C21.4558 0.779297 27.5 6.82345 27.5 14.2793C27.5 21.7351 21.4558 27.7793 14 27.7793C6.54416 27.7793 0.5 21.7351 0.5 14.2793C0.5 6.82345 6.54416 0.779297 14 0.779297Z"
                                fill="white"
                                stroke="#DCD8E8"
                            ></path>
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M21.68 14.4606C21.68 13.8933 21.6291 13.3479 21.5345 12.8242H14V15.9187H18.3054C18.12 16.9187 17.5563 17.766 16.7091 18.3333V20.3405H19.2945C20.8072 18.9478 21.68 16.8969 21.68 14.4606Z"
                                fill="#4285F4"
                            ></path>
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M13.9996 22.2788C16.1596 22.2788 17.9705 21.5624 19.2942 20.3406L16.7087 18.3334C15.9924 18.8134 15.076 19.097 13.9996 19.097C11.916 19.097 10.1524 17.6897 9.5233 15.7988H6.85059V17.8715C8.16694 20.4861 10.8724 22.2788 13.9996 22.2788Z"
                                fill="#34A853"
                            ></path>
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M9.52362 15.8002C9.36362 15.3202 9.27271 14.8075 9.27271 14.2802C9.27271 13.7529 9.36362 13.2402 9.52362 12.7602V10.6875H6.85091C6.30909 11.7675 6 12.9893 6 14.2802C6 15.5711 6.30909 16.7929 6.85091 17.8729L9.52362 15.8002Z"
                                fill="#FBBC05"
                            ></path>
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M13.9996 9.4611C15.1742 9.4611 16.2287 9.86474 17.0578 10.6575L19.3523 8.36292C17.9669 7.07202 16.156 6.2793 13.9996 6.2793C10.8724 6.2793 8.16694 8.07202 6.85059 10.6865L9.5233 12.7593C10.1524 10.8684 11.916 9.4611 13.9996 9.4611Z"
                                fill="#EA4335"
                            ></path>
                        </svg>
                    </div>
                    <span>Continue with Google</span>
                </button>
                <button @click="handleLogin" class="button facebook">
                    <div class="icon">
                        <svg
                            viewBox="0 0 28 29"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4 w-4 h-7 w-7 !mr-4 -ml-4"
                        >
                            <path
                                d="M0 14.2793C0 22.0113 6.26801 28.2793 14 28.2793C21.732 28.2793 28 22.0113 28 14.2793C28 6.54731 21.732 0.279297 14 0.279297C6.26801 0.279297 0 6.54731 0 14.2793Z"
                                fill="white"
                            ></path>
                            <path
                                d="M22 14.2793C22 9.8793 18.4 6.2793 14 6.2793C9.6 6.2793 6 9.8793 6 14.2793C6 18.2793 8.9 21.5793 12.7 22.1793V16.5793H10.7V14.2793H12.7V12.4793C12.7 10.4793 13.9 9.3793 15.7 9.3793C16.6 9.3793 17.5 9.5793 17.5 9.5793V11.5793H16.5C15.5 11.5793 15.2 12.1793 15.2 12.7793V14.2793H17.4L17 16.5793H15.1V22.2793C19.1 21.6793 22 18.2793 22 14.2793Z"
                                fill="#1877F2"
                            ></path>
                        </svg>
                    </div>
                    <span>Continue with Facebook</span>
                </button>
            </div>
            <div class="or">or</div>
            <div class="login-email">
                <label for="input">Enter your email</label>
                <input id="input" type="text" placeholder="name@example.com" :spellCheck="false" />
                <p>We’ll email you a magic code for a password-free registration.</p>
                <button @click="handleLogin">Continue</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './Login.scss';
</style>
