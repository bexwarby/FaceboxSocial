<template>

    <Navbar></Navbar>

        <h3 class="selectionSemaine">Selection de la Semaine :</h3>
        <div class="alignAdd">
            <AddPublication :urlImg="'../assets/img/shopImg/WheyHarder.PNG'" titleProduct="Whey Harder" :priceProduct="44.90" :fullPriceProduct="54.90"></AddPublication>
            <AddPublication :urlImg="'../assets/img/shopImg/WheyHarder.PNG'" titleProduct="Whey Harder" :priceProduct="44.90" :fullPriceProduct="54.90"></AddPublication>
            <AddPublication :urlImg="'../assets/img/shopImg/WheyHarder.PNG'" titleProduct="Whey Harder" :priceProduct="44.90" :fullPriceProduct="54.90"></AddPublication>
            <AddPublication :urlImg="'../assets/img/shopImg/WheyHarder.PNG'" titleProduct="Whey Harder" :priceProduct="44.90" :fullPriceProduct="54.90"></AddPublication>
        </div>
</template>

<script>
import Navbar from "../components/Navbar.vue"
import AddPublication from "../components/AddPublication.vue"

export default {

    components:{
        Navbar: Navbar,
        AddPublication: AddPublication,
    },
    

}
</script>

<style scoped>
.alignAdd{
    display: flex;
    flex-wrap: wrap;
}
</style>