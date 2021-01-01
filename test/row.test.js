const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
    //BDD 行为驱动测试
    it('存在.', () => {
        expect(Row).to.exist
    })
    it('接收gutter属性', (done) => {
        Vue.component('migu-row', Row)
        Vue.component('migu-col', Col)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = ` <migu-row gutter="20">
        <migu-col span="12"></migu-col>
        <migu-col span="12"></migu-col>
    </migu-row>`
        const vm=new Vue({
            el:div
        })
        setTimeout(()=>{
            const row=vm.$el.querySelector('.row')
            expect(getComputedStyle(row).marginLeft).to.eq('-10px')
            expect(getComputedStyle(row).marginRight).to.eq('-10px')
            let cols=vm.$el.querySelectorAll('.col')
            expect(getComputedStyle(cols[0]).paddingLeft).to.eq('10px')
            expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px')
            done()
            vm.$el.remove()
            vm.$destroy()
        },0)
    })
    it('接收align属性',()=>{
        const div=document.createElement('div')
        document.body.appendChild(div)
        const Constructor=Vue.extend(Row)
        const vm=new Constructor({
            propsData:{
                align:'center'
            }
        }).$mount(div)
        const element=vm.$el
        expect(getComputedStyle(element).justifyContent).to.eq('center')
        div.remove()
        vm.$destroy()
    })
})
