<template>
  <div>
    <Navbar></Navbar>

    <div class="profil">
      <p>First Name : {{ firstName }}</p>
      <p>Last Name : {{ lastName }}</p>
      <p>E-mail : {{ email }}</p>

      <p>Age : {{ age }}</p>

      <p>Occupation :{{ occupation }}</p>
      <!--Appel de la method editProfil qui permet le changement de statut booléan
      permettant d'afficher et de masquer les champs de saisies pour modification du profil -->
      <button @click="editProfil">Edit Profil</button>

      <div class="editProfil" v-show="showEditProfil">
        <!--Message d'alerte qui confirme à l'utilisateur qu'il a bien éffectué ses changements -->
        <p v-show="this.success == true">Votre profil a bien été modifié !</p>
        <!--v-model sur les inputs afin de récupérer les valeurs saisis par l'utilisateur -->
        <label for="firstName"> First Name : </label>
        <input type="text" id="firstName" v-model="inputFirstName" />

        <label for="lastName"> Last Name : </label>
        <input type="text" id="lastName" v-model="inputLastName" />

        <label for="email"> E-mail : </label>
        <input type="email" id="email" v-model="inputEmail" />

        <label for="age"> Age : </label>
        <input type="number" id="age" v-model="inputAge" />

        <label for="occupation"> Occupation : </label>
        <input type="text" id="occupation" v-model="inputOccupation" />
        <!--Appel de la fonction PutProfil qui envoie les données au serveur  -->
        <button @click="PutProfil">Valider</button>
      </div>
    </div>
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
import Navbar from "../components/Navbar.vue";
import GetPublication from "../components/GetPublication.vue"


export default {
  //Création des data properties
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      age: 0,
      occupation: "",
      inputFirstName: "",
      inputLastName: "",
      inputEmail: "",
      inputAge: 0,
      inputOccupation: "",
      showEditProfil: false,
      successEdited: false,
      success: "",
      post: [],
    };
  },

  components: {
    Navbar: Navbar,
    GetPublication: GetPublication
    
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
          firstname: this.inputFirstName,
          lastname: this.inputLastName,
          email: this.inputEmail,
          age: this.inputAge,
          occupation: this.inputOccupation,
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