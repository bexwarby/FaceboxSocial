<template>
  <div class="connexion">
    <h1>Facebox</h1>
  </div>
  <div class="form_connexion_container">
    <form class="form_connexion">
      <label for="username">Username</label>
      <input id="username" type="text" />
      <label for="password">Password</label>
      <input id="password" type="password" />
      <router-link to="">Forget your password ? </router-link>
      <input id="btn_connexion" type="submit" value="Connexion" />
    </form>
  </div>
  <router-link to="/">Home</router-link> |
  <router-link to="/Connexion">Connexion</router-link>
</template>


<script>
export default {};
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
}

.form_connexion_container label {
  text-align: left;
  margin: 5px 30px;
}
</style>