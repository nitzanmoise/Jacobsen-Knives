<template>
    <div class="knife-preview">
        <div  class="knife-container" @click="openKnifeDetails(knife._id)">
            <h1>{{knife.name}}</h1>
            <div class="cover-img"><img :src="knife.coverImg" alt=""/></div>
            <h4>{{knife.description}}</h4>
        </div> 
    </div>
</template>

<script>
export default {
  props: ["knife"],
  methods: {
    openKnifeDetails(knifeId) {
      this.$router.push(`/KnifeDetails/${knifeId}`);
    }
  }
};
</script>

<style scoped>
.knife-container {
  margin: 10% 28%;
  border-bottom: solid 0.5px black;
  max-width: 100%;
  height: 100%;
  cursor: pointer;
}

.cover-img img {
  width: 80%;
  margin-left: 40px;
}
.knife-container h1 {
  margin-bottom: 70px;
  font-size: 3em;
  text-align: center;
  font-family: Goldoni, sans-serif;
  font-weight: normal;
}

.knife-container h4 {
  font-size: 1.2em;
  text-align: center;
  font-weight: normal;
  padding: 20px;
  font: normal "Helvetica Neue", Arial, sans-serif;
}
</style>
