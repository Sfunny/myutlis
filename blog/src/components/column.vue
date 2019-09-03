<template>
  <div>
    <h3 class="title-sidebar"><i class="fa fa-folder"></i>栏目分类</h3>
    <ul id="" class="">
      <li class="menu-item menu-item-type-taxonomy menu-item-object-category" v-for="columnItem in columnList">
        <a href="http://www.weilai.info/category/front_end"><i class="fa fa-folder"></i>{{columnItem.name}}<span
          class="layui-badge layui-bg-gray">{{columnItem.count}}</span></a>
      </li>
      <!--<li-->
      <!--class="menu-item menu-item-type-taxonomy menu-item-object-category current-post-ancestor current-menu-parent current-post-parent menu-item-16">-->
      <!--<a href="http://www.weilai.info/category/front_end"><i class="fa fa-folder"></i> 前端<span-->
      <!--class="layui-badge layui-bg-gray">22</span></a></li>-->
      <!--<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-18"><a-->
      <!--href="http://www.weilai.info/category/rear_end"><i class="fa fa-folder"></i> 后端<span-->
      <!--class="layui-badge layui-bg-gray">10</span></a></li>-->
      <!--<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-264"><a-->
      <!--href="http://www.weilai.info/category/tool"><i class="fa fa-folder"></i> 工具<span-->
      <!--class="layui-badge layui-bg-gray">3</span></a></li>-->
    </ul>
  </div>
</template>

<script>
  export default {
    name: "column",
    props: ["columnList"]
  }
</script>

<style scoped>

</style>
