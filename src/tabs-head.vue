<template>
  <div class="tabs-head">
    <div class="horHead" v-show="direction==='horizontal'">
      <slot></slot>
      <div class="line" ref="line"></div>
      <div class="actions-wrapper">
        <slot name="actions"></slot>
      </div>
    </div>
    <div class="verHead" v-show="direction==='vertical'">
      <slot></slot>
      <div class="ver-line" ref="verLine"></div>
      <div class="actions-wrapper">
        <slot name="actions"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MiguTabsHead',
  inject: ['eventBus'],
  data() {
    return {
      direction: 'horizontal'
    }
  },
  mounted() {
    this.getDirection()
    this.setLine()
  },
  methods: {
    getDirection() {
      this.eventBus.$on('created', (item, vm, direction) => {
        this.direction = direction
      })
      this.setLine('created')
    },
    setLine() {
      this.$nextTick(() => {
        this.getLine('update:selected')
      })
    },
    getLine(method) {
      this.eventBus.$on(method, (item, vm) => {
        let {width, height} = vm.$el.getBoundingClientRect()
        const left = vm.$el.offsetLeft
        const top = vm.$el.offsetTop
        this.$refs.line.style.width = `${width}px`
        this.$refs.line.style.left = `${left}px`
        this.$refs.verLine.style.height = `${height}px`
        this.$refs.verLine.style.top = `${top}px`
      })
    }
  }
}
</script>
<style scoped lang="scss">
$tab-height: 40px;
$blue: #4A90E2;
$border-color: #ddd;
.tabs-head {
  > .horHead {
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    position: relative;
    border-bottom: 1px solid $border-color;

    > .line {
      position: absolute;
      bottom: 0;
      border-bottom: 1px solid $blue;
      transition: all 350ms;
    }

    > .actions-wrapper {
      margin-left: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 1em;
    }
  }

  > .verHead {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    border-right: 1px solid $border-color;

    > .ver-line {
      position: absolute;
      right: 0;
      border-right: 1px solid $blue;
      transition: all 350ms;
    }

    > .actions-wrapper {
      margin-top: 50px;
    }
  }
}
</style>
