<template>
<div>
  <Navbar></Navbar>

  <p>First Name : {{ this.firstname }}</p>
  <p>Last Name : {{ this.lastname }}</p>
  <p>E-mail : {{ this.email }}</p>

  <p>Age : {{ this.age }}</p>

  <p>Occupation :{{ this.occupation }}</p>
  
</div> 
</template>


<script>
import Navbar from "../components/Navbar.vue";
export default {
  data() {
    return {
      age: "",
      email: "",
      lastname: "",
      firstname: "",
      occupation: "",
      id: "",
      getIdUserFromStorage: localStorage.getItem(`@iduser`),
    };
  },
  components: {
    Navbar: Navbar,
  },

  async mounted() {
    const urlGetUserId = `https://dw-s3-nice-facebox.osc-fr1.scalingo.io/user/${this.getIdUserFromStorage}`;
    const optionGetUserId = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: " Bearer " + localStorage.getItem(`@token`),
      },
    };
    const responseGetUserId = await fetch(urlGetUserId, optionGetUserId);
    console.log(responseGetUserId);
    const dataGetUserId = await responseGetUserId.json();
    console.log(dataGetUserId);
    this.age = dataGetUserId.age;
    this.email = dataGetUserId.email;
    this.lastname = dataGetUserId.lastname;
    this.firstname = dataGetUserId.firstname;
    this.occupation = dataGetUserId.occupation;
  },
};
</script>