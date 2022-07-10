<template>
    <Container></Container>
</template>

<script lang="ts">
import Container from '../components/Container.vue';
export default {
    name: 'Home',
    components: {
        Container,
    },
};
</script>

<style lang="scss">
@import '../styles/variable';

h1 {
    font-family: $lexend;
}
p {
    font-family: $poppins;
}

.lexend {
    font-family: $lexend;
}
.poppins {
    font-family: $poppins;
}
.fira-sans {
    font-family: $fira_sans;
}
.wip {
    font-size: 12px;
}
.mb-3 {
    margin-bottom: 5px;
}
</style>
