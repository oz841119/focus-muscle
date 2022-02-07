<template>
  <div class="navBar" id="navBar">
    <h1 class="title">
      <h2>FOUCS</h2>
      <h2>MUSCLE</h2>
    </h1>
    <div class="rightNav">
      <div @click="openWeightBox()">重量換算</div>
      <div @click="openBMIBox">BMI計算</div>
      <transition name="fade">
        <WeightBox class="weightBox" v-if="isWeightBox" @colseBoxFatherFn="openWeightBox"/>
      </transition>
      <transition name="fade">
        <BMIBox class="bmiBox" v-if="isBMIBox" @colseBoxFatherFn="openBMIBox"/>
      </transition>
    </div>
  </div>
</template>

<script>
import WeightBox from './WeightBox.vue'
import BMIBox from './BIMBox.vue'
export default {
  components: {
    WeightBox,
    BMIBox,
  },
  data() {
    return {
      isWeightBox: false,
      isBMIBox: false
    }
  },
  methods: {
    openWeightBox() {
      this.isBMIBox = false
      this.isWeightBox = !this.isWeightBox
    },
    openBMIBox() {
      this.isWeightBox = false
      this.isBMIBox = !this.isBMIBox
    }
  }
}
</script>

<style scoped>
  .navBar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    height: 60px;
    color: #fff;
    background: #000000;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #434343, #000000);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to left, #434343, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  }

  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    font-weight: 700;
    font-size: 16px;
    line-height: 25px;
  }

  .rightNav {
    position: relative;
    display: flex;
    font-size: 12px;
    font-weight: 200;
  }

  .rightNav div {
    cursor: pointer;
    margin-left: 30px;
  }

  .weightBox {
    position: absolute;
    top: 40px;
    right: 0;
  }

  .bmiBox {
    position: absolute;
    top: 40px;
    right: 0;
  }

  @media (max-width: 850px) {
    .navBar {
      height: 50px;
      padding: 0 10px;
    }
    
    .title {
      font-size: 12px;
      line-height: 18px;
    }
  }
</style>