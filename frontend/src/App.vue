<template>
  <div id="app">
        <div id="nav" class="navBar">

            <div class="nav-list">
                    <div class="menu" id="myTopNav"> 
                              <router-link class="home-link" to="/">home</router-link><span class="line"> | </span>
                            <div class="knives-dropdown">
                                <a class="dropbtn nav-link categories">Categories</a><span class="line line1"> | </span>
                              <div class="dropdown-content" >
                              <ul >
                                <li  v-for="category in categories" :key="category.idx" @click="setFilter(category)">{{category}}</li>
                              </ul>
                              </div>      

                            </div>
                            <div class="knives-dropdown">
                              <a  class="dropbtn nav-link">About</a>
                                    <div class="dropdown-content" >
                                      <ul>
                                        <li>news</li>
                                        <li><router-link class="dropdwon-link" to="/contact">contact</router-link></li>
                                        <li><router-link class="dropdwon-link" to="/about">about</router-link></li>
                                      </ul>
                                    </div> 
                            </div>
                      </div>  
                    <div class="links-menu">
                          <a class="home-link " href="https://www.facebook.com/frydentus"><i class="fab fa-facebook-square"></i></a>
                          <a class=" home-link" href="https://www.instagram.com/jacobsenknives/"><i class="fab fa-instagram"></i></a>
                    </div>
                    <a href="javascript:void(0);" class="icon" @click="openNavbar">
                      <i class="fa fa-bars"></i>
                    </a>
            </div>
          
          
        </div>
            <div class="img-container">
              <h1> JACOBSEN KNIVES </h1>
            </div>
    <router-view/>
    <footer><h1>© 2018 All Rights Reserved To Nitzan Moise</h1></footer>
  </div>
</template>
<script>
import knivesService from "./service/knivesService";
import knivesList from "./components/knives-list";
export default {
  created() {
    this.$store.dispatch({ type: "loadKnives" });
    window.onscroll = function() {
      knivesService.myFunction();
    };
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
      this.$router.push(`/gallery`);

      this.$store.commit({ type: "setKnivesFilter", filter });
      this.$store.dispatch({ type: "loadKnives" });
    },
    openNavbar() {
      var x = document.getElementById("myTopNav");
      if (x.className === "menu") {
        x.className += " responsive";
      } else {
        x.className = "menu";
      }
    }
  },

  components: {
    knivesList
  },
  name: "app"
};
</script>


<style>
.dropdown-container {
  display: flex;
  width: 100%;
}
#app {
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
}
.line {
  color: #fff;
}
.dropdown-content {
  display: none;
  position: absolute;
  /* margin-inline-start: 10px; */
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
.icon {
  display: none;
}

.navBar {
  border-bottom: white solid 1px;
  position: fixed;
  bottom: 1rem;
  width: 100%;
  height: 100%;
  top: 0;

  background: rgba(0, 0, 0, 0.9);
  height: 3em;
}
.static {
  position: absolute;
  top: 73 0px;
}
#nav .nav-link {
  padding: 10px 30px;
  line-height: 45px;
  font-family: novecentowide, sans-serif;
  text-transform: uppercase;
  font-size: 0.8em;
  letter-spacing: 0.2em;
  font-weight: 600;
  color: #fff;
  text-decoration: none;
}
#nav .home-link {
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
  margin-left: 5px;
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

.img-container img {
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  height: auto;
  position: static;
}

.img-container {
  max-width: 100%;
  max-height: 100%;
  margin-top: -50px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../public/img/Skærmbillede 2018-07-16 kl. 20.31.37.png");
  height: 700px;
  background-position: center;
  background-repeat: repeat;
  background-attachment: fixed;
  background-origin: padding-box;
  width: 100%;
}

.headline {
  width: 100%;
  max-width: 100%;
}
.img-container h1 {
  margin-top: 250px;
  display: inline-block;
  width: 100%;
  height: 100%;
  color: #fff;
  font-size: 7em;
  text-align: center;
  font-family: Goldoni, sans-serif;
  font-weight: 100;
}
footer {
  display: flex;
  max-width: 100%;
  max-width: 100%;
  padding: 2% 10%;
  text-align: center;
  background-color: rgb(185, 185, 185);
  border-top: solid 0.5px black;
}
footer h1 {
  font-size: 1.2em;
  text-align: center;
  font-weight: normal;
  color: rgb(247, 247, 247);
  font: normal "Helvetica Neue", Arial, sans-serif;
}
@font-face {
  font-family: Goldoni;
  src: url("assets/fonts/Goldoni_DEMO.otf");
}
@media (max-width: 700px) {
  .img-container {
    background-repeat: repeat-x;
    background-position: left;
    width: 100%;
  }
  .img-container h1 {
    font-size: 5em;
  }
  .categories {
    margin-top: -50px;
  }
  .menu .nav-link,
  .line1 {
    display: none;
  }

  .icon {
    display: inline;
    color: white;
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 1.4em;
  }
  .menu.responsive {
    display: flex;
    position: absolute;
    top: -30px;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
  }
  .links-menu {
    top: -30px;
    left: 100px;
    position: absolute;
    display: flex;
    flex-direction: row;
  }

  .nav-list {
    align-content: unset;
    justify-content: unset;
  }
  .menu.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }

  #nav .nav-link .home-link {
    padding: 3px;
    margin: 0;
    position: absolute;
    top: 25px;
  }
  #nav {
    border-bottom: white solid 1px;
  }
  .menu.responsive .nav-link {
    border-bottom: white solid 1px;
    width: 100%;
    display: flex;
    text-align: left;
    background-color: unset;
    background: rgba(0, 0, 0, 0.9);
  }
  .knives-dropdown:hover .dropdown-content,
  .dropdown-content ul {
    display: flex;
    flex-direction: row;
    padding: 5px;
  }
  .dropdown-content li {
    margin-left: 20px;
    font-size: 0.6em;
  }
  .knives-dropdown .dropdown-content {
    margin-top: -35px;
    margin-left: 0;
    width: 100%;
    height: auto;
    background-color: unset;
  }
}
@media (max-height: 100px) {
  #app {
    position: static;
    background-color: #fff;
  }
}
</style>
