<template>
  <div>
    <header>
      <div class="logoSimplif">
        <img src="../assets/img/f.svg" style="width: 50px" />
      </div>
      <div class="rechercheNavBar">
        <input type="text" placeholder="Recherche" />
      </div>
    </header>

    <div class="nav_vert_container">
      <nav class="vertical_nav">
        <div class="btn_connect">
          <router-link to="/profil"
            ><img
              src="../assets/img/user.svg"
              style="width: 50px"
            /><br />Profil</router-link
          >
          <router-link to="/"
            ><img
              src="../assets/img/home.svg"
              style="width: 44px"
            /><br />Home</router-link
          >
          <router-link to=""
            ><img
              src="../assets/img/boutique.svg"
              style="width: 49px"
            /><br />Shop</router-link
          >
          <router-link to=""
            ><img
              src="../assets/img/communauté.svg"
              style="width: 49px"
            /><br />Group</router-link
          >
        </div>
        <div class="btn_disconnect">
          <router-link to="/connexion" @click="clearLocalStorage"
            ><img src=../assets/img/deconnection.svg style= width:49px /><br />Deconnexion</router-link
          >
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    //methods permettant la perte du token au clic du btn disconnect
    clearLocalStorage() {
      localStorage.clear();
    },
  },
};
</script>

<style scoped>
body {
  font-family: "Lato", sans-serif;
}
.nav_vert_container {
  position: fixed;
  top: 50px;
  left: 0;
  bottom: 0;
}
.vertical_nav {
  width: 110%;
  height: 100%;
  background-color: #808080;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
header {
  background-color: #403c39;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logoSimplif {
  position: absolute;
  left: 96px;
}

.rechercheNavBar input {
  width: 270px;
  color: #403c39;
  font-size: 15px;
}

.rechercheNavBar input:focus {
  outline: none;
  border-width: 3px;
  border-color: #e0a102;
  background-color: #f1f0f1;
  transition: 0.5s;
}

.btn_disconnect {
  align-items: flex-end;
  margin-bottom: 10px;
}

.btn_disconnect a {
  align-items: flex-end;
  text-decoration: none;
  color: #f1f0f1;
  text-shadow: 2px 2px 2px #403c39;
}

.btn_connect {
  display: flex;
  flex-direction: column;
}

.btn_connect a {
  margin-bottom: 28px;
  padding-top: 5px;
  text-decoration: none;
  color: #f1f0f1;
  text-shadow: 2px 2px 2px #403c39;
}

.btn_connect a:hover {
  color: #e0a102;
  transition: 0.8s;
}
</style>
