<script>
export default {
    name: 'PageTitle',
};
</script>

<template>
    <div class="page-title">
        <h1><slot /></h1>

        <p><slot name="sub" /></p>
    </div>
</template>

<style lang="scss">
@import '../styles/variable';
.page-title {
    color: $black;
    margin-bottom: 20px;

    h1 {
        font-size: 40px;
    }
    p {
        font-family: $fira-sans;
        font-size: 18px;
    }
}
</style>
