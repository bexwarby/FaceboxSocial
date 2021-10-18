<template>
    <div class="addsContain">
        <div class="imgAddsContain">
            <img src="`../assets/img/shopImg/{{urlImg}}`" alt="image du produit vendu">
        </div>
        <h4 class="titleProduct">{{titleProduct}}</h4>
        <p class="priceProduct">{{priceProduct}}€ - <span class="fullPrice">{{fullPriceProduct}}€</span> </p>
    </div>

</template>

<script>
export default {
    props: {
        urlImg: String,
        titleProduct: String,
        priceProduct: Number,
        fullPriceProduct: Number,
    },
}
</script>

<style scoped>
.addsContain{
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 400px;
    border: 1px solid black;
    border-radius: 15px;
    box-shadow: 1px 1px 2px black;
    margin-right: 30px;
    margin-bottom: 70px;
}

.imgAddsContain {
    width: 100%;
    height: 280px;
    background-color: wheat;
    border-radius: 15px 15px 0px 0px;
}

.fullPrice{
    text-decoration: line-through;
}



</style>