<template>
  <div class="home">
    <TopNav/>
    <MuscularAnatomy class="muscularAnatomy"/>
    <a href="https://github.com/oz841119/focus-muscle" target="_blank"><div class="githubImg"><img class="" src="../../assets/img/github.png" alt=""></div></a>
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
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
  }

  .githubImg {
    position: absolute;
    top: 70px;
    right: 10px;
  }
</style>