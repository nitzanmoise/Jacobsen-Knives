<template>
  <div v-if="knife" class="KnifeDetails">
    <div class="knife-container">
      <div class="knife-content">
            <h1>{{knife.name}}</h1>
            <h4>{{knife.description}}</h4>

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
    this.$store.dispatch({ type: "loadKnives" });
    var knifeId = this.$route.params.id;
    this.$store.dispatch({ type: "getKnifeById", knifeId });
  },
  computed: {
    knife() {
      return this.$store.getters.currknifeForDisplay;
    }
  }
};
</script>

<style scoped>
.knife-container {
  display: flex;
  align-items: space-between;
  max-width: 100%;
  max-width: 100%;
  height: 100%;
  margin: 10% 20%;
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

.knife-content h4 {
  font-size: 1.2em;
  text-align: center;
  font-weight: normal;
  margin-top: 40%;
  font: normal "Helvetica Neue", Arial, sans-serif;
}
.v-carousel {
  /* display: inline-block; */
  height: 100%;
  width: 100%;
}
.knife-content {
  padding-right: 100px;
}
</style>
