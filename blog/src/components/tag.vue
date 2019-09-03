<template>
  <div class="tags">
    <h3 class="title-sidebar"><i class="fa fa-tags"></i>标签云</h3>
    <div>
      <a class='layui-btn layui-btn-xs layui-bg-gray' style="font-size: 14px;" v-for="tagItem in tagList">{{tagItem.name}}</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tag",
    props: ['tagList']
  }
</script>

<style scoped>

</style>
