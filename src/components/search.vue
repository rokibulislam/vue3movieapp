<template>
    <div class="container">
        <form class="search-form">
            <input type="text" class="form-control" placeholder="Search for a movie, tv show, person......" v-model="search"/>
            <button type="submit" class="btn btn-search" @click="searhSubmit"> Search </button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            'search': ''
        }
    },
    methods: {
        searhSubmit:  function (e) {
            e.preventDefault();
            this.$store.dispatch( 'movies/getSearch', { query: this.search });
            this.$store.dispatch( 'tvshows/getSearch', { query: this.search });
            this.$store.dispatch( 'peoples/getSearch', { query: this.search });
            this.$router.push({ path: '/search', query: { query: this.search } })
        }
    }
}
</script>

<style scoped>

.search-form {
    margin-top: 30px;
    position: relative;
    top: 0;
    left: 0;
}

.form-control {
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1.2rem;
    line-height: 2rem;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 30px;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    display: inline-block;
    margin-top: 5px;
    box-sizing: border-box;
}

.btn-search{
    /* justify-content: center;
    align-content: center;
    align-items: center; */
    height: 50px;
    padding: 10px 26px;
    border-radius: 30px;
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
    position: absolute;
    right: 0px;
}
</style>