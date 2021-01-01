const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover'

Vue.config.productionTip = false
Vue.config.devtools = false

describe( 'Popover', () => {
    //BDD 行为驱动测试
    it( '存在.', () => {
        expect( Popover ).to.be.ok
    } )
    it( '可以设置position', (done) => {
        Vue.component( 'migu-popover', Popover )
        const div = document.createElement( 'div' )
        document.body.appendChild( div )
        div.innerHTML = `<migu-popover position="bottom" ref="a">
        <template slot="content">
            <div>popover内容</div>
        </template>
        <template slot="trigger">
            <button>click me</button>
        </template>
    </migu-popover>`
        const vm = new Vue( {
            el: div
        } )
        vm.$el.querySelector( 'button' ).click()
        vm.$nextTick( () => {
            expect( vm.$refs.a.$refs.contentWrapper.classList.contains( 'position-bottom' ) ).to.be.true
            done()
        } )
    } )
    it( '可以设置trigger', (done) => {
        Vue.component( 'migu-popover', Popover )
        const div = document.createElement( 'div' )
        document.body.appendChild( div )
        div.innerHTML = `<migu-popover trigger="hover" ref="a">
        <template slot="content">
            <div>popover内容</div>
        </template>
        <template slot="trigger">
            <button>click me</button>
        </template>
    </migu-popover>`
        const vm = new Vue( {
            el: div
        } )
        vm.$nextTick(()=>{
            let event=new Event('mounseenter')
            vm.$el.dispatchEvent(event)
            vm.$nextTick(()=>{
                const {contentWrapper}=vm.$refs.a.$refs
                expect(contentWrapper).to.exist
                done()
            })
        })

    } )
} )
