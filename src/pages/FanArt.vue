<script>
import Container from '../components/Container.vue';
import ArtCard from '../components/ArtCard.vue';
import ArtList from '../components/ArtList.vue';
import arts from '../data/fanarts.ts';
import ArtList from '../components/ArtList.vue';

export default {
    name: 'FanArt',
    components: {
        ArtCard,
        Container,
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
            <ArtList>
                <li v-for="art in arts">
                    <ArtCard :img="art.img" :artist="art.artist.username" :artistUrl="art.artist.url" />
                </li>
            </ArtList>
        </Container>
    </section>
</template>

<style lang="scss"></style>
