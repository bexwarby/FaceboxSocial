<template>
  <div>
    <div class="publicationPost">
      <h3>{{ firstname }} {{ lastname }}</h3>
      <h4 class="titlePost">{{ titlePost }}</h4>
      <p class="contentPost">{{ contentPost }}</p>
    </div>
    <div class="likes_container">
      <button @click="PostLike">Fit</button>
      <p>Nombre de Fit : {{this.like}}</p>
    </div>

    <button @click="ShowAddComment">Commenter</button>
    <div class="showComment" v-show="showComment">
      <input type="text" v-model="inputComment" />
      <button @click="[PostComment(), addComment()]">Valider</button>
    </div>
    <div class="comment-container">
      <ul>
        <li v-for="(element, index) in arrayComment" :key="index">
          <p>{{ element }}</p>
        </li>
        <li v-for="(element, index) in commentsPost" :key="index">
          <p>{{ element.firstname }} {{ element.lastname }} a commenté:</p>
          <p>{{ element.content }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titlePost: String,
    contentPost: String,
    idPost: String,
    commentsPost: Array,
    firstname: String,
    lastname: String,
    likePost: Number,
  },
  data() {
    return {
      arrayComment: [],
      inputComment: "",
      success: "",
      showComment: false,
      like: this.likePost
    };
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

      this.success = dataPostComment.success;
    },

    addComment() {
      this.arrayComment.push(this.inputComment);
    },
    ShowAddComment() {
      this.showComment = !this.showComment;
    },

    async PostLike() {
      const urlPostLike =
        "https://dw-s3-nice-facebox.osc-fr1.scalingo.io/post/like";
      const optionPostLike = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: " Bearer " + localStorage.getItem(`@token`),
        },
        body: JSON.stringify({
          postId: this.idPost,
        }),
      };

      const responsePostLike = await fetch(urlPostLike, optionPostLike);
      console.log(responsePostLike);
      const dataPostLike = await responsePostLike.json();
      console.log(dataPostLike);

      if (dataPostLike.success) {
        this.like ++
      }
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
