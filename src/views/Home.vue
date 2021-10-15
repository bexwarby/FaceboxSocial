<template>
  <div class="home">
    <!--Appel des composants -->
    <Navbar></Navbar>
    <PublicationContent></PublicationContent>
    <!--Attribution des valeurs aux props de "GetPublication.vue"/ Récupération des élements dans le tableau de l'API -->
    <GetPublication
      v-for="(element, index) in post"
      :key="index"
      :titlePost="element.title"
      :contentPost="element.content"
      :idPost="element._id"
      :commentsPost="element.comments"
      :firstname="element.firstname"
      :lastname="element.lastname"
      :likePost="element.likes.length"
    >
    </GetPublication>
    <!--Appel de la fonction Getpost au clic du btn  -->
    <button @click="Getpost">post</button>
  </div>
</template>

<script>
//Import des différents components
import Navbar from "../components/Navbar.vue";
import PublicationContent from "../components/PublicationContent.vue";
import GetPublication from "../components/GetPublication.vue";

export default {
  //Création des datas proporties
  data() {
    return {
      post: [],
    };
  },
  // récupération des components
  components: {
    Navbar: Navbar,
    PublicationContent: PublicationContent,
    GetPublication: GetPublication,
  },
  //Création de mounted qui permet l'affichage au montage de la page de façon asynchronisée des posts utilisateurs
  async mounted() {
    const urlGetPost =
      "https://dw-s3-nice-facebox.osc-fr1.scalingo.io/posts?limit=10000";
    //Options de la requête API
    const optionGetPost = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    // création de la const de réponse qui va chercher les options de l'API
    const responseGetPost = await fetch(urlGetPost, optionGetPost);
    console.log(responseGetPost);

    // Création de la const data qui nous permet la récupération des data stockées dans l'API
    const dataGetPost = await responseGetPost.json();
    console.log(dataGetPost);

    // attribution des elements présent dans l'API à notre data qui est initialement un tableau vide
    this.post = dataGetPost.posts;
    console.log(this.post);
  },
};
</script>
