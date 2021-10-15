<template>
  <div>
    <Navbar></Navbar>

    
    <div class="profil">
      <p>First Name : {{ firstName }}</p>
      <p>Last Name : {{ lastName }}</p>
      <p>E-mail : {{ email }}</p>

      <p>Age : {{ age }}</p>

      <p>Occupation :{{ occupation }}</p>

      <button @click="getProfil">Clique</button>

      <button @click="editProfil">Edit Profil</button>

      <div class="editProfil" v-show="showEditProfil">

          

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

          <button @click="PutProfil"> Valider </button>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
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
      showEditProfil: false
    };
  },

  components: {
    Navbar: Navbar,
  },

  methods: {
    async getProfil() {
      const urlGetProfil =
        "https://dw-s3-nice-facebox.osc-fr1.scalingo.io/user";

      const optionGetProfil = {
        method: "GET",

        headers: {
          Authorization: " bearer " + localStorage.getItem(`@token`),
          "content-type": "application/json",
        },
      };

      const responseGetProfil = await fetch(urlGetProfil, optionGetProfil);
      console.log(responseGetProfil);
      const dataGetProfil = await responseGetProfil.json();
      console.log(dataGetProfil);
      this.firstName = dataGetProfil.firstname;
      this.lastName = dataGetProfil.lastname;
      this.email = dataGetProfil.email;
      this.age = dataGetProfil.age;
      this.occupation = dataGetProfil.occupation;
    },

    async PutProfil() {
      const urlPutProfil =
        "https://dw-s3-nice-facebox.osc-fr1.scalingo.io/user";

      const optionPutProfil = {
        method: "PUT",

        headers: {
          Authorization: " bearer " + localStorage.getItem(`@token`),
          "content-type": "application/json",
        },
        body: JSON.stringify({
          firstname: this.inputFirstName,
          lastname: this.inputLastName,
          email: this.inputEmail,
          age: this.inputAge,
          occupation: this.inputOccupation,
        }),
      };
      const response = await fetch(urlPutProfil, optionPutProfil);
      console.log(response);
      const dataPutProfil = await response.json();
      console.log(dataPutProfil);
    },

    editProfil () {

      this.showEditProfil = !this.showEditProfil
    }
  },
};
</script>

<style>
</style>