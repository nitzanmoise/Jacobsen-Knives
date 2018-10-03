import axios from "axios";

let KNIVES_URL = "http://localhost:3000/data/knives";

// var knives = [
//   {
//     id: "1a",
//     name: "Bushcraft knife",
//     description: "Bushcraft knife with Kydex / leather sheath",
//     categories: ["Bushcraft", "Hunting", "kitchen"],
//     coverImg: require("../assets/images/IMG_1527.jpg"),
//     images: [
//       require("../assets/images/IMG_1527.jpg"),
//       require("../assets/images/IMG_1528.jpg"),
//       require("../assets/images/IMG_1531.jpg"),
//       require("../assets/images/IMG_1536.jpg")
//     ]
//   },
//   {
//     id: "4a",
//     name: "Hunting knife",
//     description: "Hunting knife with black canvas micarta and tan G10",
//     categories: ["Hunting"],
//     coverImg: require("../assets/images/IMG_0114.jpg"),
//     images: [
//       require("../assets/images/IMG_0114.jpg"),
//       require("../assets/images/IMG_0098.jpg")
//     ]
//   },
//   {
//     id: "2a",
//     name: "Small Knife",
//     description: "Small knife with micarta and green kydex",
//     categories: ["kitchen"],
//     coverImg: require("../assets/images/IMG_7150.jpg"),
//     images: [
//       require("../assets/images/IMG_7150.jpg"),
//       require("../assets/images/IMG_7158.jpg"),
//       require("../assets/images/IMG_7155.jpg"),
//       require("../assets/images/IMG_7157.jpg"),
//       require("../assets/images/IMG_7152.jpg"),
//       require("../assets/images/IMG_7164.jpg")
//     ]
//   },
//   {
//     id: "3a",
//     name: "D2 Knife",
//     description: "D2 knife with green linen micarta and titanium",
//     categories: ["hunting"],
//     coverImg: require("../assets/images/IMG_6866.jpg"),
//     images: [
//       require("../assets/images/IMG_6866.jpg"),
//       require("../assets/images/IMG_3161.jpg"),
//       require("../assets/images/IMG_6868.jpg"),
//       require("../assets/images/IMG_6869.jpg")
//     ]
//   },
//   {
//     id: "5a",
//     name: "Boat Knife",
//     description: "Boat knife",
//     categories: ["japanese"],
//     coverImg: require("../assets/images/IMG_7644.jpg"),
//     images: [
//       require("../assets/images/IMG_7644.jpg"),
//       require("../assets/images/IMG_7645.jpg"),
//       require("../assets/images/IMG_7646.jpg"),
//       require("../assets/images/IMG_7638.jpg"),
//       require("../assets/images/IMG_7637.jpg"),
//       require("../assets/images/IMG_7635.jpg"),
//       require("../assets/images/IMG_7633.jpg")
//     ]
//   },
//   {
//     id: "6a",
//     name: "Large Knife",
//     description: "Large knife with micarta and sanmai blade",
//     categories: ["bushcraft"],
//     coverImg: require("../assets/images/IMG_1904.jpg"),
//     images: [
//       require("../assets/images/IMG_1904.jpg"),
//       require("../assets/images/FullSizeRender.jpg"),
//       require("../assets/images/IMG_1898.jpg"),
//       require("../assets/images/FullSizeRender(1).jpg"),
//       require("../assets/images/IMG_1908.jpg")
//     ]
//   }
// ];

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

export default {
  getKnives,
  getKnifeById
};
