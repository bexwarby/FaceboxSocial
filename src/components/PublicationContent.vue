<template>
  <div>
    <label for="title"></label>
    <input
      id="title"
      type="text"
      placeholder="Saisissez votre titre"
      v-model="inputTitle"
    />
    <label for="textarea"></label>
    <textarea
      name="textcontainer"
      id="textarea"
      v-model="inputContent"
    ></textarea>
    <button @click="postPublication">Poster</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      inputTitle: "",
      inputContent: "",
    };
  },
  methods: {
    async postPublication() {
      const urlPublication =
        "https://dw-s3-nice-facebox.osc-fr1.scalingo.io/post";
      const optionPublication = {
        method: "POST",
        headers: {
          Authorization: " Bearer " + localStorage.getItem(`@token`),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: this.inputTitle,
          content: this.inputContent,
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
