import HomePage from '@/pages/home/HomePage.vue'
import SearchPage from '@/pages/search/SearchPage.vue'
import { breadcrumbItem } from './constants'

export default [
    { 
        name:'index', path: '/', component: HomePage, meta:{breadcrumb:[breadcrumbItem('Home', 'fa-home', '')] } 
    },
    { 
        name:'pesquisar', path: '/pesquisar', component: SearchPage, meta:{breadcrumb:[ breadcrumbItem('Home', 'fa-home', { path: '/' }), breadcrumbItem('Pesquisar', 'fa-search', '')] } 
    }
]