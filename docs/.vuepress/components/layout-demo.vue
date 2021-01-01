<template>
  <div class="wrapper">
    <migu-layout>
      <migu-header> header </migu-header>
      <migu-layout>
        <migu-sider> sider </migu-sider>
        <migu-content> content </migu-content>
      </migu-layout>
      <migu-footer> footer </migu-footer>
    </migu-layout>
    <br>
    <migu-layout>
      <migu-header> header </migu-header>
      <migu-content> content </migu-content>
      <migu-footer> footer </migu-footer>
    </migu-layout>
    <br>
    <migu-layout>
      <migu-header> header </migu-header>
      <migu-layout>
        <migu-sider> sider </migu-sider>
        <migu-layout>
          <migu-content> content </migu-content>
          <migu-footer> footer </migu-footer>
        </migu-layout>
      </migu-layout>
    </migu-layout>
  </div>
</template>

<script>
import Layout from '../../../src/layout'
import Header from '../../../src/header'
import Sider from '../../../src/sider'
import Content from '../../../src/content'
import Footer from '../../../src/footer'

export default {
  components: {
    'migu-layout': Layout,
    'migu-header': Header,
    'migu-sider': Sider,
    'migu-content': Content,
    'migu-footer': Footer
  }
}
</script>

<style lang="scss" scoped>
$background: #99A9BF;
$wrapper-top: 10px;
$font-color: white;
.wrapper {
  > .migu-layout { height: 30vh;
    > .migu-header { height: 3em; background: $background; }
    > .migu-content { background: lighten($background, 40%); }
    > .migu-layout { height: 6em;
      > .migu-sider { width: 3em; background: lighten($background, 15%); }
      > .migu-content { background: lighten($background, 40%); }
      > .migu-layout{
        > .migu-content{ background: lighten($background, 40%); }
        > .migu-footer { background: $background; }
      }
    }
    > .migu-footer { background: $background; }
  }
}
</style>
