<template>
  <div class="weightBox">
    <div class="top">
      <h3 class="title">重量換算</h3>
      <span class="material-icons cp"  @click="closeBox()">cancel</span>
    </div>
    <hr>
    <div class="weightWrap">
      <input type="number" oninput="if(value.length>16)value=value.slice(0,16)" class="inputBox" v-model="manyUnit">
      <br>
      <div class="options mt8">
        <span class="mr8"><input type="radio" value="kg" name="isUnit" v-model="isUnit">公斤(kg)</span>
        <span class="mr8"><input type="radio" value="g" name="isUnit" v-model="isUnit">公克(g)</span>
        <span><input type="radio" value="lb" name="isUnit" v-model="isUnit">磅(lb)</span>
        <!-- <input type="submit" class="submitBtn" value="換算" @click="getWeight(manyUnit,isUnit)"> -->
      </div>
    </div>
    <div class="weightContent">
      <div class="mr8">{{toKg}} 公斤(kg)</div>
      <div class="mr8"> {{toG}} 公克(g)</div>
      <div>{{toLb}} 磅(lb)</div>
    </div>
  </div>
</template>

<script>
export default {
  data() { // tagTest
    return {
      isUnit: 'kg',
      manyUnit: '',
      kg: null,
      g: null,
      lb: null
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
    toKg() {
      if(this.isUnit == 'kg') {
        return this.maxDecimal(Number(this.manyUnit))
      }else if(this.isUnit == 'g') {
        return this.maxDecimal(Number(this.manyUnit / 1000))
      }else if(this.isUnit == 'lb') {
        return this.maxDecimal(Number(this.manyUnit * 0.453))
      }
    },
    toG() {
      if(this.isUnit == 'kg') {
        return this.maxDecimal(Number(this.manyUnit * 1000))
      }else if(this.isUnit == 'g') {
        return this.maxDecimal(Number(this.manyUnit))
      }else if(this.isUnit == 'lb') {
        return this.maxDecimal(Number(this.manyUnit * 1000 * 0.453))
      }
    },
    toLb() {
      if(this.isUnit == 'kg') {
        return this.maxDecimal(Number(this.manyUnit * 2.204))
      }else if(this.isUnit == 'g') {
        return this.maxDecimal(Number(this.manyUnit /1000 * 2.204))
      }else if(this.isUnit == 'lb') {
        return this.maxDecimal(Number(this.manyUnit))
      }
    },
  }
}
</script>

<style scoped>
  .weightBox {
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

  .weightWrap {
    box-sizing: border-box;
    padding: 10px 20px;
    background: rgba(0, 0, 0, .1);
  }

  .inputBox {
    box-sizing: border-box;
    width: 100%;
  }

  .weightContent {
    display: flex;
    box-sizing: border-box;
    flex-wrap: wrap;
    /* flex-direction: column; */
    padding: 10px 20px;
  }

  .submitBtn {
    margin-top: 8px;
    box-sizing: border-box;
    padding: 2px;
    border: 1px solid #808080;
    border-radius: 5px;
  }

  @media (max-width: 850px) {
    .weightBox {
      width: 95vw;
    }
  }
</style>