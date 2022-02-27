<template>

<div class="item-single">
    <div class="item-img">
        <img :src="'https://www.themoviedb.org/t/p/w470_and_h470_face/'+item.poster_path"/>
    </div>

    <div class="item-details">
        <h2> Title: {{item.title}} </h2>
        <h2> <strong> Tagline: </strong> {{item.tagline}} </h2> 
        <p> <strong> Voter </strong> {{ item.vote_average}} </p>
        <p> <strong> count: </strong> {{ item.vote_count}} </p>
        <p> <strong> Status: </strong> {{item.status}} </p>
        <p> <strong> Release Date: </strong> {{ item.release_date }} </p>
        <p> <strong> Original Language: </strong> {{ item.original_language }} </p>
        <p> <strong> Original Title: </strong> {{ item.original_title }} </p>
        <p> <strong> item Budget: </strong> {{item.budget }} </p>
        <p> <strong> Overview: </strong> {{item.overview}} </p>
        <p>  <strong> Genres: </strong> 
            <ul class="gener">
                <li v-for="genre in item.genres" :key="genre.id">
                    <router-link :to="{ name: 'moviedetails', params: { id: genre.id }}">
                        {{genre.name}}
                    </router-link>
                </li>
            </ul>   
        </p>
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
        item: function() {
            return this.$store.getters['movies/getItem']
        } 
    },
    mounted: function () {
        let id = this.$route.params.id;
        this.$store.dispatch('movies/getItem', { id: id })
    }
}
</script>