<template>
  <div class="home">
    <Navbar></Navbar>
    <PublicationContent></PublicationContent>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import PublicationContent from "../components/PublicationContent.vue";

export default {
  components: {
    Navbar: Navbar,
    PublicationContent: PublicationContent,
  },
};
</script>
