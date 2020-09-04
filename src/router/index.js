import Vue from 'vue';
import Router from 'vue-router';
import Questionario from '../views/Questionario.vue';
import Dashboard from '../views/Dashboard.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/questionario-amnesico-fonseca',
            name: 'Questionario',
            component: Questionario,
        },
        {
            path: '/questionario-amnesico-fonseca/dashboard',
            name: 'Dashboard',
            component: Dashboard,
        },
    ],
});