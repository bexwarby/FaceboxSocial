<template>
<div>
  <div class="registration_container">
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
.registration {
  display: flex;
  flex-direction: column;
}

.registration_container {
  width: 400px;
  height: 462px;
  margin: auto;
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
