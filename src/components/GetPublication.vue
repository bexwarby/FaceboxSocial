<template>
  <div>
    <div class="publicationPost">
      <h2 class="titlePost">{{ titlePost }}</h2>
      <p class="contentPost">{{ contentPost }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titlePost: String,
    contentPost: String,
  },
};
</script>

<style scoped>
.getpub_container {
  margin: 50px 0;
  padding: 30px 0;
}
</style>
