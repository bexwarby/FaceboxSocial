<template>
  <form @submit.prevent="postPublication" class="pubcontent_container">
    <!-- l'utilisateur poste son propre article -->
    <!-- TITLE -->
    <label for="title">Titre de post :</label>
    <input id="title" type="text" v-model="title" />
    <!-- CONTENT -->
    <label for="textarea">Ecrivez vos idées ici :</label>
    <textarea name="textcontainer" id="textarea" v-model="content"></textarea>
    <!-- BOUTON POSTER -->
    <input id="btn_pubcontent" type="submit" value="Poster" />
    <!-- Afficher les content du post -->
    <ul>
      <li v-show="success == true">
        <p>
          <b>{{ this.title }}</b>
        </p>
        <p>{{ this.content }}</p>
      </li>
    </ul>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      content: "",
      success: false,
    };
  },
  methods: {
    //Demande asynchronisée permettant d'afficher le poste de l'utilisateur et l'envoi des données saisies au serveur API
    async postPublication() {
      const url = "https://dw-s3-nice-facebox.osc-fr1.scalingo.io/post";
      //Options de la requête API
      const options = {
        method: "POST",
        headers: {
          Authorization: " Bearer " + localStorage.getItem(`@token`),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: this.title,
          content: this.content,
        }),
      };
      // va chercher les options de l'API
      const response = await fetch(url, options);
      console.log(response);
      // la récupération des data en json
      const data = await response.json();
      console.log(data);

      this.success = true;
    },
  },
};
</script>
<style>
.pubcontent_container {
  margin: auto;
  padding: 55px 0;
  display: flex;
  flex-direction: column;
}
.btn_pubcontent {
  margin: auto;
  width: 75px;
}
</style>
