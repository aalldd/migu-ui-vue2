<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  name: 'MiguTabs',
  props: {
    selected: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator (value) {
        return ['horizontal', 'vertical'].indexOf(value) >= 0
      }
    }
  },
  data () {
    return {
      eventBus: new Vue()
    }
  },
  provide () {
    return {
      eventBus: this.eventBus
    }
  },
  mounted () {
    this.checkChildren()
    this.selectTab()
  },
  computed:{
    classes(){
      return this.direction === 'horizontal' ? 'hor-tabs' : 'ver-tabs';
    }
  },
  methods:{
    checkChildren(){
      if (this.$children.length === 0) {
        console && console.warn &&
        console.warn('tabs的子组件应该是tabs-head和tabs-nav，但你没有写子组件')
      }
    },
    selectTab(){
      this.$children.forEach((vm) => {
        if (vm.$options.name === 'MiguTabsHead') {
          vm.$children.forEach((childVm) => {
            if (childVm.$options.name === 'MiguTabsItem'
                && childVm.name === this.selected) {
              this.eventBus.$emit('update:selected', this.selected, childVm)
              this.eventBus.$emit('created',this.selected, childVm,this.direction)
            }
          })
        }
      })
    }
  }
}
</script>
<style>
.ver-tabs {
  display: flex;
}
</style>
