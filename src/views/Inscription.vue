<template>
  <div class="container">
    <div class="registration_container">
      <!--Logo et text container-->
      <div class="leftContain">
        <img src="../assets/img/facebox.svg" />
        <p class="addvertissementFacebox">Si tu te sens FAT</p>
        <p class="addvertissementFacebox">et que tu veux de venir FIT</p>
        <p class="addvertissementFacebox">
          Rejoins notre communauté de CROSSFIT
        </p>
      </div>
      <!--Form inscription container -->
      <div class="rightContain">
        <div>
          <h2>Registration</h2>
        </div>
        <!--v-model sur les inputs afin de récupérer les valeurs saisis par l'utilisateur -->
        <div class="registration">
          <label for="lastName">First Name : </label>
          <input type="text" id="lastName" v-model="inputLastName" />
          <label for="firstName">Last Name : </label>
          <input type="text" id="firstName" v-model="inputFirstName" />
          <label for="email">E-mail : </label>
          <input type="text" id="email" v-model="inputEmail" />
          <label for="password">Password : </label>
          <input type="text" id="password" v-model="inputPassword" />
          <!--création d'un v-if si les champs ne sont pas tous remplis -->
          <p class="p_wrong_email" v-if="this.success == false">
            Veuillez remplir les champs
          </p>
          <!--appel de la fontion qui crée un compte utilisateur et qui envoie les données au serveur au click et au keypress -->

          <button
            type="submit"
            id="button_inscription"
            @click="[CreateAccount(), accessConnexion()]"
            @keyup.enter="CreateAccount"
          >
            Inscription
          </button>
        </div>
      </div>
    </div>
    <div>
      <!--routes qui permettent la navigation-->
      <router-link to="/">Home</router-link> |
      <router-link to="/connexion">Connexion</router-link>
    </div>
  </div>
</template>

<script>
export default {
  //Création des data properties
  data() {
    return {
      inputLastName: "",
      inputFirstName: "",
      inputEmail: "",
      inputPassword: "",
      success: true,
    };
  },
  //Création de la méthode
  methods: {
    //Demande asynchronisée permettant l'inscription de l'utilisateur et l'envoi des données saisies au serveur API
    async CreateAccount() {
      const url = "https://dw-s3-nice-facebox.osc-fr1.scalingo.io/register";
      //Options de la requête API
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // Ne pas oublier de stringify
        body: JSON.stringify({
          firstname: this.inputFirstName,
          lastname: this.inputLastName,
          email: this.inputEmail,
          password: this.inputPassword,
        }),
      };
      // création de la const de réponse qui va chercher les options de l'API
      const response = await fetch(url, options);

      console.log(response);
      // Création de la const data qui nous permet la récupération des data stockées dans l'API
      const data = await response.json();

      console.log(data);
      //Récupération du booléan success généré par l'API afin d'indiqué à l'utilisateur qu'il a bien rempli tous les champs de saisis
      this.success = data.success;

      if (this.success == true) {
        this.$router.push("/connexion");
      }
    },
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
}
.registration {
  display: flex;
  flex-direction: column;
}

.rightContain h2::after{
    content: "";
    display: block;
    width: 25%;
    border: 1px solid #e0a102 ;
    position: relative;
    bottom :14px;
}


.registration_container {
  display: flex;
  width: 1000px;
  height: 700px;
  margin: auto;
}

.leftContain {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 600px;
  height: 700px;
  padding-right: 120px;
  font-family: "Lato", sans-serif;
  font-size: 27px;
  font-weight: 700;
  color: #403c39;
}

.rightContain {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  height: 700px;
 
}

.registration_container input {
  width: 80%;
  border-radius: 5px;
  margin: 10px auto;
  padding: 8px;
}

.registration_container label {
  text-align: left;
  margin: 5px 30px;
}

#button_inscription {
  margin: 10px auto;
  width: 40%;
  padding: 12px;
}
</style>
