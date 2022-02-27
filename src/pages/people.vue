<template>
    <div class="item-single">
        <div class="item-img">
            <img :src="'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/'+ item.profile_path"/>
            <p class=""> <strong> Place of Birth </strong> {{ item.place_of_birth }} </p>
            <p> <strong> Birthday </strong> {{ item.birthday }} </p>
            <p> <strong> Known For </strong> {{ item.known_for_department }} </p>
        </div>

        <div class="item-details">
            <h2 class="title"> {{ item.name }} </h2>
            <h3 class="bio"> Biography </h3>
            <p class="biography"> {{ item.biography }} </p>
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
            return this.$store.getters['peoples/getItem']
        } 
    },
    mounted: function () {
        let id = this.$route.params.id;
        this.$store.dispatch('peoples/getItem', { id: id })
    }
}
</script>


<style scoped>
    .item-img img{
        height: 450px;
    }
    .title {
        font-size: 2.2rem;
    }
    .bio {
        font-size: 1.3rem;
    }
    
    .biography {
        font-size: 1.3rem;
    }
</style>