<script>
export default {
    name: 'Container',
};
</script>

<template>
    <div class="container">
        <slot />
    </div>
</template>

<style lang="scss">
@import '../styles/mixin';
.container {
    max-width: 1024px;
    margin: auto;
    padding: 0 40px;

    @include on-tablet {
        padding: 0 30px;
    }
    @include on-mobile {
        padding: 0 20px;
    }
}
</style>
