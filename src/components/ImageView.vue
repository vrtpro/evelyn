<script lang="ts">
import Icon from '../shared/Icon.vue';

export default {
    name: 'ImageView',
    props: ['arts', 'isView', 'img'],
    components: { Icon },
    data() {
        return {
            view: this.isView,
        };
    },
    methods: {
        update() {
            this.view = !this.view;
            this.$emit('boolUpdate', this.view);
            document.body.removeAttribute('style');
        },
    },
};
</script>

<template>
    <div class="root" @click.self="update()">
        <button class="exit" @click="update()">
            <Icon name="bi:x-lg" />
        </button>
        <figure class="img">
            <img :src="img" alt="Image" />
        </figure>
    </div>
</template>

<style lang="scss">
@import '../styles/variable';

.root {
    position: fixed;
    background: rgba($white, 0.4);
    backdrop-filter: blur(4px);
    height: 100%;
    width: 100%;
    max-height: 100%;
    max-width: 100%;
    top: 0;
    left: 0;
    z-index: 10;
    overflow: hidden;
    .img {
        display: flex;
        height: 100%;
        img {
            margin: auto;
            max-width: 100%;
            max-height: 100%;
        }
    }
    button {
        cursor: pointer;
        position: absolute;
        &.exit {
            right: 0;
            margin: 10px 10px 0 0;
        }
    }
}
</style>
