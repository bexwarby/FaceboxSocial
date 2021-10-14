<template>
  <div class="home">
    <Navbar></Navbar>
    <PublicationContent></PublicationContent>
    <GetPublication></GetPublication>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import PublicationContent from "../components/PublicationContent.vue";
import GetPublication from "../components/GetPublication.vue";

export default {
  components: {
    Navbar: Navbar,
    PublicationContent: PublicationContent,
    GetPublication: GetPublication,
  },

  methods: {
    async mounted() {
      const GetPost = "https://dw-s3-nice-facebox.osc-fr1.scalingo.io/posts";
      const optionGetPost = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          page: Number,
          limit: Number,
        },
      };
    },
  },
};
</script>
