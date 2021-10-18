<template>

    <Navbar></Navbar>

    <div class="addBodyContain">
        <h3 class="selectionSemaine">Selection de la Semaine :</h3>
        <div class="alignAdd">
            <AddPublication :urlImg="`WheyHarder.PNG`" titleProduct="Whey Harder" :priceProduct="44.90" :fullPriceProduct="54.90"></AddPublication>
            <AddPublication :urlImg="`WheyHarder.PNG`" titleProduct="Whey Harder" :priceProduct="44.90" :fullPriceProduct="54.90"></AddPublication>
            <AddPublication :urlImg="`WheyHarder.PNG`" titleProduct="Whey Harder" :priceProduct="44.90" :fullPriceProduct="54.90"></AddPublication>
            <AddPublication :urlImg="`WheyHarder.PNG`" titleProduct="Whey Harder" :priceProduct="44.90" :fullPriceProduct="54.90"></AddPublication>
            <AddPublication :urlImg="`WheyHarder.PNG`" titleProduct="Whey Harder" :priceProduct="44.90" :fullPriceProduct="54.90"></AddPublication>
            <AddPublication :urlImg="`WheyHarder.PNG`" titleProduct="Whey Harder" :priceProduct="44.90" :fullPriceProduct="54.90"></AddPublication>
            <AddPublication :urlImg="`WheyHarder.PNG`" titleProduct="Whey Harder" :priceProduct="44.90" :fullPriceProduct="54.90"></AddPublication>
            <AddPublication :urlImg="`WheyHarder.PNG`" titleProduct="Whey Harder" :priceProduct="44.90" :fullPriceProduct="54.90"></AddPublication>
            <AddPublication :urlImg="`WheyHarder.PNG`" titleProduct="Whey Harder" :priceProduct="44.90" :fullPriceProduct="54.90"></AddPublication>
            <AddPublication :urlImg="`WheyHarder.PNG`" titleProduct="Whey Harder" :priceProduct="44.90" :fullPriceProduct="54.90"></AddPublication>
        </div>

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
.addBodyContain{
    margin-left: 150px;
    margin-top: 110px;
}
.alignAdd{
    display: flex;
    flex-wrap: wrap;
}

.addBodyContain h3{
    font-size: 50px;
    color: #403c39;
}

</style>