<template>
    <div>
        <h2> Search Results </h2>

        <div class="navbar">
          <ul class="contactum-tabs nav-tab-menu">
            <li class="nav-tab-item">
              <a href="#" :class="['nav-tab', isActiveTab( 'movies' ) ? 'nav-tab-active' : '']"
                @click.prevent="makeActive('movies')"> Movies </a>
            </li>
            <li class="nav-tab-item">
              <a href="#" :class="['nav-tab', isActiveTab( 'tvshows' ) ? 'nav-tab-active' : '']"
                @click.prevent="makeActive('tvshows')"> Tv Shows </a>
            </li>
            <li class="nav-tab-item">
              <a href="#" :class="['nav-tab', isActiveTab( 'peoples' ) ? 'nav-tab-active' : '']"
                @click.prevent="makeActive('peoples')"
              >Peoples</a>
            </li>
          </ul>
        </div>

        <div class="tab-contents">
            <div class="movies" v-show="isActiveTab('movies')">
                <MoviesList :items="movieitems.results" :search="true"/>
            </div>

            <div class="tvshows" v-show="isActiveTab('tvshows')">
                <TvshowsList :items="tvitems.results" :search="true"/>
            </div> 

            <div class="tvshows" v-show="isActiveTab('peoples')">
                <PeoplesList :items="peopleitems.results" :search="true"/>
            </div> 
        </div>
    </div>
</template>

<script>
import MoviesList from "../components/movies/moviesList.vue";
import TvshowsList from '../components/tvshows/tvshowsList.vue';
import PeoplesList from '../components/peoples/peoplesList.vue';

export default {
    components: {
        MoviesList,
        TvshowsList,
        PeoplesList
    },
    data() {
        return  {
            activeTab: "movies",  
        }
    },
    computed: {
        movieitems: function() {
            return this.$store.getters['movies/getSearch'];
        },
        tvitems: function() {
            return this.$store.getters['tvshows/getSearch']
        },
        peopleitems: function() {
            return  this.$store.getters['peoples/getSearch']  
        }
    },
    methods: {
        makeActive: function (val) {
            this.activeTab = val;
        },

        isActiveTab: function (val) {
            return this.activeTab === val;
        }
    }
}
</script>

<style scoped>

    .nav-tab-menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style-type: none;
    }

    .nav-tab-item {
        margin-left: 5rem;
        list-style: none;
    }

    .nav-link {
      font-size: 1rem;
      font-weight: 400;
      color: #475569;
      text-decoration: none;
    }
    .nav-tab-active {
        border-bottom: none;
        background: #9649CB;
        color: #000;
        color: #fff;
        display: inline-block;
        padding: 5px 10px;
        font-weight: 700;
    }
</style>