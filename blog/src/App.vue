<template>
  <div id="app">
    <div class="layui-layout-body">
      <div class="layui-layout layui-layout-admin">
        <div class="layui-header">
          <div class="layui-logo">
            <h1><a href="/"><i class="fa fa-home"></i><span>未来博客</span></a></h1>
          </div>
          <!-- 头部区域（可配合layui已有的水平导航） -->
          <ul class="layui-nav layui-layout-left layui-hide-xs">
            <li class="layui-nav-item side-switch"><a href="javascript:;"><i class="fa fa-dedent"></i></a></li>
            <li class="layui-nav-item"><a href="/">首页</a></li>
          </ul>
          <ul class="layui-nav layui-layout-right">
            <li class="layui-nav-item layui-hide-xs">


              <form class="layui-form search-form" method="get" action="http://www.weilai.info/">
                <input type="search" class="search-field layui-input t-ip" placeholder="输入关键字搜索" value="" name="s"
                       required lay-verify="required" autocomplete="off"/>
              </form>
            </li>
            <li class="layui-nav-item side-btn layui-hide-sm layui-this"><a href="javascript:;"><i
              class="fa fa-bars"></i></a></li>
          </ul>
        </div>
        <div class="side layui-bg-black" id="sidebar-nav">
          <div class="side-logo">
            <h1><a href="/" title=""><i class="fa fa-home"></i><span> 未来博客</span></a></h1>
          </div>
          <div class="layui-side-scroll">
            <div class="user-side">
              <img src="http://weilai.info/wp-content/uploads/2019/02/logo.jpg" alt="logo" class="side-upic"
                   height="80px">
              <div class="t-t">

                <p>
                  找到自己想做的事，并为之坚持！ </p>
                <span><i class="fa fa-map-marker"></i> China</span>
              </div>
              <div class="t-i">
                <a href="javascript:;" target="_blank" rel="nofollow" class="wxbusinesscard"><i
                  class="fa fa-weixin fa-fw"></i>
                  <div class="wxbusinesscard_box">
                    <img src="http://www.weilai.info/wp-content/uploads/2019/02/myweixin.jpg" alt="扫一扫">
                  </div>
                </a>
                <a href="http://wpa.qq.com/msgrd?v=3&uin=2385994655&site=qq&menu=yes" rel="nofollow"
                   target="_blank"><i class="fa fa-qq fa-fw"></i></a>
                <a href="mailto:sybsss@sina.cn" rel="nofollow"><i class="fa fa-envelope fa-fw"></i></a>
              </div>
            </div>
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              background-color="#393D49"
              text-color="#ffffff"
              active-text-color="#ffd04b"
              active-background-color="#000000"
              style="border-right-width: 0px;">
              <el-menu-item index="2">
                <i class="fa fa-circle-o fa-fw"></i>
                <span>首页</span>
              </el-menu-item>
              <el-submenu index="2">
                <template slot="title">
                  <i class="fa fa-fw fa-lemon-o"></i>
                  <span slot="title">类别</span>
                </template>
                <el-menu-item index="2-1"><i class="fa fa-angle-right"></i>&nbsp;&nbsp;前端</el-menu-item>
                <el-menu-item index="2-2"><i class="fa fa-angle-right"></i>&nbsp;&nbsp;后端</el-menu-item>
                <el-menu-item index="2-3"><i class="fa fa-angle-right"></i>&nbsp;&nbsp;工具</el-menu-item>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title">
                  <i class="fa fa-fw fa-smile-o"></i>
                  <span slot="title">页面</span>
                </template>
                <el-menu-item index="3-1"><i class="fa fa-angle-right"></i>&nbsp;&nbsp;博主念叨</el-menu-item>
                <el-menu-item index="3-2"><i class="fa fa-angle-right"></i>&nbsp;&nbsp;文章归档</el-menu-item>
                <el-menu-item index="3-3"><i class="fa fa-angle-right"></i>&nbsp;&nbsp;友情链接</el-menu-item>
                <el-menu-item index="3-4"><i class="fa fa-angle-right"></i>&nbsp;&nbsp;隐私政策</el-menu-item>
              </el-submenu>
            </el-menu>
          </div>
        </div>
        <div class="layui-body">
          <!-- 默认面包屑 -->
          <div class="layui-fluid map">
            <span class="layui-breadcrumb">
            </span>
          </div>
          <div class="layui-fluid main-wp">
            <div class="layui-row main layui-col-space15">
              <div class="layui-fluid main-wp">
                <div class="layui-row main layui-col-space15">
                  <div class="content layui-col-md9 layui-col-lg10">
                    <router-view/>
                  </div>
                  <div class="sidebar layui-col-md3 layui-col-lg2">
                    <div class="column">
                      <!-- 引用文章类型组件 -->
                      <column v-bind:column-list="columnList"></column>
                    </div>
                    <div class="tags">
                      <!-- 引用文章标签组件 -->
                      <tag v-bind:tag-list="tagList"></tag>
                    </div>
                    <!--博主动态 采集 微博  -->
                    <div class="dynamic" style="display: none;">
                      <h3 class="title-sidebar"><i class="fa fa-meh-o"></i>博主念叨 ~ </h3>
                      <ul>
                        <a href="/mylife">
                          <li>
                            <span class="layui-badge-dot layui-bg-gray"></span>
                            <p></p>
                            <p>好像昨天生日，唉，最近过得一团糟，只有代码一直陪伴我</p>
                            <small>2019年06月28日</small>
                          </li>
                        </a>
                        <a href="/mylife">
                          <li>
                            <span class="layui-badge-dot layui-bg-gray"></span>
                            <p></p>
                            <p>最近换工作啦，所以没有更新博客，等慢慢熟悉了，继续更吧，加油！！！</p>
                            <small>2019年04月11日</small>
                          </li>
                        </a>
                        <a href="/mylife">
                          <li>
                            <span class="layui-badge-dot layui-bg-gray"></span>
                            <p></p>
                            <p>最近的项目又用到了NODE的MYSQL模块，我在之前的基础上，对数据库的CURD操作，进行了封装，并且可以满足同时连接多个数据库的需求。</p>
                            <small>2019年03月05日</small>

                          </li>
                        </a>
                        <a href="/mylife">
                          <li>
                            <span class="layui-badge-dot layui-bg-gray"></span>
                            <p></p>
                            <p>自己学会了某种技术并不算很厉害，厉害的是还能轻松的教会其他人！</p>
                            <small>2019年03月04日</small>

                          </li>
                        </a>
                        <a href="/mylife">
                          <li>
                            <span class="layui-badge-dot layui-bg-gray"></span>
                            <p></p>
                            <p>
                              完了，咳嗽了一周，感觉要狗带的节奏。啊啊啊，我还年轻，老婆未取，父母未孝，事业未定，还有一本Node.js的书没看完。。。我还想要个孩子呢。。。。。</p>
                            <small>2019年03月01日</small>

                          </li>
                        </a>
                        <a href="/mylife">
                          <li>
                            <span class="layui-badge-dot layui-bg-gray"></span>
                            <p></p>
                            <p>今天老板来参见会议，并发表了自己的一些方法，我觉得这是我见过他讲的最好的一次，也是我收获最多的一次。甚至提到了一个创业的点子，Very
                              Good~</p>
                            <small>2019年02月25日</small>
                          </li>
                        </a>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div class="footer layui-fluid">
              <div class="layui-row layui-fluid">
                <div class="layui-col-md9">
              <span class="layui-breadcrumb" lay-separator="|">
              <a href="http://www.weilai.info/mylife">博主念叨</a>
              <a href="http://www.weilai.info/archive">文章归档</a>
              <a href="http://www.weilai.info/links">友情链接</a>
              <a href="http://www.weilai.info/privacy-policy">隐私政策</a>
                <br/>
                <span>声明：版权归原作者所有，本站所有数据资源仅供学习与参考，请勿用于商业用途。</span>
              </span>
                </div>
                <div class="layui-col-md3 t-r">
                  <a href="javascript:;" target="_blank" rel="nofollow" class="wxbusinesscard"><i
                    class="fa fa-weixin fa-fw"></i>
                    <div class="wxbusinesscard_box">
                      <img src="http://www.weilai.info/wp-content/uploads/2019/02/myweixin.jpg" alt="扫一扫">
                    </div>
                  </a>
                  <a href="http://wpa.qq.com/msgrd?v=3&uin=2385994655&site=qq&menu=yes" rel="nofollow"
                     target="_blank"><i class="fa fa-qq fa-fw"></i></a>
                  <a href="mailto:sybsss@sina.cn" rel="nofollow"><i class="fa fa-envelope fa-fw"></i></a>
                </div>
                <div class="layui-col-md12 t-copy">
              <span class="layui-breadcrumb" lay-separator="/">
              <span><i class="fa fa-copyright"></i> 2019 <a class="layui-" href="" target="_blank">未来博客</a></span>

              <span>Theme by <a href="http://www.qinshoushou.com" target="_blank">www.qinshoushou.com</a></span>
              <a href="/" target="_blank" rel="nofollow">晋ICP备17009725号</a>
              </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import column from "@/components/column";
  import tag from "@/components/tag";

  export default {
    name: 'App',
    data: () => {
      return {
        tagList: [
          {id: 1, name: "node"},
          {id: 2, name: "vue"},
          {id: 3, name: "electron"},
          {id: 4, name: "nginx"},
          {id: 5, name: "ecshop"},
          {id: 6, name: "php"},
          {id: 7, name: "linux"},
          {id: 8, name: "html"},
          {id: 9, name: "grep"},
          {id: 10, name: "日期"},
          {id: 11, name: "webpack"},
          {id: 12, name: "服务器"},
          {id: 13, name: "ecs"},
          {id: 14, name: "excel"},
          {id: 15, name: "火车头"}
        ],
        columnList: [
          {id: 1, name: "前端", count: 10},
          {id: 2, name: "后端", count: 50},
          {id: 3, name: "工具", count: 1}
        ]
      }
    },
    components: {column, tag},
  }
</script>
<style>
  @import '../static/style.css';
  /*@import '../static/css/font-awesome.min.css';*/
  /*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
  /*}*/
</style>
