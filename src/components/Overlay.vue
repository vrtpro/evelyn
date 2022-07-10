<script>
export default {
    name: 'Overlay',
};
</script>

<template>
    <div class="overlay">
        <slot />
    </div>
</template>

<style lang="scss">
@import '../styles/variable';
.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: background 0.3s;
    background: rgba($black, 0.4);

    &-enter-from,
    &-leave-to {
        background: rgba($black, 0);
    }
}
</style>
