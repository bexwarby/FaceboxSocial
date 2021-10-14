<template>
  <div>
    <header>
      <img src="" />
      <input type="text" placeholder="Recherche" />
    </header>

    <div class="nav_vert_container">
      <nav class="vertical_nav">
        <div class="btn_connect">
          <router-link to="/profil"><img src="" />Profil</router-link>
          <router-link to="/"><img src="" />Home</router-link>
          <router-link to=""><img src="" />Shop</router-link>
          <router-link to=""><img src="" />Group</router-link>
        </div>
        <div class="btn_disconnect">
          <router-link to="/connexion"><img src="" />Deconnexion</router-link>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
.nav_vert_container {
  position: fixed;
  top: 50px;
  left: 0;
  bottom: 0;
}
.vertical_nav {
  width: 100%;
  height: 100%;
  background-color: grey;
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
}

.btn_disconnect {
  align-items: flex-end;
}

.test {
  width: 100px;
  height: 2000px;
  background: chocolate;
  margin-left: 400px;
}

.btn_connect {
  display: flex;
  flex-direction: column;
}
</style>
