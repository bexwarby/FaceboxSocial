<template>
  <div>
    <div class="connexion">
      <img class="faceboxLogo" src="../assets/img/facebox.svg" alt="logo Facebox">
    </div>
    <div class="form_connexion_container">
      <form @submit.prevent class="form_connexion">
        <label for="username">E-mail</label>
        <input id="username" type="email" v-model="inputEmail" />
        <label for="password">Password</label>
        <input id="password" type="password" v-model="inputPassword" />
        <router-link to="">Forgot your password ? </router-link>
        <p v-if="!connectUser">wrong password or email</p>
        <input
          id="btn_connexion"
          @click="connectUser"
          type="submit"
          value="Connexion"
          @keyup.enter="connectUser"
        />
      </form>
    </div>
    <router-link to="/">Home</router-link> |
    <router-link to="/inscription">Inscription</router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      inputEmail: "",
      inputPassword: "",
      success: true,
    };
  },
  methods: {
    async connectUser() {
      const urlConnect = "https://dw-s3-nice-facebox.osc-fr1.scalingo.io/login";
      const optionConnect = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.inputEmail,
          password: this.inputPassword,
        }),
      };
      const responseConnect = await fetch(urlConnect, optionConnect);
      console.log(responseConnect);
      const dataConnect = await responseConnect.json();
      console.log(dataConnect);
      localStorage.setItem("@token", dataConnect.token);
      this.success = dataConnect.success;
      if (this.success == false) {
        this;
      } else {
        return false;
      }
    },
  },
};
</script>
<style>
*{
  font-family: 'Lato', sans-serif;
}
.form_connexion {
  display: flex;
  flex-direction: column;
}

.form_connexion_container {
  width: 400px;
  height: 462px;
  margin: auto;
}
.form_connexion_container input {
  width: 80%;
  border-radius: 5px;
  margin: 20px auto;
  padding: 8px;
  color: #e0a102;
  font-size: 18px;
  font-weight: 900;
 
}
.form_connexion input:hover{
  outline: none;
   border-width: 2px;
   border-color: #e0a102;
   transition:0.5s;
}

.form_connexion input:focus{
  outline: none;
  border-width: 4px;
  border-color: #403c39 #e0a102 #403c39 #e0a102;
  background-color: #f1f0f176;

}

#btn_connexion {
  margin: 10px auto;
  width: 40%;
  padding: 12px;
  cursor: pointer;
  background-color: #403c39;
  color: #f1f0f1;
}

.form_connexion_container label {
  text-align: left;
  margin: 5px 30px;
}

.faceboxLogo {
  width: 345px;
  margin-bottom: 70px;
}
</style>
