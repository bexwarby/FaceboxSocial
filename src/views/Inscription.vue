<template>
<div class="container">
  <div class="registration_container">
    <div class="leftContain">
      <img src="../assets/img/facebox.svg">
      <p class="addvertissementFacebox"> Si tu te sens FAT</p>
      <p class="addvertissementFacebox"> et que tu veux de venir FIT</p>
      <p class="addvertissementFacebox"> Rejoins notre communauté de CROSSFIT</p>

    </div>
    <div class="rightContain">
    <div>
        <h1>Registration</h1>
      </div>
      <div class="registration">
        <label for="age">Age</label>
        <input type="text" id="age" v-model="inputAge" />
        <label for="occupation">Occupation</label>
        <input type="text" id="occupation" v-model="inputOccupation" />
        <label for="lastName">First Name : </label>
        <input type="text" id="lastName" v-model="inputLastName" />
        <label for="firstName">Last Name : </label>
        <input type="text" id="firstName" v-model="inputFirstName" />
        <label for="email">E-mail : </label>
        <input type="text" id="email" v-model="inputEmail" />
        <label for="password">Password : </label>
        <input type="text" id="password" v-model="inputPassword" />

        <button type="submit" id="button_inscription" @click="CreateAccount">
          Inscription
        </button>
      </div>
    </div>
  
  </div>
  <div>
    <router-link to="/">Home</router-link> |
    <router-link to="/connexion">Connexion</router-link>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      inputLastName: "",
      inputFirstName: "",
      inputEmail: "",
      inputPassword: "",
      inputAge: "",
      inputOccupation: "",
    };
  },

  methods: {
    async CreateAccount() {
      const url = "https://dw-s3-nice-facebox.osc-fr1.scalingo.io/register";

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname: this.inputFirstName,
          lastname: this.inputLastName,
          email: this.inputEmail,
          password: this.inputPassword,
          age: this.inputAge,
          occupation: this.inputOccupation,
        }),
      };

      const response = await fetch(url, options);

      console.log(response);

      const data = await response.json();

      console.log(data);
    },
  },
};
</script>

<style>
.container{
  display: flex;
  flex-direction: column;
}
.registration {
  display: flex;
  flex-direction: column;
}

.registration_container {
  display: flex;
  width: 1000px;
  height: 700px;
  margin: auto;
}
.leftContain{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 600px;
  height: 700px;
  padding-right: 120px;
  font-family: 'Lato', sans-serif;
  font-size: 27px;
  font-weight: 700;
  color: #403c39;

}

.rightContain{
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
