import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Otherpage from '../components/Otherpage.vue'

export default new VueRouter( {
    routes: [
        {
            path: '',
            component: Home
        },
        {
            path: '/otherpage',
            component: Otherpage
        }
    ],
    mode: 'history'
})