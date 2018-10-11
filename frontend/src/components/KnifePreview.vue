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
  margin: 10% 26%;
  max-width: 100%;
  height: 100%;
  cursor: pointer;
  padding: 40px;
}
.knife-container:hover {
  color: rgb(185, 185, 185);
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
  padding: 30px 20px;
  border-bottom: solid 0.5px black;
  font: normal "Helvetica Neue", Arial, sans-serif;
}
@media (max-width: 700px) {
  .knife-container {
    margin: 0;
  }
  .cover-img img {
    width: 100%;
    margin: 0;
  }
}
</style>
