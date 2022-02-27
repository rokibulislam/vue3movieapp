<template>
    <div>
        <h3> Popular Movies </h3>
        <div class="container box-container">
            <div class="box" v-for="movie in populars" :key="movie.id">
                <router-link :to="{ name: 'moviedetails', params: { id: movie.id }}">
                    <img :src="'https://www.themoviedb.org/t/p/w470_and_h470_face/'+movie.poster_path"/>
                </router-link> 
                <div class="box-content">
                    <router-link :to="{ name: 'moviedetails', params: { id: movie.id }}"> {{movie.title}} </router-link>
                </div> 
            </div>
        </div> 
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    computed: {
        populars: function  () {
            return this.$store.getters['movies/getPopulars'];
        }
    },

    mounted() {
        this.$store.dispatch('movies/getPopulars');
    }
}
</script>
