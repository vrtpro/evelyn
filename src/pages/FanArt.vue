<script>
import Container from '../components/Container.vue';
import PageTitle from '../components/PageTItle.vue';
import ArtCard from '../components/ArtCard.vue';
import ArtList from '../components/ArtList.vue';
import arts from '../data/fanarts.ts';

export default {
    name: 'FanArt',
    components: {
        Container,
        PageTitle,
        ArtCard,
        ArtList,
    },
    data() {
        return {
            arts,
        };
    },
};
</script>

<template>
    <section class="fanart">
        <Container>
            <PageTitle>
                <template #default>Fan art</template>
                <template #sub>Curated Fan-made art from <u>#PienEpelPaint</u> hashtag at Twitter</template>
            </PageTitle>
            <ArtList>
                <li v-for="art in arts">
                    <ArtCard :img="art.img" :artist="art.artist.username" :artistUrl="art.artist.url" />
                </li>
            </ArtList>
        </Container>
    </section>
</template>

<style lang="scss"></style>
