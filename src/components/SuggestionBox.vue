<template>
  <div class="suggestionBox mt8">
    <input type="text" class="mr8" placeholder="輸入您想建議的動作名稱" v-model="advice">
    <input type="text" class="mr8 mt8" placeholder="提供人(可選)" v-model="provider">
    <input type="submit" class="mr8" :value="submitVaule" @click="submit()" :disabled="disabled">
    <transition name="fade">
      <span v-if="isSuccess">{{message}}</span>
    </transition>
  </div>
</template>

<script>
export default {
  props: ['title','muscleName'],
  data() {
    return {
      advice: '',
      provider: '',
      disabled: false,
      submitVaule: '送出',
      isSuccess: false,
      message: '送出成功! 審核後將會新增'
    }
  },
  methods: {
    submit() {
      if(!this.advice) {
        this.isSuccess = true
        this.message = "請輸入動作名稱"
        return
      }
      this.disabled = !this.disabled
      this.submitVaule = '送出中'
      let xhr = new XMLHttpRequest
      let url = "https://focus-muscle-default-rtdb.asia-southeast1.firebasedatabase.app/suggestions.json"
      xhr.open("post", url, true)
      xhr.send(JSON.stringify({muscleName: this.muscleName, action: this.advice, provider: this.provider, date: new Date()}))
      xhr.onreadystatechange = () => {
        if(xhr.status == 200 && xhr.readyState == 4) {
          this.message = "送出成功! 審核後將會新增"
          this.submitVaule = '送出'
          this.isSuccess = true
          setTimeout(() => {
            this.disabled = !this.disabled
            this.message = ''
            this.advice = ''
            this.provider = ''
          }, 3000);
        }
      }
    }
  }
}
</script>

<style>

  input {
    padding: 2px 5px;
    border: none
  }
</style>