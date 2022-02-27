import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home.vue';
import Movies from '../pages/movies.vue';
import MovieDetails from '../pages/movie.vue';

const router = createRouter({
    history:  createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/movies', name: 'movies', component: Movies },
        { path: '/movie/:id', name: 'moviedetails', component: MovieDetails },
    ]
});

export default router