<script lang="ts">
import Container from '../components/Container.vue';
import PageTitle from '../components/PageTitle.vue';
import Button from '../shared/Button.vue';
import socials from '../data/socials';
import data from '../data/general';

export default {
    name: 'About',
    components: { Container, PageTitle, Button },
    data() {
        return {
            expanded: false,
            data,
            socials,
        };
    },
    methods: {
        expand() {
            this.expanded = !this.expanded;
        },
    },
};
</script>

<template>
    <Container class="about-container">
        <PageTitle class="about-title">
            <template #default>About</template>
        </PageTitle>
        <div class="model">
            <img src="../assets/model-trp.webp" alt="Evelyn Model" />
        </div>
        <div class="main-content">
            <div id="personality">
                <h3 class="subtitle">💙 Personality</h3>
                <p class="content">
                    Evelyn has a warm and friendly personality towards her viewers. She has a "good girl" persona. She's
                    sweet, caring, full of affection, and tends to avoid sensitive issues, as well as strong or bad
                    words and profanities. She is described as a humble, genuine and hardworking girl since she
                    interacts with her viewers regularly by trying to reply to most all of their comments on her YouTube
                    and social media every day. She is willing to help people and wants to grow together with her
                    community.
                </p>
                <p class="content">
                    Her channel's contents ranges from let's plays, song covers, ASMR, random talks and contents, story
                    readings and problem consultations. Her contents were mostly VODs (Video On Demand) before she
                    started following the live streaming trend in late August 2019. She currently focuses on live
                    streams for nearly all of her contents.
                </p>
            </div>
            <div id="appearance">
                <h3 class="subtitle mt">💅 Appearance</h3>
                <p class="content">
                    Evelyn's first appearance is a young woman with a relatively slim body, oval face, red eyes, and
                    long sea blue hair with an ahoge. Her dominant color scheme is blue, pink and white.
                </p>
                <p class="content">
                    She got a new costume on her <a href="https://youtu.be/sQk3WJPcheM">1st birthday</a>. Her v2 outfit
                    is a white and pink, sleeveless button-up dress resembling a maid outfit. Her hair is pink at the
                    tips, and her ahoge is slightly shorter in length.
                </p>
                <p class="content">
                    She got another new costume at
                    <a href="https://youtu.be/8v0d54N4EW4&t=4075s">2021 valentine's day</a>. This v3 outfit is more
                    casual because it's supposed for dating (with you). She got several new expressions like sad,
                    crying, angry, terrified, <i>gangimari</i>, and yandere eyes. She also has a cat girl mode that
                    makes her have nekomimi (cat ears) and a tail with ribbon.
                </p>
            </div>
        </div>
        <div v-if="expanded" class="if-expanded">
            <div id="history">
                <h3 class="subtitle mt">📜 History</h3>
                <h4 class="sub mt">Background</h4>
                <p class="content">
                    On 20 September 2021, she and fellow VTubers in her team (Lily Ifeta, Chloe Pawapua and Reynard
                    Blanc) announced that their management team would become an independent agency named Re:Memories.
                </p>
                <h3 class="sub mt">2022</h3>
                <p class="content">
                    On 30 April, Re:memories's Twitter announced that Evelyn would be separating from Re:memories agency
                    and becoming an independent VTuber on the same day. Before that, she also held a stream to announce
                    it.
                </p>
            </div>
            <div id="personal">
                <h3 class="subtitle mt">👤 Personal details</h3>
                <ul class="content">
                    <li class="list">
                        Name: {{ data.name.origin }}
                        <ul>
                            <li class="list">Alias: {{ data.name.alias }}</li>
                        </ul>
                    </li>
                    <li class="list">Debut date: {{ data.debut }}</li>
                    <li class="list">Birthday: {{ data.birthday }}</li>
                    <li class="list">Height: {{ data.height.origin }} ({{ data.height.withAhoge }} with ahoge)</li>
                    <li class="list">Weight: {{ data.weight }}</li>
                    <li class="list">Blood type: {{ data.blood }}</li>
                    <li class="list">Zodiac: {{ data.zodiac }}</li>
                    <li class="list">
                        Affilation
                        <ul>
                            <li class="list">{{ data.affilation.current }}</li>
                            <li class="list">{{ data.affilation.formerly }} (formerly)</li>
                        </ul>
                    </li>
                    <li class="list">
                        Languages
                        <ul>
                            <li class="list" v-for="lang in data.languages">{{ lang }}</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div id="socials">
                <h3 class="subtitle mt">#️⃣ Socials</h3>
                <p class="content">Evelyn is discoverable at social media. Make sure to follow her social accounts!</p>
                <ul class="content">
                    <li class="list" v-for="social in socials">
                        {{ social.name }}: <a :href="social.url" target="_blank">@{{ social.username }}</a>
                    </li>
                </ul>
            </div>
            <Button @click="expand">See less information 👆</Button>
        </div>
        <div v-else class="expand-btn">
            <Button @click="expand">Expand more information 👇</Button>
        </div>
    </Container>
</template>

<style lang="scss">
@import '../styles/variable';
@import '../styles/anchor';
@import '../styles/mixin';

.about-container {
    display: grid;
    grid-template-columns: 1fr 1fr;

    @include on-mobile {
        grid-template-columns: 1fr;
        // gap: 20px;
    }
    .about-title {
        grid-column: 1 / 1;
        grid-row: 1 / 2;
    }
    .main-content {
        // align-self: center;
        grid-column: 1 / 2;
        grid-row: 1 / 3;
        margin-top: 50px;
        @include on-mobile {
            grid-column: 1 / 1;
            grid-row: 1 / 3;
        }
    }
    .if-expanded {
        grid-column: 1 / 2;
        grid-row: 3 / 3;
    }
    .expand-btn {
        grid-column: 1 / 2;
        grid-row: 3 / 3;
    }
    .mt {
        margin-top: 15px;
    }
    .subtitle {
        font-weight: 600;
        font-size: 25px;
    }
    .sub {
        font-weight: 500;
        font-size: 22px;
    }
    .content {
        font-family: $fira-sans;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        margin-top: 10px;
        li {
            &.list {
                font-family: $lexend;
                list-style: disc;
                margin-left: 18px;
                cursor: default;
            }
        }
    }
    .button {
        margin-top: 10px;
        margin-bottom: 20px;
    }
    .model {
        justify-self: center;
        grid-column: 2 / 2;
        grid-row: 1 / 2;
        img {
            height: 720px;
            width: 100%;
        }
        @include on-tablet {
            display: flex;
            width: 260px;
            justify-content: center;
        }
        @include on-mobile {
            display: none;
        }
    }
}
</style>
