<script lang="ts">
import Icon from '../shared/Icon.vue';

export default {
    name: 'ImageView',
    props: ['arts', 'isView'],
    components: { Icon },
    data() {
        return {
            view: this.isView,
        };
    },
    methods: {
        update() {
            this.View = !this.View;
            this.$emit('boolUpdate', this.View);
        },
    },
};
</script>

<template>
    <div class="root" @click.self="update()">
        <button class="exit" @click="update()">
            <Icon name="bi:x-lg" />
        </button>
        <div class="img">
            <img :src="arts[0].img" alt="Image" />
        </div>
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
    .img {
        display: flex;
        height: 680px;
        align-items: center;
        justify-content: center;
    }
    img {
        display: block;
        height: 450px;
    }
    button {
        cursor: pointer;
        display: block;
        &.exit {
            float: right;
            margin: 10px 10px 0 0;
        }
    }
}
</style>
