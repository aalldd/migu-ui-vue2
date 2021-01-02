<template>
  <button @click="$emit('click')"
          class="migu-button"
          :class="classes"
  >
    <migu-icon class="icon" v-if="icon && !loading" :name="icon"></migu-icon>
    <migu-icon class="loading icon" name="loading" v-if="loading"></migu-icon>
    <div class="migu-button-content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
import Icon from './icon'

export default {
  name: 'MiguButton',
  components: {
    'migu-icon': Icon
  },
  props: {
    icon: {
      type: String,
      default: ''
    },
    iconPosition: {
      type: String,
      default: 'left'
    },
    loading: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: ''
    },
    round: {
      type: Boolean,
      default: false
    },
    speical: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      const {theme, round, iconPosition, speical} = this
      return {
        [`theme-${theme}`]: theme,
        [`round`]: round,
        [`icon-${iconPosition}`]: iconPosition,
        [`speical`]: speical
      }
    }
  }
}
</script>
<style lang="scss" scoped>
$font-size: 14px;
$button-height: 32px;
$color: #333;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
$border-radius-round: 2em;
$button-bg-primary: #56A9FF;
$button-bg-success: #67C23A;
$button-bg-info: #909399;
$button-bg-warn: #E6A23C;
$button-bg-danger: #F56C6C;
$button-bg-kawiyi: pink;
$button-bg: white;
$button-active-bg: #eee;
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.migu-button {
  height: $button-height;
  font-size: $font-size;
  padding: 0 1em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  line-height: $button-height;
  //不对齐就加这个
  vertical-align: top;
  white-space: nowrap;
  overflow: hidden;

  &:hover {
    border-color: $border-color-hover;
  }

  &:active {
    background-color: $border-color;
  }

  &:focus {
    outline: none;
  }

  > .icon {
    order: 1;
    margin-right: .1em;
    margin-left: 0;
  }

  > .migu-button-content {
    order: 2;
  }

  &.icon-right {
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: .1em;
    }

    > .migu-button-content {
      order: 1;
    }

  }

  .loading {
    animation: spin 1s infinite linear;
  }

  &.theme-primary {
    background: $button-bg-primary;
    color: #fff;
  }

  &.theme-success {
    background: $button-bg-success;
    color: #fff;
  }

  &.theme-info {
    background: $button-bg-info;
    color: #fff;
  }

  &.theme-warning {
    background: $button-bg-warn;
    color: #fff;
  }

  &.theme-danger {
    background: $button-bg-danger;
    color: #fff;
  }

  &.theme-kawiyi {
    background: $button-bg-kawiyi;
    color: #fff;
  }

  &.round {
    border-radius: $border-radius-round;
  }

  &.speical {
    /* text */
    text-decoration: none;
    font: 1em 'Droid Sans', sans-serif;
    font-weight: bold;
    text-shadow: rgba(255, 255, 255, 0.5) 0 1px 0;

    /* layout */
    display: inline-block;
    position: relative;
    border-radius: 8px;

    /* effects */
    border-top: 1px solid rgba(255, 255, 255, 0.8);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    background: radial-gradient(ellipse at 50% 0, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.7)),
    url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEQSURBVChTVVCxaoRQEPRD3uHFkFzuIEU+IBASUtgEEggErsr1/oetra2tdiKCxWttBC1EsBO7U2xUFAS9HXk5SDHM291hdvZJ8zyzPM8ZGFiW5UG8D+fz+Uf0XiDcQeh53irs+/6D+ClN0ze8hcl+dfyD7/sb4iPeJGJd1/1GUSTXdc2ktm2PsOacs3EcVayGC/HWsqzVIAxDJonBYZqmL8dxIP6k4Q1hT3gmnCD+tzrLsi2yaprGiqL4FvkeXddVJHGESjneiTfIQ3wKgkBpmka2bfuOalmqqmoHAUVQyrK8ugOo0cdhq6NpmmwYhlsMkyS5/iuOwAbUkq7raL7S5yK0CkEcx/eGYaCPbYxzzi6C1h8/IRQXUAAAAABJRU5ErkJggg=="),
    #80c4ff;
    transition: background 0.2s ease-in-out;

    /* color */
    color: #336999;
    box-shadow: rgba(255, 254, 255, 0.6) 0 0.3em 0.3em inset,
    rgba(255, 255, 255, 0.15) 0 -0.1em 0.3em inset,
    #5390c6 0 0.1em 3px,
    #336999 0 0.3em 1px,
    rgba(0, 0, 0, 0.2) 0 0.5em 5px;
    &:hover{
      background-color: #a8d7ff;
    }
    &:active{
      background:radial-gradient(ellipse at 50% 0,rgba(255,255,255,0),rgba(255,255,255,0)),
      url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEQSURBVChTVVCxaoRQEPRD3uHFkFzuIEU+IBASUtgEEggErsr1/oetra2tdiKCxWttBC1EsBO7U2xUFAS9HXk5SDHM291hdvZJ8zyzPM8ZGFiW5UG8D+fz+Uf0XiDcQeh53irs+/6D+ClN0ze8hcl+dfyD7/sb4iPeJGJd1/1GUSTXdc2ktm2PsOacs3EcVayGC/HWsqzVIAxDJonBYZqmL8dxIP6k4Q1hT3gmnCD+tzrLsi2yaprGiqL4FvkeXddVJHGESjneiTfIQ3wKgkBpmka2bfuOalmqqmoHAUVQyrK8ugOo0cdhq6NpmmwYhlsMkyS5/iuOwAbUkq7raL7S5yK0CkEcx/eGYaCPbYxzzi6C1h8/IRQXUAAAAABJRU5ErkJggg==")
      #a8d7ff;
      box-shadow: rgba(255,255,255,0.6) 0 0.3em 0.3em inset,
      rgba(0,0,0,0.2) 0 -0.1em 0.3em inset,
      rgba(0,0,0,0.4) 0 0.1em 1px,
      rgba(0,0,0,0.2) 0 0.2em 6px;
      transform:translateY(0.2em);
    }
  }
}
</style>
