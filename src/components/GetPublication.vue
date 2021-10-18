<template>
  <!-- POST -->
  <div class="post_container">
    <div class="publicationPost">
      <div class="user_name">
        <div @click="navigateToUserProfile" class="profilPost">
          <img src="../assets/img/user.svg" style="width: 50px" />
          <h3>{{ firstname }} {{ lastname }}</h3>
        </div>
      </div>
    </div>
    <div class="mid_container">
      <div class="img_container">
        <img src="../assets/img/muscu.jpg" />
      </div>
      <div class="content_container">
        <h4 class="titlePost">{{ titlePost }}</h4>
        <p class="contentPost">{{ contentPost }}</p>
        <div class="comment_container">
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
    </div>
    <!-- POST -->

    <!--COMMENT/LIKE-->
    <div class="likes_container">
      <div class="like_content">
        <button @click="PostLike">
          <img src="../assets/img/muscle-du-bras.png" />
          Fit
        </button>
        <p>{{ this.like }}</p>
      </div>
      <div class="dislike_content">
        <button @click="PostLike">
          <img src="../assets/img/muscle-du-bras.png" />
          Fat
        </button>
        <p>{{ this.like }}</p>
      </div>
      <div class="comment_content">
        <button class="btnComment" @click="ShowAddComment">
          <img src="../assets/img/commenter.png" />
          Commenter
        </button>
      </div>
    </div>
    <!--COMMENT/LIKE-->
    <!--POST COMMENT-->
    <div class="show_comment" v-show="showComment">
      <input type="text" v-model="inputComment" />
      <button @click="[PostComment(), addComment()]">Valider</button>
    </div>
    <!--POST COMMENT-->
    <!--SHOW COMMENT-->

    <!--SHOW COMMENT-->
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
    userId: String,
  },
  data() {
    return {
      arrayComment: [],
      inputComment: "",
      success: "",
      showComment: false,
      like: this.likePost,
      getId: this.userId,
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
        this.like++;
      }
    },
    async navigateToUserProfile() {
      this.$router.replace({
        name: "ProfilUser",
        params: { userId: this.getId },
      });
    },
  },
};
</script>

<style scoped>
.getpub_container {
  margin: 50px 0;
  padding: 30px 0;
}

.post_container {
  background: #f1f0f1;
  width: 800px;
  height: 535px;
  margin: auto;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  margin-bottom: 30px;
  box-shadow: 1px 1px 2px #d3d3d3;
}
/* Name Container */
.profilPost {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.profilPost img {
  margin-left: 12px;
}

.user_name {
  background: #403c39;
  width: 100%;
  height: 60px;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
}
.user_name h3 {
  color: #e0a102;
  text-decoration: none;
  text-align: left;
  padding: 2px 50px;
  text-transform: uppercase;
}
.user_name a {
  text-decoration: none;
}

.mid_container {
  display: flex;
}
.content_container {
  background: #d3d3d3;
  width: 40%;
  margin-top: 10px;
  margin-right: 10px;
  height: 300px;
}
.content_container p {
  text-align: justify;
}
.content_container h4 {
  margin-top: 0;
}
.img_container {
  width: 60%;
}
.img_container img {
  width: 450px;
  margin-top: 10px;
}
.comment_container {
  height: 75%;
}
.comment_container ul {
  overflow-y: auto;
  height: 100%;
}
.comment_content {
  display: flex;
  align-items: center;
}

.comment_content img {
  width: 36px;
  margin-right: 5px;
}

.likes_container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #e0a102;
  height: 50px;
  margin: 10px 10px 30px 10px;
}
.like_content {
  display: flex;
  margin: 0 0 0 20px;
}
.like_content p {
  margin: 0;
  padding-top: 11%;
  color: #f1f0f1;
}

.dislike_content {
  display: flex;
  margin: 0 0 0 20px;
}
.dislike_content p {
  margin: 0;
  padding-top: 11%;
  color: #f1f0f1;
}

.likes_container button {
  display: flex;
  align-items: center;
  height: 40px;
  margin-right: 10px;
  border: none;
  background: none;
}

.likes_container button:hover {
  color: #f1f0f1;
  transition: 0.4s;
  cursor: pointer;
}

.like_content button img {
  width: 36px;
  padding-right: 5px;
}

.dislike_content button img {
  width: 36px;
  padding-left: 5px;
  transform: rotate(180deg);
}

.show_comment {
  width: 100%;
}

.show_comment input {
  width: 84%;
  height: 40px;
  border-radius: 10px;
  background-color: #d3d3d3;
  cursor: pointer;
  border: white;
  outline: none;
  box-shadow: 1px 1px 2px #403c3979;
}

.show_comment input:focus {
  background-color: hsla(0, 0%, 83%, 0.489);
  transition: 0.6s;
}

.show_comment button {
  margin-left: 22px;
}

.btnComment:hover {
  color: #f1f0f1;
  transition: 0.4s;
  cursor: pointer;
}
</style>
