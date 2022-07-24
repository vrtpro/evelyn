<script lang="ts">
import Container from '../components/Container.vue';

export default {
    name: 'NotFound',
    components: { Container },
};
</script>

<template>
    <Container>
        <section class="error">
            <h1>:(</h1>
            <h2>404 Error - Oops!</h2>
            <p>
                Sadly, Epel can't find your request on this web page. Please check back the URL 😊.
                <br />
                Or maybe you want back to <router-link :to="{ name: 'Home' }">Home page</router-link>? Let me take you
                there~
            </p>
        </section>
    </Container>
</template>

<style lang="scss" scoped>
@import '../styles/variable';
@import '../styles/anchor';

.error {
    font-family: $lexend;
    text-align: center;
    padding-bottom: 18rem;
    margin-top: 7rem;
    h1 {
        font-size: 50px;
    }
    p {
        font-family: $fira-sans;
        font-size: 18px;
        font-weight: 500;
    }
}
</style>
