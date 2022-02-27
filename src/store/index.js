import { createStore  } from 'vuex';
import movies  from './modules/movies';
import tvshows  from './modules/tvshows';

const store = createStore({
    modules: {
        movies: movies,
        tvshows: tvshows,
    }
})

export default store;