<template>
    <div>
        <h2> Popular Movies </h2>
        <MoviesList :items="items.results" :search=false />
    </div>
</template>

<script>
import MoviesList from "../components/movies/moviesList.vue";

export default {
    components: {
        MoviesList
    },
    data() {
        return  {
            
        }
    },
    computed: {
        items: function() {
           return this.$store.getters['movies/getItems']
        }
    },
    mounted: function () {
        console.log('item mounted');
        this.$store.dispatch('movies/getItems')
    },
}
</script>
