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
      const urlPublication =
        "https://dw-s3-nice-facebox.osc-fr1.scalingo.io/post";
      const optionPublication = {
        method: "POST",
        Headers: {
          Authorization: ` Bearer ` + localStorage.getItem(`@token`),
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