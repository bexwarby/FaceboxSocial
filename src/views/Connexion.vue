<template>
  <div>
    <div class="connexion">
      <h1>Facebox</h1>
    </div>
    <div class="form_connexion_container">
      <form @submit.prevent class="form_connexion">
        <label for="username">Username</label>
        <input id="username" type="text" />
        <label for="password">Password</label>
        <input id="password" type="password" />
        <router-link to="">Forgot your password ? </router-link>
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
    <router-link to="/Connexion">Connexion</router-link>
  </div>
</template>


<script>
export default {
  methods: {
    async connectUser() {
      const urlConnect = "https://dw-s3-nice-facebox.osc-fr1.scalingo.io/login";
      const optionConnect = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "test@test.fr",
          password: "test",
        }),
      };
      const responseConnect = await fetch(urlConnect, optionConnect);
      console.log(responseConnect);
      const dataConnect = await responseConnect.json();
      console.log(dataConnect);
    },
  },
};
</script>








<style>
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
  margin: 10px auto;
  padding: 8px;
}

#btn_connexion {
  margin: 10px auto;
  width: 40%;
  padding: 12px;
  cursor: pointer;
}

.form_connexion_container label {
  text-align: left;
  margin: 5px 30px;
}
</style>