import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
document.title = 'FocusMuscle'
new Vue({
  render: h => h(App),
}).$mount('#app')
