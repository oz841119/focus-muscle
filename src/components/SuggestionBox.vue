<template>
  <div class="suggestionBox mt8">
    <input type="text" class="mr8" placeholder="輸入您想建議的動作名稱" v-model.trim="advice" :disabled="disabled">
    <input type="text" class="mr8" placeholder="提供人(可選)" v-model="provider" :disabled="disabled">
    <input type="submit" class="submit mr8" :value="submitVaule" @click="submit()" :disabled="disabled">
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
      message: '送出成功! 審核後將會新增',
      nameError: false,
      nameErrorMsg: ''
    }
  },
  methods: {
    submit() {
      const nameNumReg = /^[0-9]*$/
      console.log(nameNumReg.test(this.advice));

      if(!this.advice) {
        this.isSuccess = true
        this.message = "請輸入動作名稱"
        return
      }

      if(nameNumReg.test(this.advice) || this.advice.length <= 1) {
        this.isSuccess = true
        this.message = "請輸入正確的動作名稱"
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