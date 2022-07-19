<script>
export default {
    name: 'Button',
    props: {
        dest: {
            type: String,
        },
    },
};
</script>
<template>
    <div v-if="dest">
        <a class="button" :href="dest">
            <slot />
        </a>
    </div>
    <a class="button button-void" v-else :href="void 0">
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
    transition: 0.2s ease-in-out;
    // box-shadow: 5px 10px $black;
    &:hover {
        transform: translateY(5px);
    }
    &:active {
        box-shadow: 0 -5px 5px -5px $black, -5px 0 5px -5px $black;
    }

    @include on-tablet {
        font-size: 14px;
    }
    &-void {
        cursor: pointer;
    }
}
</style>
