import{_ as s,X as t,Y as i,a2 as a,Z as e,$ as l}from"./framework.ba356234.js";const c={},d=a('<div class="custom-container tip"><p class="custom-container-title">常见的前端性能优化</p><p>介绍前端性能优化的重要性， 介绍性能优化的方向，提高用户体验，减少页面的加载时间等等；｛其他后期在完善｝</p></div><h2 id="优化的重要性" tabindex="-1"><a class="header-anchor" href="#优化的重要性" aria-hidden="true">#</a> 优化的重要性</h2><h3 id="网站跳出率" tabindex="-1"><a class="header-anchor" href="#网站跳出率" aria-hidden="true">#</a> 网站跳出率</h3><p><code>网站跳出率</code>: 评价一个网站性能的重要指标，跳出率高，说明网站用户体验做得不好，用户进去就跳出去了，反之如果跳出率较低，说明网站用户体验做得不错，用户能够找到自己需要的内容。而且以后他可能还会再来光顾你的网站，提高了用户粘性。慢慢的可以积累大量的网站用户。</p><p>一个网站在某一段时间内有 1000 不同访客从这个链接进入，同时这些访客中有 50 个人没有二次浏览行为，直接退出网站，那么针对这个入口网址的跳出率就是 50/1000=5%。</p><p>网站性能优化能够减少页面加载时间，提高页面响应速度，使得用户更愿意在网站上停留，从而降低网站跳出率。</p><h3 id="搜索引擎的排名" tabindex="-1"><a class="header-anchor" href="#搜索引擎的排名" aria-hidden="true">#</a> 搜索引擎的排名</h3><p>搜索引擎会根据网站性能来评估网站排名，网站性能越优秀，排名越靠前。网站性能优化能够使得网站加载更快，页面体积更小，更容易被搜索引擎抓取，从而提高搜索引擎排名。</p><p>而针对于排名也是有规则的：</p><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 收录规则：抓取，识别，释放</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 得分规则</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> 点击规则</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> 链接规则</label></li></ul><h3 id="提高用户体验" tabindex="-1"><a class="header-anchor" href="#提高用户体验" aria-hidden="true">#</a> 提高用户体验</h3><p>性能优化可以提高用户的体验规则，减少页面系统加载时间， 操作更流畅；增大用户留存率</p><h2 id="优化方向" tabindex="-1"><a class="header-anchor" href="#优化方向" aria-hidden="true">#</a> 优化方向</h2><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-4" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-4"> 减少页面加载，等待时间，</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-5" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-5"> 减少系统的体积，打包体积</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-6" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-6"> 优化页面的加载速度</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-7" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-7"> 减少网络请求， 减少资源的请求数量</label></li></ul><h2 id="优化方案" tabindex="-1"><a class="header-anchor" href="#优化方案" aria-hidden="true">#</a> 优化方案</h2><h3 id="网络请求资源优化" tabindex="-1"><a class="header-anchor" href="#网络请求资源优化" aria-hidden="true">#</a> 网络请求资源优化</h3><h4 id="使用-css-雪碧图" tabindex="-1"><a class="header-anchor" href="#使用-css-雪碧图" aria-hidden="true">#</a> 使用 css 雪碧图</h4><p>通过多张小图片合并成一张图片，减少图片的请求数，原有的未优化请求时多张小图片，优化之后请求的是一张图片，而这张图上 展示的是所有的小图，通过 css 定位的方式控制图片的显示，从而达到减少图片的请求资源数量</p>',18),h=e("h4",{Data:"",URI:"",id:"内联图像展示-base64",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#内联图像展示-base64","aria-hidden":"true"},"#"),l(" 内联图像展示 base64")],-1),k=a('<p>将图片转化成 base64 方式的图片，嵌入在 html 和 css 中，减少图片的请求数，例如 vue 中引入本地资源图片，在元素中可以看到对小图片的显示效果为 base64 方式显示的， 但是针对于这样的 base64 仅限于小图片；</p><h4 id="合理利用-cdn-浏览器的缓存" tabindex="-1"><a class="header-anchor" href="#合理利用-cdn-浏览器的缓存" aria-hidden="true">#</a> 合理利用 cdn， 浏览器的缓存</h4><p>将图片存放于 cdn，同时减少请求，更快的加载图片；</p><h4 id="文件的合并" tabindex="-1"><a class="header-anchor" href="#文件的合并" aria-hidden="true">#</a> 文件的合并</h4><p>相似文件合并成一个，减少文件的请求</p><h3 id="构建打包优化-vue" tabindex="-1"><a class="header-anchor" href="#构建打包优化-vue" aria-hidden="true">#</a> 构建打包优化｛vue｝</h3><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-8" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-8"> 预处理器和对应的打包模块</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-9" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-9"> 合理使用 webpack, 使用 tree shaking 和 code splitting 减少代码体积，提高页面加载速度</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-10" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-10"> 文件合并，分包，拆包等等</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-11" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-11"> css 和 js 的压缩</label></li></ul>',7),b=[d,h,k];function r(n,o){return t(),i("div",null,b)}const p=s(c,[["render",r],["__file","performance.html.vue"]]);export{p as default};
