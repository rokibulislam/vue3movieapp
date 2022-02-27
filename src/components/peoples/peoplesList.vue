<template>
<div>
    <div class="container box-container">
        <div class="box" v-for="people in items" :key="people.id">
            
            <router-link :to="{ name: 'peopledetails', params: { id: people.id }}">
                <img :src="'https://www.themoviedb.org/t/p/w470_and_h470_face/'+ people.profile_path"/>
            </router-link>

            <div class="box-content">
                <router-link :to="{ name: 'peopledetails', params: { id: people.id }}">
                    {{people.name}}
                </router-link>
            </div>
        </div>
    </div> 
    <Paginator :item="items" :page_size="page_size" :currentpage="page" @page-changed="load($event)"/>
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
           return this.$store.getters['peoples/getItems'].total_pages
        },
        page: function() {
           return this.$store.getters['peoples/getItems'].page
        }
    },
    methods: {
        load: function(page = 1) {
            if( this.search == false ) {
                this.$store.dispatch('peoples/getItems', {page: page})
            } else {
                let params = { ...this.$route.query, page: page }
                this.$store.dispatch('peoples/getSearch', params)
            } 
        }
    }
}
</script>