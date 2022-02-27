<template>
    <div>
        <h2> Peoples </h2>
        <PeoplesList :items="items.results" :search=false />
    </div>
</template>

<script>
import PeoplesList from "../components/peoples/peoplesList.vue";

export default {
    components: {
        PeoplesList
    },
    data() {
        return  {
            
        }
    },
    computed: {
        items: function() {
            return this.$store.getters['peoples/getItems']
        }
    },
    mounted: function () {
        this.$store.dispatch('peoples/getItems')
    }
}
</script>
