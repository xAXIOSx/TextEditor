import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from "@/store";
import './registerServiceWorker'
import ComponentsUI from './components/UI kit/index'

let app = createApp(App)

ComponentsUI.forEach((component: any)=>{
    app.component(component.name,component)
})

console.log(ComponentsUI)

app.use(store).use(router).mount('#app')
