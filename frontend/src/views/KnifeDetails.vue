<template>
  <div v-if="knife" class="KnifeDetails">
    <div class="knife-container">
      <div class="knife-content">
            <h1>{{knife.name}}</h1>
            <h4>{{knife.description}}</h4>
            <div class="button" v-if="knife.isForSale" @click="goToContact(knife._id)" ><h4>Ask For This Item</h4></div>
            <div class="button" v-if="!knife.isForSale"><h4>Item Is Not Available</h4></div>
      </div>
      <v-carousel>
      <v-carousel-item height="100%" width="100%"
        v-for="(image,i) in knife.images"
        :key="i"
        >
        <div class="cover-img"><img :src="image" alt=""/></div>
      </v-carousel-item>
    </v-carousel>
   </div> 
  </div>
</template>


<script>
export default {
  created() {
    var knifeId = this.$route.params.id;
    this.$store.dispatch({ type: "getKnifeById", knifeId });
  },
  computed: {
    knife() {
      return this.$store.getters.currknifeForDisplay;
    }
  },
  methods: {
    goToContact(knifeId) {
      this.$router.push(`/contact/:${knifeId}`);
    }
  }
};
</script>

<style scoped>
.knife-container {
  display: flex;
  max-width: 100%;
  max-width: 100%;
  height: 100%;
  margin: 10% 20%;
  align-items: center;
}
.cover-img img {
  width: 100%;
  height: 100%;
}

.knife-container h1 {
  margin-bottom: 10%;
  font-size: 4em;
  text-align: center;
  font-family: Goldoni, sans-serif;
  font-weight: normal;
}
.knife-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.knife-content h4 {
  font-size: 1.3em;
  text-align: center;
  font-weight: normal;
  font: normal "Helvetica Neue", Arial, sans-serif;
}
.v-carousel {
  height: 100%;
  width: 100%;
  position: relative;
}
.button {
  font-size: 1.8em;
  cursor: pointer;
  color: rgb(133, 127, 127);
}
.button:hover {
  animation-name: pulse;
  animation-duration: 1s;
  animation-fill-mode: both;
  color: rgb(185, 185, 185);
}
.knife-content {
  padding-right: 100px;
  height: 500px;
}
@media (max-width: 700px) {
  .knife-container {
    /* margin: 0; */
    flex-direction: column;
  }
  .cover-img img {
    width: 100%;
    margin: 0;
  }
  .knife-container h1 {
    margin: 0;
  }
  .knife-content {
    justify-content: start;
    padding: 0;
  }
  .knife-content h1,
  h4,
  .button {
    margin-top: 40px;
  }
}
</style>
