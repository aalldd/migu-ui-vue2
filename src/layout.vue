<template>
  <div class="migu-layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'MiguLayout',
  data(){
    return {
      layoutClass:{hasSider:false}
    }
  },
  mounted() {
    this.$children.forEach(vm=>{
      if(vm.$options.name==='MiguSider'){
        this.layoutClass.hasSider=true
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.migu-layout{
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  &.hasSider{
    flex-direction: row;
  }
}
</style>
