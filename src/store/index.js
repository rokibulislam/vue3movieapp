import { createStore  } from 'vuex';
import movies  from './modules/movies';


const store = createStore({
    modules: {
        movies: movies,
        tvshows: tvshows,
        peoples: peoples,
    }
})

export default store;