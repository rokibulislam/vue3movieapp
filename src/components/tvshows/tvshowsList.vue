<template>
<div>
    <div class="container box-container">
        <div class="box" v-for="tvshow in items" :key="tvshow.id">
            <router-link :to="{ name: 'tvDetails', params: { id: tvshow.id }}">
            <img :src="'https://www.themoviedb.org/t/p/w440_and_h660_face/'+ tvshow.poster_path"/>
            </router-link>
            <div class="box-content">
                <router-link :to="{ name: 'tvDetails', params: { id: tvshow.id }}">
                    {{tvshow.name}}
                </router-link>
            </div>
        </div>
    </div> 
    <Paginator :item="items"  :page_size="page_size" :currentpage="page" @page-changed="load"/>
</div>
</template>

<script>
import Paginator from '../paginator.vue'

export default {
    props: ['items','search'],
    components: {
        Paginator
    },
    data() {
        return {

        }
    },
    computed: {
        page_size: function() {
           return this.$store.getters['tvshows/getItems'].total_pages
        },
        page: function() {
           return this.$store.getters['tvshows/getItems'].page
        }
    },
    methods: {
        load: function(page = 1) {
           if( this.search == false ) {
            this.$store.dispatch('tvshows/getItems', {page: page})
           } else {
            let params = { ...this.$route.query, page: page }
            this.$store.dispatch('tvshows/getSearch', params)
           }      
      }
    }
}
</script>