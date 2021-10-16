<template>
  <div class="pubcontent_container">
    <div class="getpub_top">
      <label for="title"></label>
      <input
        id="title"
        type="text"
        placeholder="Saisissez votre titre"
        v-model="inputTitle"
      />
    </div>
    <div class="getpub_bot">
      <label for="textarea"></label>
      <textarea
        name="textcontainer"
        id="textarea"
        v-model="inputContent"
      ></textarea>
    </div>
    <button class="btn_pubcontent" @click="postPublication">Poster</button>
    <ul>
      <li v-show="success == true">
        <p>{{this.inputTitle}}</p>
        <p>{{this.inputContent}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      inputTitle: "",
      inputContent: "",
      success: false,
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

      this.success = true;
    },
  },
};
</script>
<style>
.pubcontent_container {
  margin: auto;
  padding: 55px 0;
  display: flex;
  flex-direction: column;
}
.btn_pubcontent {
  margin: auto;
  width: 75px;
}
</style>
