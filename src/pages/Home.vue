<template>
    <h1>Hello, {{ name }}</h1>
    <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis amet consequatur ut odio veniam laudantium,
        reprehenderit laboriosam perspiciatis a! Temporibus eum porro labore dolorum expedita optio, odit ducimus facere
        fugit! Voluptas tempora sint error. Quo perspiciatis tempora dolorum sit animi, vitae, recusandae odit ea et
        nesciunt, odio quae vel iste?
    </p>
    <p>
        Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of
        standard HTML, CSS and JavaScript, and provides a declarative and component-based programming model that helps
        you efficiently develop user interfaces, be it simple or complex.
    </p>
    <div>
        <h2 class="fira-sans">Font Family Test</h2>
        <h4 class="lexend">Lexend</h4>
        <p class="lexend">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas maiores nulla optio possimus minima aliquam
            repudiandae illo doloribus explicabo totam reprehenderit molestiae nesciunt vero tempore, magnam cumque odio
            tenetur vel.
        </p>
        <h4 class="poppins">Poppins</h4>
        <p class="poppins">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate culpa accusantium, fugiat consectetur
            tempore consequatur. Voluptate eveniet est a voluptatem. Pariatur eaque quas numquam ipsam maxime ducimus
            doloremque, beatae iste.
        </p>
        <h4 class="fira-sans">Fira Sans</h4>
        <p class="fira-sans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus doloribus dolore commodi qui,
            facilis eum architecto veritatis, laborum iste deleniti odio consequuntur reiciendis quidem incidunt fuga
            quis voluptatem? Corrupti, deleniti.
        </p>
    </div>
    <p class="fira-sans wip">
        Work in progress project. See
        <a href="https://github.com/gifaldyazkaa/evelyn/projects/1" target="_blank">Project Roadmap Tracker</a> or
        <a href="https://github.com/gifaldyazkaa/evelyn/projects/2" target="_blank">UI Design Roadmap</a> for more
        progress details about this project.
    </p>
    <p class="fira-sans wip mb-3">
        This website is non-commercial and MIT Licensed. Website is created for tribute-purpose.
    </p>
</template>

<script lang="ts">
export default {
    name: 'Home',
    data() {
        return {
            name: 'Epel 🍎',
        };
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
