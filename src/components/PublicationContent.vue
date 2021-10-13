<template>
<div>
  <label for="title"></label>
  <input id="title" type="text" placeholder="Saisissez votre titre" />
  <label for="textarea"></label>
  <textarea name="textcontainer" id="textarea"></textarea>
  <button @click="postPublication">Poster</button>
</div>
</template>

<script>
export default {
  methods: {
    async postPublication() {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTY2ZjUxMDUyYmY4MjAwMWU5ZWNjMmUiLCJpYXQiOjE2MzQxNDQ5MTksImV4cCI6MTYzNDIzMTMxOX0.Drx6RUqMWuNk7FZkE1UDrHIYeT_z9OLBFjPT1aRXK5Q";
      const urlPublication =
        "https://dw-s3-nice-facebox.osc-fr1.scalingo.io/post";
      const optionPublication = {
        method: "POST",
        Headers: {
          
          "Content-Type": "application/json",
        },
        Body: JSON.stringify({
          title: "voila mes bicesps",
          content: "tatatat",
        }),
      };
      const responsePublication = await fetch(
        urlPublication,
        optionPublication
      );
      console.log(responsePublication);
      const dataPublication = await responsePublication.json();
      console.log(dataPublication);
    },
  },
};
</script>