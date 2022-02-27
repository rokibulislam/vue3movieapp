import axios from 'axios'
import { serialize } from '../../utils/helpers'

const movies = {
    namespaced: true,
    state () {
        return {
            items: [],
            populars: [],
            searchItems: [],
            item: {}
        }
    },
    getters: {
        
        getItems( state ){
            return state.items
        },

        getPopulars( state ){
            return state.populars
        },

        getSearch( state ){
            // return state.searchItems
            return state.items
        },

        getItem(state) {
            return state.item
        }
    },
    mutations: {
        
        async getItems(state,payload) {
            let q = serialize(payload);
            let result  = await axios.get(`https://api.themoviedb.org/3/movie/popular?${q}`)
            state.items = result.data;
        },
        
        async getPopulars(state) {
            let q = serialize();
            let result  = await axios.get(`https://api.themoviedb.org/3/movie/popular?${q}`)
            state.populars = result.data.results;
        },  

        async getSearch(state, payload) {
            let q = serialize( payload );
            let result = await axios.get(`https://api.themoviedb.org/3/search/movie?${q}`);
            // state.searchItems = result.data.results;
            state.items = result.data;
        },

        async getItem(state, payload) {
            let id = payload.id;
            let q = serialize();
            let result  = await axios.get(`https://api.themoviedb.org/3/movie/${id}?${q}`)
            state.item = result.data
        }
    },
    actions: {
        
        getItems({ commit }, payload) {
            commit('getItems', payload);
        },

        getPopulars({ commit }) {
            commit('getPopulars');
        },

        getSearch({ commit }, payload) {
            commit('getSearch', payload);
        },

        getItem({ commit }, payload) {
            commit('getItem', payload);
        }
    }
};

export default movies