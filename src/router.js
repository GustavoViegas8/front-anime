import Vue from 'vue'
import VueRouter from 'vue-router'

import login from './components/login.vue'
import register from './components/register.vue'
import main from './components/main.vue'
import pesquisa from './components/pesquisa.vue'
import grafico from './components/grafico.main.vue'

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: register },
        { path: '/login', component: login },
        { path: '/main', component: main },
        { path: '/pesq', component: pesquisa },
        { path: '/graf', component: grafico }

    ]
})