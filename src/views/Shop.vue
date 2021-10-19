<template>
  <Navbar></Navbar>
  <h1>Facebox Shop</h1>

  <div class="addBodyContain">
    <h3 class="selectionSemaine">Selection de la Semaine :</h3>
    <div class="alignAdd">
      <AddPublication
        :urlImg="`WheyHarder.PNG`"
        titleProduct="Whey Harder"
        :priceProduct="price()"
        :fullPriceProduct="fullPrice()"
      ></AddPublication>
      <AddPublication
        :urlImg="`WheyHarder.PNG`"
        titleProduct="Whey Harder"
        :priceProduct="price()"
        :fullPriceProduct="fullPrice()"
      ></AddPublication>
      <AddPublication
        :urlImg="`WheyHarder.PNG`"
        titleProduct="Whey Harder"
        :priceProduct="price()"
        :fullPriceProduct="fullPrice()"
      ></AddPublication>
      <AddPublication
        :urlImg="`WheyHarder.PNG`"
        titleProduct="Whey Harder"
        :priceProduct="price()"
        :fullPriceProduct="fullPrice()"
      ></AddPublication>
      <AddPublication
        :urlImg="`WheyHarder.PNG`"
        titleProduct="Whey Harder"
        :priceProduct="price()"
        :fullPriceProduct="fullPrice()"
      ></AddPublication>
      <AddPublication
        :urlImg="`WheyHarder.PNG`"
        titleProduct="Whey Harder"
        :priceProduct="price()"
        :fullPriceProduct="fullPrice()"
      ></AddPublication>
      <AddPublication
        :urlImg="`WheyHarder.PNG`"
        titleProduct="Whey Harder"
        :priceProduct="price()"
        :fullPriceProduct="fullPrice()"
      ></AddPublication>
      <AddPublication
        :urlImg="`WheyHarder.PNG`"
        titleProduct="Whey Harder"
        :priceProduct="price()"
        :fullPriceProduct="fullPrice()"
      ></AddPublication>
      <AddPublication
        :urlImg="`WheyHarder.PNG`"
        titleProduct="Whey Harder"
        :priceProduct="price()"
        :fullPriceProduct="fullPrice()"
      ></AddPublication>
      <AddPublication
        :urlImg="`WheyHarder.PNG`"
        titleProduct="Whey Harder"
        :priceProduct="price()"
        :fullPriceProduct="fullPrice()"
      ></AddPublication>
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
</style>