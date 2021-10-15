<template>
  <div>
    <div class="publicationPost">
      <h2 class="titlePost">{{ titlePost }}</h2>
      <p class="contentPost">{{ contentPost }}</p>
    </div>
    <div>
      <button @click="PostComment">Commenter</button>
      <input type="text" v-model="inputComment" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titlePost: String,
    contentPost: String,
    idPost: String,
  },
  data() {
    return { inputComment: "" };
  },
  methods: {
    async PostComment() {
      const urlPostComment =
        "https://dw-s3-nice-facebox.osc-fr1.scalingo.io/post/comment";
      const optionPostComment = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: " Bearer " + localStorage.getItem(`@token`),
        },
        body: JSON.stringify({
          postId: this.idPost,
          content: this.inputComment,
        }),
      };

      const responsePostComment = await fetch(
        urlPostComment,
        optionPostComment
      );
      console.log(responsePostComment);
      const dataPostComment = await responsePostComment.json();
      console.log(dataPostComment);
    },
  },
};
</script>

<style scoped>
.getpub_container {
  margin: 50px 0;
  padding: 30px 0;
}
</style>
