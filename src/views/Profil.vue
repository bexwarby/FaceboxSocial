<template>
    <div>
        <Navbar></Navbar>
        <div class="profil">
            <p>First Name : {{firstName}}</p>
            <p>Last Name : {{lastName}}</p>
            <p>E-mail : {{email}}</p>

            <p>Age : {{age}}</p>
        
            <p>Occupation :{{occupation}}</p> 

            <button @click="getProfil">Clique</button>
        
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
            occupation: ""
          
        }
    },

    components: {
        Navbar: Navbar,
        
    },

    methods: {

       async getProfil() {

        
        const urlGetProfil = "https://dw-s3-nice-facebox.osc-fr1.scalingo.io/user"
        
        const optionGetProfil = {

            method: "GET",
                
            
            headers: {
                Authorization: " bearer " + localStorage.getItem(`@token`),
                "content-type": "application/json",
            }
        }

        const responseGetProfil = await fetch (urlGetProfil, optionGetProfil);
        console.log(responseGetProfil);
        const dataGetProfil = await responseGetProfil.json();
        console.log(dataGetProfil);
        this.firstName = dataGetProfil.firstname
        this.lastName = dataGetProfil.lastname
        this.email = dataGetProfil.email
        this.age = dataGetProfil.age
        this.occupation = dataGetProfil.occupation

        }
    }
    
}
</script>

<style>

</style>