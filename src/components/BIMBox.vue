<template>
  <div class="BMIBox">
    <div class="top">
      <h3 class="title">BMI計算</h3>
      <span class="material-icons cp"  @click="closeBox()">cancel</span>
    </div>
    <hr>
    <div class="bmiWrap">
      <div>身高<input type="number" v-model="height" oninput="if(value.length>16)value=value.slice(0,16)" class="inputBox">公分</div>
      <div class="mt8" >體重<input type="number" v-model="weight" oninput="if(value.length>16)value=value.slice(0,16)" class="inputBox">公斤</div>
    </div>
    <div class="container">BMI: {{(Number(bmi))}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      height: 0,
      weight: 0,
    }
  },
  methods: {
    closeBox() {
      this.$emit('colseBoxFatherFn')
    },
    maxDecimal(num) {
      return String(num).replace(/^(.*\..{4}).*$/,"$1")
    }
  },
  computed: {
    bmi() {
      if(!(this.weight && this.height)){
        return 0
      }
      let bmi = 0
      let height = 0
      height = Number(this.height/100)
      bmi = Number(this.weight) / Number(height * height)
      return this.maxDecimal(Number(bmi))
    }
  }
}
</script>

<style scoped>
  .BMIBox {
    z-index: 99;
    background: rgba(0, 0, 0, .1);
    border: 1px solid rgba(255, 255, 255, .5);
    border-right: 1px solid rgba(255, 255, 255, .2);
    border-bottom: 1px solid rgba(255, 255, 255, .2);
    box-shadow: 0 25px 45px rgba(0, 0, 0, .1);
    backdrop-filter: blur(25px);
    border-radius: 10px;
    min-width: 300px;
  }

  .title {
    font-weight: 500;
  }

  .top {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
  }

  .bmiWrap {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 10px 20px;
    background: rgba(0, 0, 0, .1);
  }

  /* .inputBox {
    box-sizing: border-box;
    margin: 0 6px;
  } */

  .container {
    padding: 10px 20px;
    font-size: 12px;
  }



  @media (max-width: 850px) {
    .BMIBox {
      width: 95vw;
    }
  }
</style>