<template>
    <div class="indentityPost">
        <img src="#"  class="pseudoImage">
        <p class="pseudoPost">{{prenom}} {{nom}}</p>
    </div>
    <div class="publicationPost">
        <img src="#" class="imagePost">
        <p class="textPost">{{textPost}}</p>
    </div>
    <div class="reactionPost">
        <button><img src="#"  class="fitPost"></button>
        <button><img src="#"  class="fatPost"></button>
        <button><img src="#"  class="transfertPostImg"></button>    
        <p class="transfertPostText">Partager</p>
    </div>
    <div class="comPostContain">
        <label class="labelCom">Commentaire : </label>
        <input type="text" class="comPost">
    </div>
</template>

<script>
export default {
    props: {
        //Indentification  de l'auteur du post (image profil et pseudo)
        prenom: String,
        nom: String,
        pseudoImage: String,

        //Photo et texte redigé par l'auteur.
        imagePost: String,
        textPost: String,
        




    }


}
</script>

<style scoped>



</style>