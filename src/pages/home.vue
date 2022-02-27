<template>
    <div>
        <Search />
        <PopularMovies />
    </div>
</template>

<script>
    import PopularMovies from '../components/movies/popularMovies.vue';
    import Search from '../components/search.vue';


    export default {
        components: {
            PopularMovies,
            Search
        }
    }
</script>