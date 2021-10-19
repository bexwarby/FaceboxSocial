<template>
  <Navbar></Navbar>
  <h1>Facebox Shop</h1>

    <Navbar></Navbar>

    <div class="addBodyContain">
        <h3 class="selectionSemaine">Selection de la Semaine :</h3>
        <div class="alignAdd">
            <AddPublication urlImg="wheyHarder.png" titleProduct="Whey Harder" :priceProduct="44.90" :fullPriceProduct="54.90"></AddPublication>
            <AddPublication urlImg="wheyIsolate.png" titleProduct="Whey Isolate (2KG)" :priceProduct="42.00" :fullPriceProduct="52.90"></AddPublication>
            <AddPublication urlImg="vegetalProtein.png" titleProduct="Végétal Protein 750 G - Vanille" :priceProduct="20.00" :fullPriceProduct="26.00"></AddPublication>
            <AddPublication urlImg="barreHexagonale.jpg" titleProduct="Barre Hexagonale" :priceProduct="143.00" :fullPriceProduct="179.00"></AddPublication>
            <AddPublication urlImg="cindyTee.jpg" titleProduct="Cindy Tee - Fran Cindy" :priceProduct="15.00" :fullPriceProduct="30.00"></AddPublication>
            <AddPublication urlImg="ranglanTee.jpg" titleProduct="Ranglan Tee - Fran Cindy" :priceProduct="16.00" :fullPriceProduct="32.00"></AddPublication>
            <AddPublication urlImg="manchon.jpg" titleProduct="Manchons de compression bras" :priceProduct="19.00" :fullPriceProduct="30.00"></AddPublication>
            <AddPublication urlImg="dumbbellHaltère.jpg" titleProduct="Dumbbell Haltère" :priceProduct="12.00" :fullPriceProduct="19.00"></AddPublication>
            <AddPublication urlImg="littleBox.jpg" titleProduct="Little Box jump 3 en 1 en bois" :priceProduct="79.00" :fullPriceProduct="99.00"></AddPublication>
            <AddPublication urlImg="swissBar olympique.jpg" titleProduct="Swiss Bar olympique" :priceProduct="99.00" :fullPriceProduct="117.00"></AddPublication>
            <AddPublication urlImg="wallBallPro.jpg" titleProduct="Wall Ball Pro" :priceProduct="40.00" :fullPriceProduct="55.00"></AddPublication>
        </div>

    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import AddPublication from "../components/AddPublication.vue";

export default {
  components: {
    Navbar: Navbar,
    AddPublication: AddPublication,
  },
  methods: {
    price() {
      const num = 44.9;
      return num.toFixed(2);
    },
    fullPrice() {
      const num = 54.9;
      return num.toFixed(2);
    },
  },
};
</script>

<style scoped>
.addBodyContain {
  margin-left: 150px;
  margin-top: 110px;
}
.alignAdd {
  display: flex;
  flex-wrap: wrap;
}

.addBodyContain h3 {
  font-size: 50px;
  color: #403c39;
}
h1 {
  z-index: 311;
  position: fixed;
  color: white;
  top: 0;
  left: 44%;
  margin-top: 10px;
}

@media screen and (max-width : 1025px){
    .addBodyContain{
        margin-left: 80px;
    }
}

@media screen and (max-width : 769px){
    .addBodyContain{
        margin-left: 110px;
    }
}

@media screen and (max-width : 426px){
  .addBodyContain{
    margin-left: 100px; 
  }
}

@media screen and (max-width : 376px){
  .addBodyContain{
    margin-left: 80px; 
  }
}


</style>