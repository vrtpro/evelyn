<script>
import Container from './Container.vue';
import Button from '../shared/Button.vue';
import socials from '../data/socials';

export default {
    name: 'Hero',
    components: {
        Container,
        Button,
    },
    data() {
        return {
            socials,
        };
    },
};
</script>

<template>
    <section class="hero">
        <Container>
            <div class="model">
                <img src="../assets/model.png" alt="Evelyn Model" />
            </div>
            <div class="info">
                <p>
                    Hai Halo!<br />
                    I'm Evelyn but you can call me Epel~
                </p>
                <h1>
                    I am aspire to become<br />
                    your best mood booster!
                </h1>
                <Button :href="socials.youtube">Join Epelables</Button>
            </div>
        </Container>
    </section>
</template>

<style lang="scss">
@import '../styles/mixin';
@import '../styles/variable';

.hero {
    overflow: hidden;
    padding: 60px 0;

    @include on-mobile {
        padding: 20px 0;
    }

    .container {
        display: grid;
        grid-template-columns: 1fr 1fr;

        @include on-mobile {
            grid-template-columns: 1fr;
            gap: 40px;
        }
    }

    .info {
        align-self: center;
        grid-column: 1 / 3;
        grid-row: 1 / 2;

        @include on-mobile {
            grid-column: initial;
            grid-row: 1 / 2;
        }

        h1 {
            font-size: 40px;
            line-height: 44px;
            margin-bottom: 28px;

            @include on-tablet {
                font-size: 32px;
                line-height: 36px;
            }
            @include on-mobile {
                br {
                    display: none;
                }
            }
        }
        p {
            font-weight: 600;
            font-size: 18px;
            margin-bottom: 14px;

            br {
                display: none;
            }

            @include on-tablet {
                font-size: 16px;
            }
            @include on-mobile {
                br {
                    display: initial;
                }
            }
        }
    }
    .model {
        justify-self: center;
        grid-column: 2 / 3;
        grid-row: 1 / 2;
        img {
            width: 100%;
        }
        @include on-tablet {
            display: flex;
            width: 260px;
            justify-content: center;
        }
        @include on-mobile {
            grid-column: initial;
            grid-row: 2 / 3;
            display: block;
            width: 100%;
            img {
                width: 100%;
            }
        }
    }
}
</style>
