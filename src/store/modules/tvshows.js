import axios from 'axios'
import { serialize } from '../../utils/helpers'

const tvshows = {
    namespaced: true,
    state () {
        return {
            items: [],
            searchItems: [],
            item: {}
        }
    },
    getters: {
        getItems(state) {
            return state.items
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
            let result  = await axios.get(`https://api.themoviedb.org/3/tv/popular?${q}`)
            state.items = result.data;
        },

        async getSearch(state, payload) {
            let q = serialize(payload);
            let result = await axios.get(`https://api.themoviedb.org/3/search/tv?${q}`);
            // state.searchItems = result.data.results;
            state.items = result.data;
        },

        async getItem(state, payload) {
            let q = serialize({  "page": 1 });
            let id = payload.id;
            let result  = await axios.get(`https://api.themoviedb.org/3/tv/${id}?${q}`)
            state.item = result.data
        }
    },
    actions: {
        getItems({commit},payload) {
            commit('getItems', payload);
        },

        getSearch({ commit }, payload) {
            commit('getSearch', payload);
        },

        getItem({ commit }, payload) {
            commit('getItem', payload);
        }
    }
};

export default tvshows