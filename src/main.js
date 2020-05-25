import Vue from 'vue'
import App from './App.vue'
import cep from './cep/'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.config.productionTip = false

function loadJSX (fileName) {
  const cs = new CSInterface()
  var extensionRoot = cs.getSystemPath(SystemPath.EXTENSION) + '/jsx/'
  cs.evalScript('$.evalFile("' + extensionRoot + fileName + '")')
}
try {
  loadJSX('json2.js')
} catch (err) {
  console.log(err)
}
Vue.prototype.$cep = cep

new Vue({
  render: h => h(App)
}).$mount('#app')
