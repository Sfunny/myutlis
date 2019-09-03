<template>
  <div class="articleList">

              <!-- 文章列表 -->
              <div id="articleList" >
                <div v-for="articleItem in articleList" class="title-article list-card">
                  <router-link to="/articleItem">
                    <h1>{{articleItem.title}}</h1>
                    <p>
                    <p>{{articleItem.content}}</p>
                  </router-link>
                  <div class="title-msg">
                    <span><i class="fa fa-folder"></i> {{articleItem.type}}</span>
                    <span><i class="fa fa-clock-o"></i> {{articleItem.dateTime}} </span>
                    <span class="layui-hide-xs"><i class="fa fa-eye"></i>  {{articleItem.preview}}次</span>
                    <span class="layui-hide-xs"><i class="fa fa-comments-o"></i> {{articleItem.comment}}条</span>
                  </div>
                </div>
              </div>
              <!--文章列表结束-->

              <!--分页-->
              <div class="page-typecho">
                <div class="layui-progress" lay-filter="page_loading">
                  <div class="layui-progress-bar" lay-percent="2%"></div>
                </div>
                <div class="layui-laypage layui-laypage-molv" id="pagination">
                  <a @click="loadMore">LOAD MORE</a></div>
              </div>
              <!--分页  end-->

            </div>


</template>

<script>
  export default {
    name: "articleList",
    data: function () {
      return {
        articleList: [
          {
            id: 1,
            title: '算法合集',
            content: "树形结构反向解析 现有json结构如下： ...",
            dateTime: "2019-07-05",
            type: "前端",
            preview: "200",
            comment: "205"
          }, {
            id: 2,
            title: '原生JS获取坐标',
            content: "JS获取元素的offsetTop,offsetLeft等属性 obj.clientWidth //获取元素的宽度（width+padding）\n" +
              "                      obj.clientHeight //元素的高度 obj.offsetLeft //元素相对于父元素的left obj.offsetTop\n" +
              "                      //元素相对于父元素的top obj.offsetWidth //元素的宽度(width+padding+borde&hellip; ... ",
            dateTime: "2019-07-05",
            type: "前端",
            preview: "200",
            comment: "205"
          }, {
            id: 3,
            title: 'VSCODE配置eslint校验和保存自动修复',
            content: "VSCODE 配置eslint规则和自动修复 vscode安装以下插件 EsLint、vetur、Prettier - Code formatter ...",
            dateTime: "2019-07-05",
            type: "前端",
            preview: "200",
            comment: "205"
          }, {
            id: 4,
            title: '从零搭建vue单文件组件项目',
            content: "创建文件 App.vue ...",
            dateTime: "2019-07-05",
            type: "前端",
            preview: "200",
            comment: "205"
          }, {
            id: 5,
            title: 'vscode使用',
            content: "VSCODE配置项目，F5启动 npm launch.json文件配置启动，打开谷歌或火狐浏览器{ \"version\": \"0.2.0\",\n" +
              "                      \"configurations\": [ { \"type\": \"chrome\", \"request\": \"launch\", \"name\": \"Launch\n" +
              "                      Chrome\", \"url\": \"http://localhost:9528\", \"webRoot\": \"&hellip; ... ",
            dateTime: "2019-07-05",
            type: "前端",
            preview: "200",
            comment: "205"
          }
        ],
        pageIndex: 2,
      }
    },
    methods: {
      loadMore: function () {
        let _elsf = this;
        _elsf.articleList = _elsf.articleList.concat(_elsf.articleList);
        _elsf.pageIndex += 1;
        this.articleList = _elsf.articleList;
        this.pageIndex = _elsf.pageIndex;
        console.log(this.articleList);
      }
    },

  }
</script>

<style scoped>
  @import '../../static/style.css';
</style>
