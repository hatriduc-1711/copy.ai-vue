<script>
import Navbar from './components/Navbar/Navbar.vue';
import Header from './components/Header/Header.vue';
import Chat from './components/Chat/Chat.vue';
import Footer from './components/Footer/Footer.vue';

export default {
    name: 'Layout',
    components: { Navbar, Header, Chat, Footer },
};
</script>

<template>
    <Chat />
    <Header />
    <Navbar />
    <div class="container">
        <router-view></router-view>
    </div>
    <Footer />
</template>

<style scoped>
.container {
    padding: 0 30px;
}
</style>
