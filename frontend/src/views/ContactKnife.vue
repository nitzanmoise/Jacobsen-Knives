<template>
    <div v-if="knife" class="contact-knife"> 
        <div  class="contact-container"> 
            <section id="contact">
                <form v-on:submit.prevent="sendEmail">
                   <div>
                    <h4>Full Name</h4>
                    <input v-model="emailDetails.name" type="text" id="name" name="name" placeholder="Your Name..">
                   </div>  
                   <div> 
                    <h4>Email</h4>
                    <input v-model="emailDetails.email" type="text" id="email" name="email" placeholder="Your Email.."> 
                   </div>
                    <div> 
                    <h4>Subject</h4>
                    <input v-model="emailDetails.subject" id="subject" name="subject" placeholder="Subject..">
                   </div>    
                   <div> 
                    <h4>Message</h4>
                    <textarea v-model="emailDetails.message" id="message-body" name="message-body" placeholder="Write something.." style="height:200px"></textarea>
                   </div>  
                    <br/>
                    <button type="submit" value="Submit" @submit="sendEmail()" class="btn btn-primary">Submit</button>
                </form>
            </section>

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
import knivesService from "../service/knivesService";
export default {
  created() {
    var knifeId = this.$route.params.id;
  },
  data() {
    return {
      emailDetails: {
        name: "",
        email: "",
        subject: "",
        message: ""
      }
    };
  },
  computed: {
    knife() {
      return this.$store.getters.currknifeForDisplay;
    }
  },
  methods: {
    sendEmail() {
      console.log("email", this.emailDetails);
      knivesService.sendEmail(this.emailDetails);
      // .then(res => {
      //   //   console.log("Register Completed, Please Log In!");
      //   //   EventBusService.$emit(SHOW_MSG, {
      //   //     txt: "Registration Completed! please login"
      //   //   });
      //   //   this.$emit("close");
      //   //   this.$emit("loginModal", true);
      // })
      // .catch(err => console.log("Register Failed!"));
    }
  }
};
</script>

<style scoped>
#app {
  position: static;
}
.contact-container {
  display: flex;
  justify-content: space-around;
  max-width: 100%;
  max-width: 100%;
  width: 100%;
  height: 100%;
  padding: 10% 10%;
}
#contact {
  height: 500px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  max-width: 100%;
  height: 100%;
  width: 400px;
}
.v-carousel {
  margin-top: 10px;
  height: 100%;
  width: 36%;
  position: relative;
}
.cover-img img {
  width: 100%;
  height: 100%;
}
input,
textarea {
  border-style: inset;
  background-color: white;
  width: 100%;
  margin-bottom: -40px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 400;
  text-transform: uppercase;
  font-size: 1.2em;
  padding: 5px 0;
  font: normal "Helvetica Neue", Arial, sans-serif;
}

.btn-primary {
  font-weight: 700;
  color: white;
  border-color: rgb(233, 233, 233);
  background-color: rgb(185, 185, 185);
  text-transform: uppercase;
  padding: 5px;
}
.btn-primary:hover {
  animation-name: pulse;
  animation-duration: 1s;
  animation-fill-mode: both;
}
input,
textarea {
  padding: 5px;
}
@media (max-width: 700px) {
  .contact-container {
    flex-direction: column;
    padding: 20% 10%;
  }
  form {
    width: 100%;
    padding: 0;
  }
  .v-carousel {
    margin-top: 40px;
    width: 100%;
    height: 100%;
  }
  #contact {
    padding: 0;
  }
}
</style>
