<template>
<div class="bodyContain">
    <div class="addsContain">
        <div class="imgAddsContain">
            <img src="{{urlImg}}" alt="image du produit vendu">
        </div>
        <h4 class="titleProduct">{{titleProduct}}</h4>
        <p class="priceProduct">{{priceProduct}}€ - {{fullPriceProduct}}€ </p>
    </div>

</div>

    
</template>

<script>
export default {
    props: {
        //urlImg: String,
        titleProduct: String,
        priceProduct: Number,
        fullPriceProduct: Number,
    },
}
</script>

<style scoped>
.bodyContain{
    margin: 50px 150px auto 150px;
}

.addsContain{
    width: 300px;
    height: 400px;
    border: 1px solid black;
    border-radius: 15px;
    box-shadow: 1px 1px 2px black;
}
</style>