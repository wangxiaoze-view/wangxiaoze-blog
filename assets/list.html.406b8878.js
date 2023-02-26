import{_ as c,X as o,Y as p,a1 as t,a3 as e,a2 as l,y as u,Z as n,$ as s}from"./framework.ba356234.js";const i={},k=l(`<div class="custom-container info"><p class="custom-container-title">列表</p><p>网页开发中，列表也是必不可少的，对于列表而言， 列表的形式也是多种多样的，当然针对于不同的列表使用场景也是不一致的；</p><p>常用的列表方式为： 有序列表， 无序需列表 和自定义列表</p></div><h2 id="有序列表" tabindex="-1"><a class="header-anchor" href="#有序列表" aria-hidden="true">#</a> 有序列表</h2><p>看名字也就知道了什么是有序列表了， 有序列表就是有顺序的列表「当然属于废话」，</p><p>而针对于有序列表的使用场景呢，就是一些数字标示的段落以及文案，例如：条款，合同，规则等等；</p><p>当然对于条款，合同，规则会做行解释，例如：</p><p>游戏的规则为：</p><ol><li>五子棋，五局三胜制</li><li>一场游戏时间为：20分钟，黑棋先走</li><li>胜者将会获得xxx奖励</li></ol><p>可以看到行的前面会有数字，按照顺序排列，那么它就是一个有序列表；</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>五子棋，五局三胜制<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>一场游戏时间为：20分钟，黑棋先走<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>胜者将会获得xxx奖励/li&gt;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),d=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ol")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("五子棋，五局三胜制"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("一场游戏时间为：20分钟，黑棋先走"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`胜者将会获得xxx奖励/li>
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("ol")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=l(`<h2 id="无序列表" tabindex="-1"><a class="header-anchor" href="#无序列表" aria-hidden="true">#</a> 无序列表</h2><p>上面解释了什么是有序列表，这里就不再解释无序列表的含义和场景了； 与有序列表类似，但不一致的是 无序列表行前面不是数字，而是圆点字符；</p><h3 id="语法-1" tabindex="-1"><a class="header-anchor" href="#语法-1" aria-hidden="true">#</a> 语法</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>五子棋，五局三胜制<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>一场游戏时间为：20分钟，黑棋先走<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>胜者将会获得xxx奖励/li&gt;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),r=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ul")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("五子棋，五局三胜制"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("一场游戏时间为：20分钟，黑棋先走"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`胜者将会获得xxx奖励/li>
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("ul")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),m=n("h2",{id:"自定义列表",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#自定义列表","aria-hidden":"true"},"#"),s(" 自定义列表")],-1),v=n("p",null,"自定义列表不仅仅是一列项目，而是项目及其注释的组合。",-1),h=n("p",null,[s("自定义列表以 "),n("code",null,"<dl>"),s(" 标签开始。每个自定义列表项以 "),n("code",null,"<dt>"),s(" 开始。每个自定义列表项的定义以 "),n("code",null,"<dd>"),s(" 开始。")],-1),b=n("p",null,[s("自定义列表中的一个术语名可以对应多重定义或者多个术语名对应同一个定义，如果只有术语名或者只有定义也是可行的，也就是说 "),n("code",null," <dt>"),s(" 与 "),n("code",null,"<dd>"),s(" 在其中数量不限、对应关系不限。")],-1),x=n("h3",{id:"语法-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#语法-2","aria-hidden":"true"},"#"),s(" 语法")],-1),_=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("dl")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("dt")]),n("span",{class:"token punctuation"},">")]),s("运动"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("dt")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("dd")]),n("span",{class:"token punctuation"},">")]),s("- 篮球"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("dd")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("dd")]),n("span",{class:"token punctuation"},">")]),s("- 足球"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("dd")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("dd")]),n("span",{class:"token punctuation"},">")]),s("- 排球"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("dd")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("dt")]),n("span",{class:"token punctuation"},">")]),s("游戏"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("dt")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("dd")]),n("span",{class:"token punctuation"},">")]),s("- 王者荣耀"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("dd")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("dd")]),n("span",{class:"token punctuation"},">")]),s("- 英雄联盟"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("dd")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("dd")]),n("span",{class:"token punctuation"},">")]),s("- 穿越火线"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("dd")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("dl")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("dl")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("dt")]),n("span",{class:"token punctuation"},">")]),s("运动"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("dt")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("dd")]),n("span",{class:"token punctuation"},">")]),s("- 篮球"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("dd")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("dd")]),n("span",{class:"token punctuation"},">")]),s("- 足球"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("dd")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("dd")]),n("span",{class:"token punctuation"},">")]),s("- 排球"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("dd")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("dt")]),n("span",{class:"token punctuation"},">")]),s("游戏"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("dt")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("dd")]),n("span",{class:"token punctuation"},">")]),s("- 王者荣耀"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("dd")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("dd")]),n("span",{class:"token punctuation"},">")]),s("- 英雄联盟"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("dd")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("dd")]),n("span",{class:"token punctuation"},">")]),s("- 穿越火线"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("dd")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("dl")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function f(E,y){const a=u("CodeDemo");return o(),p("div",null,[k,t(a,{id:"code-demo-47",type:"normal",title:"%E6%95%88%E6%9E%9C%E9%A2%84%E8%A7%88",code:"eJyrVsooyc1RslKyyc+xi8lTAAKbnEy7J7umPF074dni7vd7ekDsjQ1PdnS+aJ7ztGObjT5QHknljoanc3Y927HjWUf/s+nbXk7f8mTHrvd7ZhkZPO1oezlpPtCAl7snAk162trxYusGNN1AI180tD7d0PZkz6wXfduf7pteUVHxdOm0p10bIQpt9MHuUqoFAHWSWk4="},{default:e(()=>[d]),_:1}),g,t(a,{id:"code-demo-60",type:"normal",title:"%E6%95%88%E6%9E%9C%E9%A2%84%E8%A7%88",code:"eJyrVsooyc1RslKyScmxi8lTAAKblBK7F/snPO1aYaMPZMIEU+x0FZ6vX/d8QjNQOAVF+MW2zdiEn/VNQhcusXu2Y8ezjn5Mk/u6XzS0vuhd/KKhAdP87o0vZ7e8aJzyfPZ8DMnnK/e/2Nb1vHH18137oZJACuQZJR0lhWHsu1oABvKvYw=="},{default:e(()=>[r,m,v,h,b,x,_,t(a,{id:"code-demo-78",type:"normal",title:"%E6%95%88%E6%9E%9C%E9%A2%84%E8%A7%88",code:"eJyrVsooyc1RslKyScmxi8lTAAKblBK7F/snPO1aYaMPZMIEU+x0FZ6vX/d8QjNQOAVF+MW2zdiEn/VNQhcusXu2Y8ezjn5Mk/u6XzS0vuhd/KKhAdP87o0vZ7e8aJzyfPZ8DMnnK/e/2Nb1vHH18137oZJACuQZpVoAoOpYCA=="},{default:e(()=>[A]),_:1})]),_:1})])}const K=c(i,[["render",f],["__file","list.html.vue"]]);export{K as default};
