<template>
<div>
    <div class="container box-container">
        <div class="box" v-for="movie in items" :key="movie.id">
            <router-link :to="{ name: 'moviedetails', params: { id: movie.id }}">
                <img :src="'https://www.themoviedb.org/t/p/w470_and_h470_face/'+movie.poster_path"/>
            </router-link>
            <div class="box-content">
                <router-link :to="{ name: 'moviedetails', params: { id: movie.id }}">
                    {{movie.title}}
                </router-link>
            </div>
        </div>
    </div>
        <Paginator :items="items" :page_size="page_size" :currentpage="page" @pageChanged="load"/>
</div>
</template>

<script>

import Paginator from '../paginator.vue'

export default {
    props: ['items', 'search'],
    components: {
        Paginator
    },
    data() {
        return {

        }
    },
    computed: {
        page_size: function() {
           return this.$store.getters['movies/getItems'].total_pages
        },
        page: function() {
           return this.$store.getters['movies/getItems'].page
        }
    },
    methods: {
        load: function(page = 1 ) {
           if( this.search == false ) {
            this.$store.dispatch('movies/getItems', {page: page})
           } else {
               let params = { ...this.$route.query, page: page }
               this.$store.dispatch('movies/getSearch', params)
           }
        },
    }
}
</script>