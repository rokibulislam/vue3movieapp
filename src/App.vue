<template>
  <div>
    <Header />
    <router-view/>
  </div>  
</template>

<script>
import Header from './components/header.vue';
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
ul,ol,li{
  list-style: none;
}

.container {
  width: 96%;
  /* width: 1170px; */
  margin: 0 auto;
}

img {
  max-width: 100%;
}

a,a:hover {
  text-decoration: none;
}

.btn {
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  background-color: transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
  border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  cursor: pointer;
}

.btn-primary {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}
    .box-container {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
    }

    .box {
        flex-basis: 19%;
        margin-bottom: 30px;
        margin-right: 10px;
        background: #fff;
        box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
        border-radius: 10px;
    }

    .box-content {
        padding: 26px 10px 12px 10px;
    }

    .box-content a {
        font-weight: 700;
        color: #000;
    }
    

    .item-single {
        display: flex;
        justify-content: space-between;
    }

    .item-details{
        flex-basis: 59%;
        text-align: left;
    }
    
    .item-img  {
        flex-basis: 39%;
    }

    .season {
        display: flex;
    }

    .gener {
        list-style: none;
        margin: 0;
        padding: 0;
        display: inline-flex;
    }

    .gener li{
        margin-right: 15px;
    }

    .item-img img{
      background: #fff;
      box-shadow: 10px 5px 12px rgb(0 0 0 / 10%);
    }

    @media only screen and (max-width: 64em) {
      .box {
          flex-basis: 19%;
      }
    }

    /* @media only screen and (max-width: 48em) {
      .box {
          flex-basis: 31%;
      }
    } */

    @media only screen and (max-width: 48em) {
      .box {
          flex-basis: 47%;
      }
      .item-single {
        flex-direction: column;
        justify-content: space-between;
      }
    }

    @media only screen and (max-width: 24em) {
      .box {
          flex-basis: 100%;
      }
      
      .item-single {
        flex-direction: column;
        justify-content: space-between;
      }
    }
    
</style>
