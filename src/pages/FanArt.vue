<script>
import Container from '../components/Container.vue';
import PageTitle from '../components/PageTitle.vue';
import ArtCard from '../components/ArtCard.vue';
import ArtList from '../components/ArtList.vue';
import ImageView from '../components/ImageView.vue';
import arts from '../data/fanarts.ts';
import ImageView1 from '../components/ImageView.vue';

export default {
    name: 'FanArt',
    components: {
        Container,
        PageTitle,
        ArtCard,
        ArtList,
        ImageView,
        ImageView1,
    },
    data() {
        return {
            arts,
            view: false,
        };
    },
    methods: {
        toggle() {
            this.view = !this.view;
        },
        boolUpdate(value) {
            this.view = value;
        },
    },
};
</script>

<template>
    <section class="fanart">
        <div class="viewer" v-if="view">
            <ImageView :arts="arts" :isView="view" @boolUpdate="boolUpdate()" />
        </div>
        <Container>
            <PageTitle>
                <template #default>Fan art</template>
                <template #sub
                    >Curated Fan-made art from
                    <a href="https://twitter.com/hashtag/PienEpelPaint" target="_blank">#PienEpelPaint</a> hashtag at
                    Twitter</template
                >
            </PageTitle>
            <ArtList>
                <li v-for="art in arts">
                    <ArtCard
                        @click="toggle()"
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
</style>
