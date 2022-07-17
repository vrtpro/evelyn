<script>
import Container from '../components/Container.vue';
import ArtCard from '../components/ArtCard.vue';
import arts from '../data/fanarts.ts';

export default {
    name: 'FanArt',
    components: {
        ArtCard,
        Container,
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
            <div class="gallery" v-for="art in arts">
                <ArtCard :img="art.img" :artist="art.artist.username" :artistUrl="art.artist.url" />
            </div>
        </Container>
    </section>
</template>

<style lang="scss">
@import '../styles/variable';
@import '../styles/mixin';

.fanart {
    overflow: hidden;
    padding: 20px 0;

    @include on-mobile {
        padding: 20px 0;
    }

    .container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 20px;

        @include on-mobile {
            grid-template-columns: 1fr;
            gap: 20px;
        }
    }
}
</style>
