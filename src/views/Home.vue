<template>
  <div class="home">
    <Navbar></Navbar>
    <PublicationContent></PublicationContent>
    <GetPublication
      v-for="(element, index) in post"
      :key="index"
      :titlePost="element.title"
      :contentPost="element.content"
    >
    </GetPublication>

    <button @click="Getpost">post</button>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import PublicationContent from "../components/PublicationContent.vue";
import GetPublication from "../components/GetPublication.vue";

export default {
  data() {
    return {
      post: [],
    };
  },

  components: {
    Navbar: Navbar,
    PublicationContent: PublicationContent,
    GetPublication: GetPublication,
  },

  methods: {
    async Getpost() {
      const urlGetPost =
        "https://dw-s3-nice-facebox.osc-fr1.scalingo.io/posts?limit=10000";
      const optionGetPost = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };

      const responseGetPost = await fetch(urlGetPost, optionGetPost);
      console.log(responseGetPost);
      const dataGetPost = await responseGetPost.json();
      console.log(dataGetPost);

      this.post = dataGetPost.posts;
      console.log(this.post);
    },
  },
};
</script>
