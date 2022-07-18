<script>
export default {
    name: 'Button',
};
</script>
<template>
    <a class="button">
        <slot />
    </a>
</template>
<style lang="scss">
@import '../styles/mixin';
@import '../styles/variable';
.button {
    padding: 10px 12px;
    display: inline-block;
    font-weight: 700;
    font-size: 16px;
    border-radius: 10;
    background: $cyan;
    color: $black;

    @include on-tablet {
        font-size: 14px;
    }
}
</style>
