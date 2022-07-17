<script lang="ts">
export default {
    name: 'ArtCard',
};
</script>

<template>
    <div class="card">
        <img class="card-img" src="https://pbs.twimg.com/media/FRmAB6yagAI0br0.jpg" alt="Art image" />
        <div class="desc">
            <p class="artist">@elainecelestia</p>
        </div>
    </div>
</template>

<style lang="scss">
.card {
    background-color: #000;
    width: 374px;
    height: 216px;
    border-radius: 15px;
    position: absolute;
    img {
        display: block;
        width: auto;
        height: 216px;
    }
    .desc {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        padding: 8px 16px 10px;
        gap: 10px;
        font-family: 'Lexend', sans-serif;

        position: absolute;
        height: 20px;
        left: 0px;
        right: 0px;
        bottom: 0px;

        background: rgba(217, 217, 217, 0.5);
        backdrop-filter: blur(6px);
        border-radius: 15px 0 15px 0;
    }
}
</style>
