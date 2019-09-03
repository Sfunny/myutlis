<template>
  <div class="article">
          <!-- 文章内容 -->
          <div class="title-article">
            <h1>vscode使用 </h1>
            <div class="title-msg">
              <span><i class="fa fa-user"></i> 福尔摩斯对我笑</span>
              <span><i class="fa fa-clock-o"></i> 2019-05-30 </span>
              <span><i class="fa fa-eye"></i> 153 次</span>
              <span><i class="fa fa-comments-o"></i> 0条</span>
            </div>
          </div>
          <div class="text">
            <h3>VSCODE配置项目，F5启动 npm</h3>
            <ul>
              <li>launch.json文件配置启动，打开谷歌或火狐浏览器
                <pre>
                  <code>{
                "version": "0.2.0",
                "configurations": [
                  {
                    "type": "chrome",
                    "request": "launch",
                    "name": "Launch Chrome",
                    "url": "http://localhost:9528",
                    "webRoot": "${workspaceFolder}/src",
                    "breakOnLoad": true,
                    "sourceMapPathOverrides": {
                      "webpack:///./src/*": "${webRoot}/*"
                    }
                  },
                  {
                    "type": "firefox",
                    "request": "launch",
                    "name": "HCS: firefox",
                    "url": "http://localhost:9528",
                    "webRoot": "${workspaceFolder}/src",
                    "preLaunchTask": "RunNode",
                    "pathMappings": [{ "url": "webpack:///src/", "path": "${webRoot}/" }]
                  }
                ]
              }
</code></pre>
              </li>
              <li>preLaunchTask是用来启动npm的，新建一个文件task.json，文件名名字不能改
                <pre><code>{
    "version": "2.0.0",
    "tasks": [
      {
        "label": "RunNode",
        "type": "npm",
        "script": "dev",
        "problemMatcher": []
      }
    ]
}
</code></pre>
                <ul>
                  <li>F5启动即可</li>
                </ul>
              </li>
            </ul>
            <h3>VSCODE插件开发</h3>
            <ul>
              <li>package.json常用配置</li>
            </ul>
            <pre><code>{
	// 插件的名字，应全部小写，不能有空格
	"name": "vscode-plugin-demo",
	// 插件的友好显示名称，用于显示在应用市场，支持中文
	"displayName": "VSCode插件demo",
	// 描述
	"description": "VSCode插件demo集锦",
	// 关键字，用于应用市场搜索
	"keywords": ["vscode", "plugin", "demo"],
	// 版本号
	"version": "1.0.0",
	// 发布者，如果要发布到应用市场的话，这个名字必须与发布者一致
	"publisher": "sxei",
	// 表示插件最低支持的vscode版本
	"engines": {
		"vscode": "^1.27.0"
	},
	// 插件应用市场分类，可选值： [Programming Languages, Snippets, Linters, Themes, Debuggers, Formatters, Keymaps, SCM Providers, Other, Extension Packs, Language Packs]
	"categories": [
		"Other"
	],
	// 插件图标，至少128x128像素
	"icon": "images/icon.png",
	// 扩展的激活事件数组，可以被哪些事件激活扩展，后文有详细介绍
	"activationEvents": [
		"onCommand:extension.sayHello"
	],
	// 插件的主入口
	"main": "./src/extension",
	// 贡献点，整个插件最重要最多的配置项
	"contributes": {
		// 插件配置项
		"configuration": {
			"type": "object",
			// 配置项标题，会显示在vscode的设置页
			"title": "vscode-plugin-demo",
			"properties": {
				// 这里我随便写了2个设置，配置你的昵称
				"vscodePluginDemo.yourName": {
					"type": "string",
					"default": "guest",
					"description": "你的名字"
				},
				// 是否在启动时显示提示
				"vscodePluginDemo.showTip": {
					"type": "boolean",
					"default": true,
					"description": "是否在每次启动时显示欢迎提示！"
				}
			}
		},
		// 命令
		"commands": [
			{
				"command": "extension.sayHello",
				"title": "Hello World"
			}
		],
		// 快捷键绑定
		"keybindings": [
			{
				"command": "extension.sayHello",
				"key": "ctrl+f10",
				"mac": "cmd+f10",
				"when": "editorTextFocus"
			}
		],
		// 菜单
		"menus": {
			// 编辑器右键菜单
			"editor/context": [
				{
					// 表示只有编辑器具有焦点时才会在菜单中出现
					"when": "editorFocus",
					"command": "extension.sayHello",
					// navigation是一个永远置顶的分组，后面的@6是人工进行组内排序
					"group": "navigation@6"
				},
				{
					"when": "editorFocus",
					"command": "extension.demo.getCurrentFilePath",
					"group": "navigation@5"
				},
				{
					// 只有编辑器具有焦点，并且打开的是JS文件才会出现
					"when": "editorFocus &amp;&amp; resourceLangId == javascript",
					"command": "extension.demo.testMenuShow",
					"group": "z_commands"
				},
				{
					"command": "extension.demo.openWebview",
					"group": "navigation"
				}
			],
			// 编辑器右上角图标，不配置图片就显示文字
			"editor/title": [
				{
					"when": "editorFocus &amp;&amp; resourceLangId == javascript",
					"command": "extension.demo.testMenuShow",
					"group": "navigation"
				}
			],
			// 编辑器标题右键菜单
			"editor/title/context": [
				{
					"when": "resourceLangId == javascript",
					"command": "extension.demo.testMenuShow",
					"group": "navigation"
				}
			],
			// 资源管理器右键菜单
			"explorer/context": [
				{
					"command": "extension.demo.getCurrentFilePath",
					"group": "navigation"
				},
				{
					"command": "extension.demo.openWebview",
					"group": "navigation"
				}
			]
		},
		// 代码片段
		"snippets": [
			{
				"language": "javascript",
				"path": "./snippets/javascript.json"
			},
			{
				"language": "html",
				"path": "./snippets/html.json"
			}
		],
		// 自定义新的activitybar图标，也就是左侧侧边栏大的图标
		"viewsContainers": {
			"activitybar": [
				{
					"id": "beautifulGirl",
					"title": "美女",
					"icon": "images/beautifulGirl.svg"
				}
			]
		},
		// 自定义侧边栏内view的实现
		"views": {
			// 和 viewsContainers 的id对应
			"beautifulGirl": [
				{
					"id": "beautifulGirl1",
					"name": "国内美女"
				},
				{
					"id": "beautifulGirl2",
					"name": "国外美女"
				},
				{
					"id": "beautifulGirl3",
					"name": "人妖"
				}
			]
		},
		// 图标主题
		"iconThemes": [
			{
				"id": "testIconTheme",
				"label": "测试图标主题",
				"path": "./theme/icon-theme.json"
			}
		]
	},
	// 同 npm scripts
	"scripts": {
		"postinstall": "node ./node_modules/vscode/bin/install",
		"test": "node ./node_modules/vscode/bin/test"
	},
	// 开发依赖
	"devDependencies": {
		"typescript": "^2.6.1",
		"vscode": "^1.1.6",
		"eslint": "^4.11.0",
		"@types/node": "^7.0.43",
		"@types/mocha": "^2.2.42"
	},
	// 后面这几个应该不用介绍了
	"license": "SEE LICENSE IN LICENSE.txt",
	"bugs": {
		"url": "https://github.com/sxei/vscode-plugin-demo/issues"
	},
	"repository": {
		"type": "git",
		"url": "https://github.com/sxei/vscode-plugin-demo"
	},
	// 主页
	"homepage": "https://github.com/sxei/vscode-plugin-demo/blob/master/README.md"
}

</code></pre>
            <ul>
              <li>编辑器命令</li>
            </ul>
            <pre><code>
context.subscriptions.push(vscode.commands.registerTextEditorCommand('extension.testEditorCommand', (textEditor, edit) =&gt; {
console.log('您正在执行编辑器命令！');
console.log(textEditor, edit);
}));


</code></pre>
            <ul>
              <li>获取所有命令</li>
            </ul>
            <pre><code>
vscode.commands.getCommands().then(allCommands =&gt; {
console.log('所有命令：', allCommands);
});
</code></pre>
            <ul>
              <li>通知</li>
            </ul>
            <pre><code>vscode.window.setStatusBarMessage('你好，前端艺术家！');
</code></pre>
          </div>
          <div class="tags-text">
            <i class="fa fa-tags"></i>标签:
            无
          </div>
          <!--文章内容结束-->
          <!--打赏-->
          <div class="reward" id="layerDemo">
            <button data-method="reward" data-type="auto" class="layui-btn layui-btn-danger"><i class="fa fa-heart"></i>
              打赏支持
            </button>

          </div>
          <!--打赏 end-->
          <!-- 版权说明 -->
          <div class="copy-text">
            <p>
              非特殊说明，本博所有文章均为博主原创。
            </p>
            <p class="hidden-xs">
              如若转载，请注明出处：<a
              href="http://www.weilai.info/front_end/376.html">http://www.weilai.info/front_end/376.html</a>
            </p>
          </div>
          <!-- 版权说明 end -->
          <!--上一篇 下一篇-->
          <div class="page-text">
            <div>
              <span class="layui-badge layui-bg-gray">上一篇</span>
              <!-- 第一个参数$format定义链接的格式或者说显示样式默认为    « %link  ,其中%link的内容在第二个参数中定义

                                    第二个参数$link定义第一个参数中%link的显示内容，默认为%title,即文章标题，你也可以使用其它文字代替。

                                    第三个参数$in_same_cat定义是否只显示同一分类下的文章，默认为否，即显示全部文章。

                                    第四个参数$excluded_categories定义排除的分类ID，即不显示这些分类ID下的文章 -->
              <a href="http://www.weilai.info/front_end/372.html" rel="prev">VUEX的简单使用</a></div>
            <div>
              <span class="layui-badge layui-bg-gray">下一篇</span>
              <a href="http://www.weilai.info/front_end/380.html" rel="next">从零搭建vue单文件组件项目</a></div>

          </div>
          <!--上一篇 下一篇 end-->
          <!--文章作者-->
          <div class="user-text">
            <a class="t-pic" href="/"><img src="http://weilai.info/wp-content/uploads/2019/02/logo.jpg" width="60"
                                           alt="头像也是LOGO" class="layui-circle"></a>
            <div class="t-user">
              <a href="/"><strong>未来博客</strong></a>
              <span class="layui-badge layui-bg-orange">博主大人</span>
            </div>
            <div class="u-r">
              <div class="t-say">
                到了这个年纪，不应该再彷徨！
              </div>
              <div class="t-icon">
                <a href="http://www.qinshoushou.com" target="_blank"><i class="fa fa-home"></i></a>
                <a href="http://wpa.qq.com/msgrd?v=3&amp;uin=1170371716&amp;site=qq&amp;menu=yes" rel="nofollow"
                   target="_blank"><i class="fa fa-qq"></i></a>
                <a href="https://weibo.com/2624315293/" rel="nofollow" target="_blank"><i class="fa fa-weibo"></i></a>
              </div>
            </div>
          </div>
          <!--文章作者 end-->
          <!--相关阅读-->
          <div class="relates">
            <h3 class="title-sidebar">最新文章</h3>
            <ul class="layui-row layui-col-space15">
              <li class="layui-col-md6 layui-col-xs12">
                <a href="http://www.weilai.info/front_end/394.html"><i class=" fa fa-file-text-o"></i>算法合集</a></li>
              <li class="layui-col-md6 layui-col-xs12"><a
                href="http://www.weilai.info/front_end/394.html"><i class=" fa fa-file-text-o"></i>算法合集</a></li>
              <li class="layui-col-md6 layui-col-xs12"><a
                href="http://www.weilai.info/front_end/394.html"><i class=" fa fa-file-text-o"></i>算法合集</a></li>
              <li class="layui-col-md6 layui-col-xs12"><a
                href="http://www.weilai.info/front_end/394.html"><i class=" fa fa-file-text-o"></i>算法合集</a></li>
              <li class="layui-col-md6 layui-col-xs12"><a
                href="http://www.weilai.info/front_end/394.html"><i class=" fa fa-file-text-o"></i>算法合集</a></li>
              <li class="layui-col-md6 layui-col-xs12"><a
                href="http://www.weilai.info/front_end/394.html"><i class=" fa fa-file-text-o"></i>算法合集</a></li>
              <li class="layui-col-md6 layui-col-xs12"><a
                href="http://www.weilai.info/front_end/394.html"><i class=" fa fa-file-text-o"></i>算法合集</a></li>
            </ul>
          </div>
          <!--相关阅读 end-->
          <!-- 评论 -->
          <div class="comment-text layui-form">
            <div id="comments">
              <div id="respond-post" class="respond">

                <div id="respond" class="comment-respond">
                  <h4 id="response"><i class="fa fa-meh-o"></i> 发表评论
                    <small><a rel="nofollow" id="cancel-comment-reply-link" href="/front_end/376.html#respond"
                              style="display:none;">Cancel Reply</a></small>
                  </h4>
                  <br/>
                  <form action="http://www.weilai.info/wp-comments-post.php" method="post" id="comment-form"
                        class="layui-form">
                    <textarea rows="5" cols="30" name="comment" id="textarea" placeholder="嘿~ 大神，别默默的看了，快来点评一下吧"
                              class="layui-textarea" required=""></textarea><br/>
                    <p class="layui-col-md4">
                      <input id="author" name="author" type="text" value="" size="30" class="layui-input"
                             placeholder="* 怎么称呼"/></p>
                    <p class="layui-col-md4">
                      <input id="email" name="email" type="text" value="" size="30" class="layui-input"
                             placeholder="* 邮箱(放心~会保密~.~)"/></p>
                    <p class="layui-col-md4">
                      <input id="url" name="url" type="text" value="" size="30" class="layui-input"
                             placeholder="http://您的主页"/></p>
                    <p>&nbsp;</p>
                    <p class="form-submit">
                      <input name="submit" type="submit" id="submit" class="layui-btn layui-btn-green" value="发表评论"/>
                      <input type='hidden' name='comment_post_ID' value='376' id='comment_post_ID'/>
                      <input type='hidden' name='comment_parent' id='comment_parent' value='0'/>
                    </p></form>
                </div><!-- #respond -->

              </div>


              <br>

              <h3>暂无评论</h3>

            </div>

          </div>
          <!-- 评论 end -->
        </div>
        <!--content end-->
</template>

<script>
  export default {
    name: "articleItem",
  }
</script>

<style scoped>
  @import '../../static/style.css';
</style>
