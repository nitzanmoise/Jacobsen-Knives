import axios from "axios";

// let KNIVES_URL = "http://localhost:3000/data/knives";

let KNIVES_URL = "http://localhost:3000/data/knives";

if (process.env.NODE_ENV !== "development") {
  KNIVES_URL = "/data/knives";
}

function getKnives(filter = null) {
  return axios
    .get(KNIVES_URL)
    .then(res => {
      if (filter && filter !== "All") {
        return res.data.filter(knife => {
          return knife.categories.some(category => {
            return category.toLowerCase().includes(filter.toLowerCase());
          });
        });
      } else {
        return res.data;
      }
    })
    .catch(e => console.log("No knifes", e));
}

function _getKnifeUrl(knifeId) {
  return `${KNIVES_URL}/${knifeId}`;
}

function getKnifeById(knifeId) {
  return axios.get(_getKnifeUrl(knifeId)).then(res => res.data);
}

function sendEmail(knifeDetails) {
  return axios.post(`${KNIVES_URL}/email`, knifeDetails);
}

function myFunction() {
  var navBar = document.getElementById("nav");
  var sticky = navBar.offsetMiddle;

  if (window.pageYOffset > 740) {
    navBar.classList.add("static");
  } else {
    navBar.classList.remove("static");
  }
}
export default {
  getKnives,
  getKnifeById,
  sendEmail,
  myFunction
};
