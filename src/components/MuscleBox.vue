<template>
  <div class="muscleBox">
    <div class="top">
      <h3 class="title">{{title}}</h3>
      <span class="closeBtn" @click="closeBox">關閉</span>
    </div>
    <hr/>
      <div class="content">
        <a class="actions mt8" v-for="(item,index) in trainingAction" :key="index" :href="'http://google.com.tw/search?q='+item"  target="_blank">{{item}}<br/></a>
        <div class="ps">
          <div>複合性動作皆有輔助肌群共同發力<br/>本列表提供能對該部位大量刺激的訓練動作<br/>當角度或其他部位控制不同時 可能會有不同的壓力模式<br/>解剖圖、肌群名稱及訓練動作具有非正確性 待日後修正<br/></div>
          <div class="advices cp">提供意見(建構中)</div>
        </div>
      </div>
  </div>
</template>

<script>
import trainingActionJSON from '../assets/json/trainingAction.json'
export default {
  props: ['muscleName'],
  data() {
    return {
      title: '',
      trainingAction: ''
    }
  },
  mounted(){
    this.judgmentMuscleName(this._props.muscleName)
  },
  methods: {
    closeBox() {
      this.$emit('muscleClickFatherFn')
    },
    judgmentMuscleName(propsMuscleName) {
      this.title = trainingActionJSON[propsMuscleName].name
      this.trainingAction = trainingActionJSON[propsMuscleName].actions
    }
  }
}
</script>

<style scoped>
  .muscleBox {
    position: absolute;
    /* bottom: 10%; */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60vw;
    /* height: 70vh; */
    max-height: 60vh;
    /* background-color: #fff;
    background: #F8F8F8; 
    border-radius: 8px;
    border: solid #BDBDBD 0; 
    box-shadow: 6px 5px 22px rgba(0, 0, 0, .1); */
    overflow: auto;

    background: rgba(0, 0, 0, .1);
    border: 1px solid rgba(255, 255, 255, .5);
    border-right: 1px solid rgba(255, 255, 255, .2);
    border-bottom: 1px solid rgba(255, 255, 255, .2);
    box-shadow: 0 25px 45px rgba(0, 0, 0, .1);
    backdrop-filter: blur(25px);
    border-radius: 10px;
    color: #fff
  }

  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 10px 20px;
  }
  
  .closeBtn {
    cursor: pointer;
  }

  .content {
    padding: 10px 20px;
  }

  .actions {
    font-size: 16px;
    color: #fff;
    text-decoration: none;
  }

  .ps {
    margin-top: 20px;
    font-size: 12px;
    padding: 4px 4px;
    box-sizing: border-box;
    background: rgba(0, 0, 0, .1);
    box-shadow: 0 25px 45px rgba(0, 0, 0, .1);
    backdrop-filter: blur(25px);
    border-radius: 10px;
    color: #fff
  }

  .advices {
    margin-top: 5px;
    display: inline-block;
    border-bottom:1px solid #fff;
  }

  @media (max-width: 850px) {
    .muscleBox {
      transform: translate(-50%, -50%);
      width: 98vw;
    }
    .actions {
      font-size: 12px;
    }
  }
</style>