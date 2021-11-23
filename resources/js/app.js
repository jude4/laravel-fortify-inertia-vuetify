
require('./bootstrap');

window.Vue = require('vue').default;

import Vue from "vue";
import Vuetify from "vuetify";
import { createInertiaApp, Link, Head } from "@inertiajs/inertia-vue";

Vue.use(Vuetify);
Vue.component('inertia-link', Link)
Vue.component("inertia-head", Head);
Vue.mixin({ methods: { route } })

import { InertiaProgress } from "@inertiajs/progress";


InertiaProgress.init({
    color: "red",

    includeCSS: true,

    showSpinner: true,
});

createInertiaApp({
    title: (title) => `${title} - My App`,
    resolve: (name) => require(`./Pages/${name}`),
    setup({ el, App, props }) {
        new Vue({
            vuetify: new Vuetify({
                theme: { dark: true },
            }),
            render: (h) => h(App, props),
        }).$mount(el);
    },
});