<template>
  <div class="muscleBox" id="muscleBox">
    <div class="top">
      <h3 class="title">{{title}}<span class="material-icons">arrow_drop_down</span></h3>
      <span class="material-icons cp"  @click="closeBox()">cancel</span>
    </div>
    <hr/>
    <div class="content">
      <div class="list">
        <div class="noHaveActions" v-show="isNohaveActions">目前沒有訓練動作，可以主動提供呦</div>
        <div class="loading" v-show="isLoading">Loading中...</div>
        <div class="actionWrap" v-for="(item,index) in trainingAction" :key="index">
          <a class="actions" :href="'http://google.com.tw/search?q='+item"  target="_blank">{{item}}</a>
          <span class="material-icons good" @click="submitGood(item)" :class="{alreadySub: alreadySubmitted.includes(item)}">thumb_up</span>
        </div>
      </div>
      <div class="ps">
        <div>複合性動作皆有輔助肌群共同發力<br/>本列表提供能對該部位大量刺激的訓練動作<br/>當角度或其他部位控制不同時 可能會有不同的壓力模式<br/>解剖圖、肌群名稱及訓練動作具有非正確性 待日後修正<br/></div>
        <div class="advices cp" @click="toggleSuggestion()">提供訓練動作(建構中)</div>
        <SuggestionBox :title="title" :muscleName="muscleName" v-if="isSuggestion"/>
      </div>
    </div>
  </div>
</template>

<script>
import SuggestionBox from './SuggestionBox.vue'
export default {
  components: {
    SuggestionBox,
  },
  props: ['muscleName'],
  data() {
    return {
      title: 'Loading...',
      trainingAction: '',
      alreadySubmitted: [], // 用於存入localStorage 
      isSuggestion: false, 
      isLoading: false,
      isNohaveActions: false
    }
  },
  created() {
    this.isLoading = true
    this.getActions('get', 'actions', this.muscleName)
  },
  mounted(){
    this.clickListener()
    this.initLocalStorage()
  },
  beforeDestroy() {
    document.removeEventListener("click", this.listenerFn,true) // 移除監聽器
  },
  methods: {
    closeBox() {
      this.$emit('muscleClickFatherFn') // 關閉Box組件
    },

    submitGood(item) { // 按讚後push進數組 
      if(this.alreadySubmitted.includes(item)){ // 判斷是否按過讚 若按過則移除元素
        let itemIndex = this.alreadySubmitted.indexOf(item)
        this.alreadySubmitted.splice(itemIndex, 1)
        window.localStorage.setItem('alreadySubmitted', JSON.stringify(this.alreadySubmitted)); // 處理完成後重整訓練動作存入localStorage
        return
      }
      this.alreadySubmitted.push(item)
      window.localStorage.setItem('alreadySubmitted', JSON.stringify(this.alreadySubmitted));
    },

    initLocalStorage() { // 初始化localStorage
      if(window.localStorage.getItem("alreadySubmitted")){ // 如果localStorage有alreadySubmitted 則直接調出來用
        this.alreadySubmitted = JSON.parse(window.localStorage.getItem("alreadySubmitted"))
        return
      }
      window.localStorage.setItem('alreadySubmitted', "[]"); // 若無則新建
    },

    getActions(method, traget, propsMuscleName) {
      let xhr = new XMLHttpRequest()
      let url = `https://focus-muscle-default-rtdb.asia-southeast1.firebasedatabase.app/${traget}.json`
      xhr.open(method, url, true)
      xhr.onreadystatechange = () => { // 留意: 箭頭函數才會指向Vue 用表達式則會指向xhr
        if(xhr.status == 200 && xhr.readyState == 4) {
          let data = xhr.responseText
          this.title = JSON.parse(data)[propsMuscleName].name
          this.trainingAction = JSON.parse(data)[propsMuscleName].actions
          this.isLoading = false
          if(!this.trainingAction) {
            this.isNohaveActions = true
          }
        }
      }
      xhr.send()
    },

    toggleSuggestion() {
      this.isSuggestion = !this.isSuggestion
    },

    clickListener() { // 監聽發生在Box外的點擊
      document.addEventListener("click",this.listenerFn,true)
    },

    listenerFn(e) { // 監聽器事件
      let muscleBoxNode = document.getElementById('muscleBox')
      let navBarNode = document.getElementById('navBar') // 網頁頂部navBar節點
      let isMuscleBoxChildNode = muscleBoxNode.contains(e.target); // 判斷點擊區域是否為MuscleBox 如果是將返回true
      let isNavBarChildNode = navBarNode.contains(e.target)
      if(!isMuscleBoxChildNode && !isNavBarChildNode) {
        this.$emit('muscleClickFatherFn') 
      }
    }
  },
}
</script>

<style scoped>
  .muscleBox {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60vw;
    max-height: 60vh;
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

  .title {
    display: flex;
  }

  .title span {
    align-self: flex-end;
    font-size: 28px;
  }

  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 10px 20px;
  }

  .content {
    padding: 10px 20px;
  }

  .list {
    box-sizing: border-box;
    padding: 5px 15px;
    border-radius: 8px;
    background: rgba(0, 0, 0, .2);
    box-shadow: 0 25px 45px rgba(0, 0, 0, .1);
  }

  .actionWrap {
    display: flex;
    align-items: center;
    line-height: 2;
  }

  .actions {
    font-size: 16px;
    color: #fff;
    text-decoration: none;
  }

  .ps {
    margin-top: 20px;
    font-size: 12px;
    padding: 5px 15px;
    box-sizing: border-box;
    background: rgba(0, 0, 0, .1);
    box-shadow: 0 25px 45px rgba(0, 0, 0, .1);
    backdrop-filter: blur(25px);
    border-radius: 10px;
    color: #fff;
  }

  .advices {
    margin-top: 5px;
    display: inline-block;
    border-bottom:1px solid #fff;
  }

  .good {
    box-sizing: border-box;
    padding-top: 3px;
    font-size: 13px;
    margin-left: 5px;
    cursor: pointer;
    border-radius: 50%;
  }

  .alreadySub {
    border: none;
    color: rgb(133, 189, 253);
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