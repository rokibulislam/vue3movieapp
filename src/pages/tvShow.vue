<template>
<div>
    <div class="item-single">
        <div class="item-img">
            <img :src="'https://www.themoviedb.org/t/p/w470_and_h470_face/'+item.poster_path"/>
        </div>

        <div class="item-details">
            <h2 class="title"> {{item.name}} </h2>
            <ul class="gener">
                <li v-for="genre in item.genres" :key="genre.id">
                    <router-link :to="{ name: 'moviedetails', params: { id: genre.id }}">
                        {{genre.name}}
                    </router-link>
                </li>
            </ul>  
            <h3> Overview: </h3>
            <p> {{item.overview}} </p>

            <p> <strong> Voter </strong> {{ item.vote_average}} </p>
            <p> <strong>count: </strong> {{ item.vote_count}} </p>
            <p> <strong>Status: </strong> {{item.status}} </p>
            <p> <strong>Release Date: </strong> {{ item.release_date }} </p>
            <p> <strong>Original Language: </strong> {{ item.original_language }} </p>
            <p> <strong>Original Title: </strong> {{ item.original_title }} </p>
            <p>  <strong>Type: </strong> {{item.type}} </p>
            <h2> <strong> Tagline: </strong>  {{item.tagline}} {{ checkItemlength() }} </h2> 
        </div>
    </div>

    <!-- <div v-if="tvshow.seasons.length > 0">
        <h2> Seasons: </h2>
        <ul class="season">
            <li v-for="season in tvshow.seasons" :key="season.id">
                <h3>   {{season.name}} </h3>
                <p>  <img :src="'https://www.themoviedb.org/t/p/w470_and_h470_face/'+season.poster_path"/> </p>
                <p>   {{season.overview }} </p>
            </li>
        </ul>   
    </div> -->
</div>
</template>

<script>
export default {
    data() {
        return  {
            
        }
    },
    computed: {
        item: function() {
            return this.$store.getters['tvshows/getItem']
        }
    },
    mounted: function () {
        return this.$store.dispatch('tvshows/getItem', { id: this.$route.params.id })
    },
    methods: {
        checkItemlength: function() {
            return this.item.length
        }
    }
}
</script>
