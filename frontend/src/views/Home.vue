<template>
  <div class="home">
    <div class="content-container">
      <h1>Jacobsen Knives is an home made knives brand design and produced by <span> Lars Jacobsen.</span></h1>
            <div class="button" ><router-link class="dropdwon-link" to="/gallery"><h4>Check Out Our Gallery</h4></router-link></div>
      <h4><span>Jacobsen Knives</span> is not commercial buissnes there for the knives are for display only, although you have an option to ask for a price from the manufacturer if the knife is available.</h4>
    </div>

  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.content-container {
  margin: 8% 10%;
  max-width: 100%;
  height: 100%;
}
.content-container h1 {
  font-size: 2.5em;
  text-align: center;
  font-family: Goldoni, sans-serif;
  font-weight: 600;
}
.content-container h4 {
  font-size: 1.2em;
  text-align: center;
  font-weight: normal;
  padding: 40px 0 20px 0;
  font: normal "Helvetica Neue", Arial, sans-serif;
}
.button {
  font-size: 3em;
  cursor: pointer;
  color: rgb(133, 127, 127);
}
.button:hover {
  animation-name: pulse;
  animation-duration: 1s;
  animation-fill-mode: both;
  color: rgb(185, 185, 185);
}
span {
  font-family: Goldoni, sans-serif;
  color: rgb(133, 127, 127);
  font-weight: 600;
}
a {
  text-decoration: none;
  list-style: none;
  color: rgb(133, 127, 127);
}
@font-face {
  font-family: Goldoni;
  src: url("../assets/fonts/Goldoni_DEMO.otf");
}
</style>
