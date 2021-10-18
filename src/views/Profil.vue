<template>
  <div>
    <!--Appel le composant Navbar -->
    <Navbar></Navbar>

    <!-- Afficher le profil -->
    <div class="profil">
      <p>First Name : {{ firstName }}</p>
      <p>Last Name : {{ lastName }}</p>
      <p>E-mail : {{ email }}</p>
      <p>Age : {{ age }}</p>
      <p>Occupation :{{ occupation }}</p>

      <!--Appel de la method editProfil qui permet le changement de statut booléan
      permettant d'afficher et de masquer les champs de saisies pour modification du profil -->
      <button @click="editProfil">Edit Profil</button>

      <!--Appel de la fonction PutProfil qui envoie les données au serveur  -->
      <form
        @submit.prevent="PutProfil()"
        class="editProfil"
        v-show="showEditProfil"
      >
        <!--Message d'alerte qui confirme à l'utilisateur qu'il a bien éffectué ses changements -->
        <p v-show="this.success == true">Votre profil a bien été modifié !</p>
        <!--v-model sur les inputs afin de récupérer les valeurs saisis par l'utilisateur -->
        <!-- FIRST NAME -->
        <label for="firstName"> First Name : </label>
        <input type="text" id="firstName" v-model="firstName" />
        <!-- LAST NAME -->
        <label for="lastName"> Last Name : </label>
        <input type="text" id="lastName" v-model="lastName" />
        <!-- EMAIL -->
        <label for="email"> E-mail : </label>
        <input type="email" id="email" v-model="email" />
        <!-- AGE -->
        <label for="age"> Age : </label>
        <input type="number" id="age" v-model="age" />
        <!-- OCCUPATION -->
        <label for="occupation"> Occupation : </label>
        <input type="text" id="occupation" v-model="occupation" />
        <!-- BOUTON VALIDER -->
        <input id="btn_update" type="submit" value="Valider" />
      </form>
    </div>

    <!--Attribution des valeurs aux props de "GetPublication.vue"/ 
    Récupération des élements dans le tableau de l'API -->
    <div class="ownPost">
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
      ></GetPublication>

      <button @click="showPost">Clique</button>
    </div>
  </div>
</template>

<script>
// import composants
import Navbar from "../components/Navbar.vue";
import GetPublication from "../components/GetPublication.vue";

export default {
  //Création des data properties
  data() {
    return {
      // data du profil déjà stocké
      firstName: "",
      lastName: "",
      email: "",
      age: 0,
      occupation: "",
      // boolean pour afficher modifier form
      showEditProfil: false,
      // deviens true si modification est effectué
      successEdited: false,
      success: "",
      // array pour les posts
      post: [],
    };
  },
  // récupération des components
  components: {
    Navbar: Navbar,
    GetPublication: GetPublication,
  },
  //Création de mounted qui permet l'affichage au montage de la page de façon asynchronisée
  async mounted() {
    const urlGetProfil = "https://dw-s3-nice-facebox.osc-fr1.scalingo.io/user";
    //Options de la requête API
    const optionGetProfil = {
      method: "GET",
      headers: {
        //récupération du token pour vérifier que l'utilisateur existe bien et puisse accéder a son profil
        Authorization: " bearer " + localStorage.getItem(`@token`),
        "content-type": "application/json",
      },
    };
    // création de la const de réponse qui va chercher les options de l'API
    const responseGetProfil = await fetch(urlGetProfil, optionGetProfil);
    console.log(responseGetProfil);

    // Création de la const data qui nous permet la récupération des data stockées dans l'API
    const dataGetProfil = await responseGetProfil.json();
    console.log(dataGetProfil);

    //Récupération des data stockées par l'API
    this.firstName = dataGetProfil.firstname;
    this.lastName = dataGetProfil.lastname;
    this.email = dataGetProfil.email;
    this.age = dataGetProfil.age;
    this.occupation = dataGetProfil.occupation;

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
  //Création de la method permmettant de modifier le profil
  methods: {
    async PutProfil() {
      const urlPutProfil =
        "https://dw-s3-nice-facebox.osc-fr1.scalingo.io/user";
      //Options de la requête API
      const optionPutProfil = {
        method: "PUT",

        headers: {
          Authorization: " bearer " + localStorage.getItem(`@token`),
          "content-type": "application/json",
        },
        // Ne pas oublier de stringify
        body: JSON.stringify({
          firstname: this.firstName,
          lastname: this.lastName,
          email: this.email,
          age: this.age,
          occupation: this.occupation,
        }),
      };
      // création de la const de réponse qui va chercher les options de l'API
      const response = await fetch(urlPutProfil, optionPutProfil);
      console.log(response);

      // Création de la const data qui nous permet la récupération des data stockées dans l'API
      const dataPutProfil = await response.json();
      console.log(dataPutProfil);
      // Récupération de la data success afin de créer le message de confirmation de modification du profil
      this.success = dataPutProfil.success;

      //Modification des valeurs du profil avec les nouvelles valeurs des inputs grace a la data success
      if (this.success == true) {
        this.firstName = this.inputFirstName;
        this.lastName = this.inputLastName;
        this.email = this.inputEmail;
        this.age = this.inputAge;
        this.occupation = this.inputOccupation;
        // cache edit profole form quand on a fini
        this.showEditProfil = false;
      }
    },
    //methods dans le but d'afficher et masquer les inputs de modification
    editProfil() {
      this.showEditProfil = !this.showEditProfil;
    },
  },
};
</script>

<style>
/**in progress */
</style>