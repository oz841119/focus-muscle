<template>
  <div class="home">
    <TopNav/>
    <MuscularAnatomy class="muscularAnatomy"/>
    <div class="githubImg"><img class="" src="../../assets/img/github.png" alt=""></div>
  </div>
</template>

<script>
import MuscularAnatomy from '../MuscularAnatomy.vue'
import TopNav from '../TopNav.vue'
export default {
  components: {
    TopNav,
    MuscularAnatomy
  }
}
</script>

<style scoped>

  .home {
    position: relative;
    height: 100vh;
    background: #bdc3c7;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #2c3e50, #bdc3c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  .githubImg {
    position: absolute;
    top: 70px;
    right: 10px;
  }
</style>