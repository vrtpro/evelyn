<script>
import { Icon } from '@iconify/vue';

export default {
    name: 'Icon',
    props: {
        name: String,
    },
    components: {
        Iconify: Icon,
    },
};
</script>

<template>
    <Iconify :icon="name" width="28" height="28" />
</template>
