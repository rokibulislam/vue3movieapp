import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home.vue';
import Movies from '../pages/movies.vue';
import MovieDetails from '../pages/movie.vue';
import TvShows from '../pages/tvShows.vue';
import TvShowDetails from '../pages/tvShow.vue';
import Peoples from '../pages/peoples.vue';
import PeopleDetails from '../pages/people.vue';

const router = createRouter({
    history:  createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/movies', name: 'movies', component: Movies },
        { path: '/movie/:id', name: 'moviedetails', component: MovieDetails },
        { path: '/tv/', name: 'tvShows', component: TvShows },
        { path: '/tv/:id', name: 'tvDetails', component: TvShowDetails },
        { path: '/peoples/', name: 'peoples', component: Peoples },
        { path: '/people/:id', name: 'peopledetails', component: PeopleDetails }
    ]
});

export default router