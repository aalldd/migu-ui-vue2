import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Footer from './footer'
import content from './content'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Toast from "./toast";
import plugin from './plugin'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsItem from './tabs-item'
import TabsBody from "./tabs-body";
import TabsPane from './tabs-pane'
import Popover from './popover'
import Collapse from './collapse'
import CollapseItem from './collapse-item'
Vue.component('migu-button', Button)
Vue.component('migu-icon', Icon)
Vue.component('migu-button-group', ButtonGroup)
Vue.component('migu-input', Input)
Vue.component('migu-row', Row)
Vue.component('migu-col', Col)
Vue.component('migu-footer', Footer)
Vue.component('migu-content', content)
Vue.component('migu-layout', Layout)
Vue.component('migu-header', Header)
Vue.component('migu-sider', Sider)
Vue.component('migu-toast', Toast)
Vue.component('migu-tabs', Tabs)
Vue.component('migu-tabs-head', TabsHead)
Vue.component('migu-tabs-item', TabsItem)
Vue.component('migu-tabs-body', TabsBody)
Vue.component('migu-tabs-pane', TabsPane)
Vue.component('migu-popover', Popover)
Vue.component('migu-collapse', Collapse)
Vue.component('migu-collapse-item', CollapseItem)
Vue.use(plugin)
new Vue({
    el: '#app',
    data() {
        return {
            loading1: true,
            loading2: true,
            message: 'hi',
            selectedType:'sports',
            selectedTab:['2']
        }
    },
    methods: {
        inputChange(e) {
            console.log(e.target.value)
        },
        showToast1() {
            this.showToast('top')
        },
        showToast2() {
            this.showToast('middle')
        },
        showToast3() {
            this.showToast('bottom')
        },
        showToast(position) {
            this.$toast('<strong>你的智商需要充值</strong>', {
                enableHtml: true,
                closeButton: {
                    text: '已充值',
                    callback() {
                        console.log('他说已经充值智商了')
                    }
                },
                autoClose: 2,
                position: position.trim()
            })
        }
    }
})
