<<template>
  <div class="gallery"> 
    <knivesList :knives="knives"></knivesList>
  </div>
</template>

<script>
import knivesService from "../service/knivesService";
import knivesList from "../components/knives-list";
export default {
  created() {
    this.$store.dispatch({ type: "loadKnives" });
  },
  data() {
    return {
      imgSrc: "./img/IMG_1527.jpg"
    };
  },
  computed: {
    knives() {
      return this.$store.getters.knivesForeDisplay;
    }
  },
  components: {
    knivesList
  },
  name: "gallery"
};
</script>
<style scoped>
img {
  width: 800px;
  height: 500px;
}
</style>

