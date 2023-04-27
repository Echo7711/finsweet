import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
app.use(store).use(router).mount('#app')

// 组件按需引入
import {
  Button,
  Card,
  Form,
  Input,
  Layout,
  Menu,
  Space
} from 'ant-design-vue'

app.use(Button)
app.use(Card)
app.use(Form)
app.use(Input)
app.use(Layout)
app.use(Menu)
app.use(Space)
