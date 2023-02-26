import{_ as n,X as i,Y as d,Z as a,$ as e,a1 as l,a2 as c,y as t}from"./framework.ba356234.js";const r={},u=c(`<div class="custom-container tip"><p class="custom-container-title">🌏 简单介绍</p><p>💡 项目使用 node 开发, 开发过程中会遇到 node 一旦报错就会停止服务的问题，每次还要重新启动，比较麻烦，也是非常不方便的， 为了解决这样的问题，建议使用 pm2 去管理项目</p></div><h2 id="pm2-是什么" tabindex="-1"><a class="header-anchor" href="#pm2-是什么" aria-hidden="true">#</a> PM2 是什么？</h2><p>PM2（Process Manager 2 ）是具有内置负载均衡器的 Node.js 应用程序的生产运行时和进程管理器。 它允许您永久保持应用程序活跃，无需停机即可重新加载它们，并促进常见的 Devops 任务。</p><h3 id="pm2-特性" tabindex="-1"><a class="header-anchor" href="#pm2-特性" aria-hidden="true">#</a> PM2 特性</h3><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 日志管理：应用程序日志保存在服务器的硬盘中~/.pm2/logs/</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 负载均衡：PM2 可以通过创建共享同一服务器端口的多个子进程来扩展您的应用程序。这样做还允许您以零秒停机时间重新启动应用程序。</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> 终端监控：可以在终端中监控您的应用程序并检查应用程序运行状况（CPU 使用率，使用的内存，请求/分钟等）。</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> SSH 部署：自动部署，避免逐个在所有服务器中进行 ssh。</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-4" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-4"> 静态服务：支持静态服务器功能</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-5" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-5"> 多平台支持：适用于 Linux（稳定）和 macOS（稳定）和 Windows（稳定）</label></li></ul><h3 id="安装使用" tabindex="-1"><a class="header-anchor" href="#安装使用" aria-hidden="true">#</a> 安装使用</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  // npm方式
<span class="token function">npm</span> <span class="token function">install</span> pm2 <span class="token parameter variable">-g</span>

// yarn方式
<span class="token function">yarn</span> global <span class="token function">add</span> pm2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动服务" tabindex="-1"><a class="header-anchor" href="#启动服务" aria-hidden="true">#</a> 启动服务</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 启动
pm2 start app.js

// 更改名字启动
pm2 start app.js <span class="token parameter variable">--name</span> xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="停止服务" tabindex="-1"><a class="header-anchor" href="#停止服务" aria-hidden="true">#</a> 停止服务</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 停止对应的id服务
pm2 stop <span class="token punctuation">[</span>id<span class="token punctuation">]</span>

// 停止所有
pm2 stop all

// 停止当前服务
pm2 stop <span class="token punctuation">[</span>AppName<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除服务" tabindex="-1"><a class="header-anchor" href="#删除服务" aria-hidden="true">#</a> 删除服务</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 删除对应的id服务
pm2 delete <span class="token punctuation">[</span>id<span class="token punctuation">]</span>

// 删除所有
pm2 delete all

// 删除当前服务
pm2 delete <span class="token punctuation">[</span>AppName<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="开机自启" tabindex="-1"><a class="header-anchor" href="#开机自启" aria-hidden="true">#</a> 开机自启</h3><p>// 开机自启</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pm2 startup
<span class="token number">7</span>. 更新pm2
pm2 updatePM2
pm2 update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="监听项目" tabindex="-1"><a class="header-anchor" href="#监听项目" aria-hidden="true">#</a> 监听项目</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 当项目文件发生变化后, 自动重启
pm2 start app.js <span class="token parameter variable">--watch</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="静态服务器" tabindex="-1"><a class="header-anchor" href="#静态服务器" aria-hidden="true">#</a> 静态服务器</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 将目录dist作为静态服务器根目录，端口为9090
pm2 serve ./dist <span class="token number">9090</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重启服务" tabindex="-1"><a class="header-anchor" href="#重启服务" aria-hidden="true">#</a> 重启服务</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 重启对应的id服务
pm2 reload  <span class="token punctuation">[</span>id<span class="token punctuation">]</span>

// 重启所有
pm2 reload  all

// 重启当前服务
pm2 reload  <span class="token punctuation">[</span>AppName<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看-pm2-启动的项目" tabindex="-1"><a class="header-anchor" href="#查看-pm2-启动的项目" aria-hidden="true">#</a> 查看 pm2 启动的项目</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pm2 list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="显示每个应用程序占用情况" tabindex="-1"><a class="header-anchor" href="#显示每个应用程序占用情况" aria-hidden="true">#</a> 显示每个应用程序占用情况</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pm2 monit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="显示应用程序所有信息" tabindex="-1"><a class="header-anchor" href="#显示应用程序所有信息" aria-hidden="true">#</a> 显示应用程序所有信息</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 对应的id服务
pm2 show  <span class="token punctuation">[</span>id<span class="token punctuation">]</span>

// 当前服务
pm2 show  <span class="token punctuation">[</span>AppName<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="日志查看" tabindex="-1"><a class="header-anchor" href="#日志查看" aria-hidden="true">#</a> 日志查看</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 对应的id服务
pm2 logs  <span class="token punctuation">[</span>id<span class="token punctuation">]</span>

// 所有
pm2 logs

// 当前服务
pm2 logs  <span class="token punctuation">[</span>AppName<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🛸-参考资料" tabindex="-1"><a class="header-anchor" href="#🛸-参考资料" aria-hidden="true">#</a> 🛸 参考资料</h2>`,31),p={href:"http://auan.cn/internet/2059.html",target:"_blank",rel:"noopener noreferrer"};function m(o,h){const s=t("ExternalLinkIcon");return i(),d("div",null,[u,a("p",null,[e("● "),a("a",p,[e("PM2 介绍及简易使用手册"),l(s)])])])}const b=n(r,[["render",m],["__file","pm2.html.vue"]]);export{b as default};
