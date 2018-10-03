<template>
  <div id="app">
    <div class="head-line">
    <div id="nav">

      <div class="nav-list">
       <div class="menu"> 
        <router-link class="nav-link" to="/">Home</router-link> |
        <div class="knives-dropdown">
            <a class="dropbtn nav-link">Categories</a>
          <div class="dropdown-content" >
           <ul  v-for="category in categories" :key="category.idx">
             <li @click="setFilter(category)">{{category}}</li>
           </ul>
          </div>      

        </div>
        <div class="knives-dropdown">
        
        <a  class="dropbtn nav-link">About</a>
        <div class="dropdown-content" >
           <ul>
             <li>news</li>
             <li>contact</li>
             <li><router-link class="dropdwon-link" to="/about">about</router-link></li>
           </ul>
          </div> 
      </div>
    </div>  
    <div class="links">
      <a class="nav-link " href="https://www.facebook.com/frydentus"><i class="fab fa-facebook-square"></i></a>
      <a class="nav-link " href="https://www.instagram.com/jacobsenknives/"><i class="fab fa-instagram"></i></a>
    </div>
        </div>
      
      
    </div>
      <h1> JACOBSEN KNIVES </h1>
    </div>
    <router-view/>
  </div>
</template>
<script>
import knivesService from "./service/knivesService";
import knivesList from "./components/knives-list";
export default {
  created() {
    this.$store.dispatch({ type: "loadKnives" });
  },
  data() {
    return {
      categories: ["All", "Bushcraft", "Hunting", "kitchen", "japanese"]
    };
  },
  computed: {
    knives() {
      return this.$store.getters.knivesForeDisplay;
    }
  },
  methods: {
    setFilter(filter) {
      console.log("filter", filter);
      this.$router.push(`/`);

      this.$store.commit({ type: "setKnivesFilter", filter });
      this.$store.dispatch({ type: "loadKnives" });
    }
  },
  components: {
    knivesList
  },
  name: "app"
};
</script>


<style scoped >
#app {
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
}
.dropdown-content {
  display: none;
  position: absolute;
  margin-inline-start: 10px;
  margin-top: -5px;
  width: 100%;
  height: auto;
  background-color: rgba(0, 0, 0, 0.9);
}
.knives-dropdown {
  position: relative;
  display: inline-block;
}
.knives-dropdown:hover .dropdown-content {
  display: block;
}
.knives-dropdown:hover #nav {
  height: 300px;
}
.dropbtn {
  cursor: pointer;
}
.dropdwon-link {
  color: #fff;
  text-decoration: none;
}
.dropdwon-link:hover {
  color: #838383;
  cursor: pointer;
}
.nav-list {
  display: flex;
  align-content: space-between;
  justify-content: space-between;
  width: 100%;
}

#nav {
  position: relative;
  width: 100%;
  top: 0;
  background: rgba(0, 0, 0, 0.9);
  height: 3em;
}
#nav .nav-link {
  padding: 30px;
  line-height: 45px;
  font-family: novecentowide, sans-serif;
  text-transform: uppercase;
  font-size: 0.8em;
  letter-spacing: 0.2em;
  font-weight: 600;
  color: #fff;
  text-decoration: none;
}
.knives-dropdown li {
  line-height: 25px;
  font-family: novecentowide, sans-serif;
  text-transform: uppercase;
  font-size: 0.7em;
  letter-spacing: 0.2em;
  font-weight: 600;
  color: #fff;
  text-decoration: none;
  list-style: none;
  display: block;
}
.knives-dropdown li:hover {
  color: #838383;
  cursor: pointer;
}
.head-line {
  max-width: 100%;
  height: 700px;

  background-position: center;
  background-repeat: repeat;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../public/img/Skærmbillede 2018-07-16 kl. 20.31.37.png");
}
.head-line h1 {
  color: #fff;
  font-size: 6em;
  margin-top: 20%;
  text-align: center;
  font-family: Goldoni, sans-serif;
  font-weight: normal;
}

@font-face {
  font-family: Goldoni;
  src: url("assets/fonts/Goldoni_DEMO.otf");
}
</style>
