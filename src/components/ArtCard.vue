<script lang="ts">
export default {
    name: 'ArtCard',
    props: {
        img: {
            type: String,
            required: true,
        },
        artist: {
            type: String,
            required: true,
        },
        artistUrl: {
            type: String,
            required: true,
        },
    },
};
</script>

<template>
    <div class="card">
        <img :src="img" alt="Art image" />
        <div class="desc">
            <a :href="artistUrl">{{ artist }}</a>
        </div>
    </div>
</template>

<style lang="scss">
@import '../styles/variable';

.card {
    max-width: 100%;
    aspect-ratio: 3/ 2;
    border-radius: 15px;
    position: relative;
    overflow: hidden;
    img {
        display: block;
        width: 100%;
    }
    .desc {
        padding: 8px 0 10px 0;
        text-align: center;
        font-weight: 700;
        font-size: 14px;
        text-decoration: underline;

        position: absolute;
        left: 0px;
        right: 0px;
        bottom: 0px;

        background: rgba(#d9d9d9, 0.5);
        backdrop-filter: blur(6px);
        a {
            color: $black;
            &:hover {
                color: $black;
            }
            &:active {
                color: $black;
            }
            &:visited {
                color: $black;
            }
        }
    }
}
</style>
