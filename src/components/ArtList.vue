<script>
export default {
    name: 'ArtList',
};
</script>
<template>
    <ul class="art-list">
        <slot />
    </ul>
</template>

<style lang="scss">
@import '../styles/variable';
@import '../styles/mixin';

.art-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    @include on-tablet {
        grid-template-columns: 1fr 1fr;
    }
    @include on-mobile {
        grid-template-columns: 1fr;
    }
}
</style>
