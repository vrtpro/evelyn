<script>
export default {
    name: 'LoadEffect',
    props: {
        stop: { type: Boolean, default: false },
    },
};
</script>

<template>
    <span class="load-effect" :class="{ stop }">
        <slot />
    </span>
</template>

<style lang="scss">
.load-effect {
    &::after {
        content: '';
        animation: 1.2s loading infinite;
    }
    &.stop::after {
        animation: none;
    }
}
@keyframes loading {
    25% {
        content: '';
    }
    50% {
        content: '.';
    }
    75% {
        content: '..';
    }
    100% {
        content: '...';
    }
}
</style>
