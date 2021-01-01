<template>
  <div class="migu-button-group"><slot></slot></div>
</template>
<script>
  export default {
    name:'MiguButtonGroup',
    mounted() {
      for(let node of this.$el.children){
        let name=node.nodeName.toLowerCase()
        if(name!=='button'){
          console.warn(`migu-button-group的子元素应该全是migu-button,但你写的是${name}`)
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
$border-radius:4px;
.migu-button-group{
  display: inline-flex;
  .migu-button{
    border-radius: 0;
    &:not(:first-child){
      margin-left: -1px;
    }
    &:first-child{
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }
    &:last-child{
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
    &:hover{
      position: relative;
      z-index: 1;
    }
  }
}
</style>
