<script>
import Container from '../components/Container.vue';
import PageTitle from '../components/PageTitle.vue';
import ArtCard from '../components/ArtCard.vue';
import ArtList from '../components/ArtList.vue';
import ImageView from '../components/ImageView.vue';
import arts from '../data/fanarts.ts';

export default {
    name: 'FanArt',
    components: {
        Container,
        PageTitle,
        ArtCard,
        ArtList,
        ImageView,
    },
    data() {
        return {
            arts,
            view: false,
            img: '',
        };
    },
    methods: {
        toggle(img) {
            this.view = !this.view;
            this.img = img;
            document.body.setAttribute('style', 'overflow: hidden;');
        },
        boolUpdate(value) {
            this.view = value;
        },
    },
};
</script>

<template>
    <section class="fanart">
        <transition name="fade" mode="out-in">
            <div class="viewer" v-if="view">
                <ImageView :arts="arts" :isView="view" :img="img" @boolUpdate="boolUpdate()" />
            </div>
        </transition>
        <Container>
            <PageTitle>
                <template #default>Fan art</template>
                <template #sub
                    >🖼️ Curated Fan-made art from
                    <a href="https://twitter.com/hashtag/PienEpelPaint" target="_blank">#PienEpelPaint</a> hashtag on 🐦
                    Twitter</template
                >
            </PageTitle>
            <ArtList>
                <li v-for="art in arts">
                    <ArtCard
                        @click="toggle(art.img)"
                        :img="art.img"
                        :artist="art.artist.username"
                        :artistUrl="art.artist.url"
                    />
                </li>
            </ArtList>
        </Container>
    </section>
</template>

<style lang="scss">
.container {
    margin-bottom: 20px;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease-out;
}
</style>
