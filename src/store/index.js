import { createStore  } from 'vuex';
import movies  from './modules/movies';
import tvshows  from './modules/tvshows';
import peoples  from './modules/peoples';

const store = createStore({
    modules: {
        movies: movies,
        tvshows: tvshows,
        peoples: peoples,
    }
})

export default store;