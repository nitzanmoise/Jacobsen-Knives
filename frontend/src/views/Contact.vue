<template>
    <div class="contact">
   
      
    <section id="contact">
        <form action="action_page.php">
            <h4>Full Name</h4>
            <input type="text" id="email" name="email" placeholder="Your Name..">
            <br/>
            <br/>
            <h4>Email</h4>
            <input type="text" id="subject" name="subject" placeholder="Your Email.."> 
            <br/>
            <br/>
            <h4>Message</h4>
            <textarea id="message-body" name="message-body" placeholder="Write something.." style="height:200px"></textarea>
            <br/>
            <button type="button" class="btn btn-primary" onclick="newWindow()">Submit</button>
        </form>
        <div class="cover-img"><img src="../../public/img/iwerfiu 041.jpg" alt=""/></div>
    </section>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
#contact {
  display: flex;
  max-width: 100%;
  max-width: 100%;
  height: 100%;
  padding: 10% 15%;
  width: 100%;
}
.contact-container {
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;
}
form {
  display: flex;
  flex-direction: column;
  max-width: 100%;
  max-width: 100%;
  width: 400px;
}
input,
textarea {
  border-style: inset;
  background-color: white;
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
.cover-img img {
  width: 330px;
  height: auto;
}
.cover-img {
  margin-left: 100px;
  max-width: 100%;
  max-height: 100%;
  height: 600px;
}
@media (max-width: 700px) {
  #contact {
    flex-direction: column;
    padding: 10% 10%;
  }
  .cover-img {
    margin: 20px 0 0 0;
    height: 100%;
  }
  form {
    margin-top: 50px;
  }
  .cover-img img {
    width: 100%;
    height: auto;
  }
}
</style>
