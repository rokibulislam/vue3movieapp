<template>
    <div>
        <h2> Popular TV Shows </h2>
        <TvshowsList :items=items.results :search=false />
    </div>
</template>

<script>
import TvshowsList from '../components/tvshows/tvshowsList.vue';

export default {
    components: {
        TvshowsList
    },
    data() {
        return  {
            
        }
    },
    computed: {
        items: function() {
            console.log('item tvshows');
            return this.$store.getters['tvshows/getItems']
        }
    },
    mounted: function () {
        console.log('item mounted');
        this.$store.dispatch('tvshows/getItems')
    }
}
</script>