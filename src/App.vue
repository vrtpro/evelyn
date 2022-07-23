<template ref="false">
    <Loading v-if="show" />
    <router-view v-else v-slot="{ Component }">
        <Header />
        <transition name="fade" mode="out-in">
            <component :is="Component"></component>
        </transition>
        <Footer />
    </router-view>
</template>

<script lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Loading from './components/Loading.vue';

export default {
    name: 'App',
    components: {
        Header,
        Footer,
        Loading,
    },
    data() {
        return {
            show: true,
        };
    },
    mounted() {
        setTimeout(() => {
            this.show = !this.show;
        }, 2000);
    },
};
</script>

<style lang="scss">
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease-out;
}
</style>
