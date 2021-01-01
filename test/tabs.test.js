
const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsItem from '../src/tabs-item'
import TabsBody from "../src/tabs-body";
import TabsPane from '../src/tabs-pane'
Vue.component('migu-tabs', Tabs)
Vue.component('migu-tabs-head', TabsHead)
Vue.component('migu-tabs-item', TabsItem)
Vue.component('migu-tabs-body', TabsBody)
Vue.component('migu-tabs-pane', TabsPane)
Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
    //BDD 行为驱动测试
    it('存在.', () => {
        expect(Tabs).to.exist
    })
    it('接受selected prop',(done)=>{
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `<migu-tabs selected="finance">
        <migu-tabs-head>
            <migu-tabs-item name="woman">
                美女
            </migu-tabs-item>
            <migu-tabs-item name="finance">
                财经
            </migu-tabs-item>
            <migu-tabs-item name="sports">
                体育
            </migu-tabs-item>
        </migu-tabs-head>
        <migu-tabs-body>
            <migu-tabs-pane name="woman">
                美女相关资讯
            </migu-tabs-pane>
            <migu-tabs-pane name="finance">
                财经相关资讯
            </migu-tabs-pane>
            <migu-tabs-pane name="sports">
                体育相关资讯
            </migu-tabs-pane>
        </migu-tabs-body>
    </migu-tabs>`
        const vm=new Vue({
            el:div
        })
        setTimeout(()=>{
            let finance=vm.$el.querySelector(`.tabs-item[data-name="finance"]`)
            expect(finance.classList.contains('active')).to.be.true
            done()
        },1000)
    })
    it('可以接受direction',()=>{

    })
})
