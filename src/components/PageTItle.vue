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
@import '../styles/mixin';

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

    @include on-tablet {
        h1 {
            font-size: 36px;
        }
        p {
            font-size: 16px;
        }
    }
    @include on-mobile {
        h1 {
            font-size: 32px;
        }
        p {
            font-size: 14px;
        }
    }
}
</style>
