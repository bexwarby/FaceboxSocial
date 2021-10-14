<template>
  <div class="home">
    <Navbar></Navbar>
    <PublicationContent></PublicationContent>
    <GetPublication
      v-for="(element, index) in post"
      :key="index"
      :titlePost="element.title"
      :contentPost="element.content"
    ></GetPublication>
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
    async mounted() {
      const urlGetPost = "https://dw-s3-nice-facebox.osc-fr1.scalingo.io/posts";
      const optionGetPost = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        Queryparameters: JSON.stringify({
          page: Number(0),
          limit: Number(20),
        }),
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
