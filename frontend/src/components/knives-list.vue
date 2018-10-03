<template>
  <div class="knives-list">
   <div class="knife-container" v-for="knife in knives" :key="knife.id">
      <KnifePreview :knife="knife"></KnifePreview>
  </div> 

    </div>

    
</template>

<script>
import KnifePreview from "./KnifePreview";
export default {
  props: ["knives"],

  components: {
    KnifePreview
  }
};
</script>
<style scoped>
</style>

