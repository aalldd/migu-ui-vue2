<template>
  <div class="tabs-item" @click="onClick" :class="classes" :data-name="name">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'MiguTabsItem',
  inject: ['eventBus'],
  data () {
    return {
      active: false
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String | Number,
      required: true
    }
  },
  computed: {
    classes () {
      return {
        active: this.active,
        disabled: this.disabled
      }
    }
  },
  created () {
    if (this.eventBus) {
      this.eventBus.$on('update:selected', (name) => {
        this.active = name === this.name;
      })
    }
  },
  methods: {
    onClick () {
      if (this.disabled) { return }
      this.eventBus && this.eventBus.$emit('update:selected', this.name, this)
      this.$emit('click', this)
    }
  }
}
</script>
<style lang="scss" scoped>
$blue: #4A90E2;
$disabled-text-color: grey;
.tabs-item {
  flex-shrink: 0;
  padding: 0 1em;
  cursor: pointer;
  height: 100%;
  min-height: 40px;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  &.active {
    color: $blue;
    font-weight: bold;
  }
  &.disabled {
    color: $disabled-text-color;
    cursor: not-allowed;
  }
}
</style>
