import{_ as i,X as l,Y as c,Z as n,$ as s,a1 as t,a2 as a,y as d}from"./framework.ba356234.js";const o="/assets/images/1672927465614.jpg",r={},p=a(`<h2 id="温馨提示" tabindex="-1"><a class="header-anchor" href="#温馨提示" aria-hidden="true">#</a> 温馨提示</h2><div class="custom-container info"><p class="custom-container-title">提示：</p><p>基础<code>git</code>暂时这样整理完成，后期可继续整理;</p></div><h2 id="配置-user-信息" tabindex="-1"><a class="header-anchor" href="#配置-user-信息" aria-hidden="true">#</a> 配置 user 信息</h2><h3 id="全局配置-user" tabindex="-1"><a class="header-anchor" href="#全局配置-user" aria-hidden="true">#</a> 全局配置 user</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;username&quot;</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;username@example.com&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="config-的三个作用域" tabindex="-1"><a class="header-anchor" href="#config-的三个作用域" aria-hidden="true">#</a> config 的三个作用域</h3><p>缺省等同于 local；</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># local只对某个仓库有效</span>
<span class="token function">git</span> config <span class="token parameter variable">--local</span>

<span class="token comment"># global对当前用户所有仓库有效</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span>

<span class="token comment"># system 对系统所有登录的用户有效</span>
<span class="token function">git</span> config <span class="token parameter variable">--system</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显示 config 的配置，加<code>--list</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--list</span> <span class="token parameter variable">--local</span>
<span class="token function">git</span> config <span class="token parameter variable">--list</span> <span class="token parameter variable">--global</span>
<span class="token function">git</span> config <span class="token parameter variable">--list</span> <span class="token parameter variable">--system</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建一个仓库并配置-local-用户信息" tabindex="-1"><a class="header-anchor" href="#创建一个仓库并配置-local-用户信息" aria-hidden="true">#</a> 创建一个仓库并配置 local 用户信息</h2><h3 id="俩种场景" tabindex="-1"><a class="header-anchor" href="#俩种场景" aria-hidden="true">#</a> 俩种场景</h3><ol><li>把已有的项目代码纳入 git 管理</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> 项目代码所有的文件夹
<span class="token function">git</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>新建的项目直接使用 git 管理</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> 某个文件夹
<span class="token comment"># 会在当前路径创建和项目名称相同的文件夹</span>
<span class="token function">git</span> init your_project
<span class="token builtin class-name">cd</span> your_project
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当 git 初始化完成之后，创建一个<code>local</code>的用户；</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> your_project
<span class="token function">git</span> config <span class="token parameter variable">--local</span> user.name <span class="token string">&quot;你的用户名&quot;</span>
<span class="token function">git</span> config <span class="token parameter variable">--local</span> user.email <span class="token string">&quot;你的密码&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加完成之后，我们可以通过命令<code>git config --local --list</code>可以快速查看配置的用户信息；</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">core.repositoryformatversion</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token assign-left variable">core.filemode</span><span class="token operator">=</span>true
<span class="token assign-left variable">core.bare</span><span class="token operator">=</span>false
<span class="token assign-left variable">core.logallrefupdates</span><span class="token operator">=</span>true
<span class="token assign-left variable">core.ignorecase</span><span class="token operator">=</span>true
<span class="token assign-left variable">core.precomposeunicode</span><span class="token operator">=</span>true
<span class="token assign-left variable">user.name</span><span class="token operator">=</span>这里显示的是你配置的用户名
<span class="token assign-left variable">user.email</span><span class="token operator">=</span>这显示的是你配置的电子邮箱
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置成功之后，通过命令提交文件；</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 在这之前，可以先创建一个文件 README.md</span>
<span class="token function">git</span> <span class="token function">add</span> README.md
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;Add README.md&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>提交成功之后会默认创建一个<code>master</code>的分支，可以通过命令<code>git log</code> 查看</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log

<span class="token comment"># 日志信息如下</span>
commit 3ffd6982361494c34c5ade40cd69777f1993812c <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master<span class="token punctuation">)</span>
Author: 显示的是你用户名 <span class="token operator">&lt;</span>显示的是你的电子邮箱<span class="token operator">&gt;</span>
Date:   Thu Jan <span class="token number">5</span> <span class="token number">21</span>:20:49 <span class="token number">2023</span> +0800

    Add Readme
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="给文件名重命名" tabindex="-1"><a class="header-anchor" href="#给文件名重命名" aria-hidden="true">#</a> 给文件名重命名</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 步骤一：</span>
<span class="token function">mv</span> index.html index.copy.html


Changes not staged <span class="token keyword">for</span> commit:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add/rm &lt;file&gt;...&quot;</span> to update what will be committed<span class="token punctuation">)</span>
  <span class="token punctuation">(</span>use <span class="token string">&quot;git restore &lt;file&gt;...&quot;</span> to discard changes <span class="token keyword">in</span> working directory<span class="token punctuation">)</span>
        deleted:    index.html

Untracked files:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to include <span class="token keyword">in</span> what will be committed<span class="token punctuation">)</span>
        index.copy.html

no changes added to commit <span class="token punctuation">(</span>use <span class="token string">&quot;git add&quot;</span> and/or <span class="token string">&quot;git commit -a&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里虽然我们已经更新了文件名字，但是对于 git 仓库里还是会存在原来的文件名，这是我们删除原来的，添加最新的；</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 步骤二： 删除原来的</span>
<span class="token function">git</span> <span class="token function">rm</span> index.html
<span class="token comment"># 步骤三： 添加最新的</span>
<span class="token function">git</span> <span class="token function">add</span> index.copy.html
<span class="token comment"># 查看状态</span>
<span class="token function">git</span> status
Changes to be committed:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git restore --staged &lt;file&gt;...&quot;</span> to unstage<span class="token punctuation">)</span>
        renamed:    index.html -<span class="token operator">&gt;</span> index.copy.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里可以使用 git 命令撤销会退， 但是这是一个危险操作，会把暂存区的文件会退；<code>git reset --hard</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 简化上面的操作，变更的文件 以及变更后的文件, 这里的效果简化成上面的三步骤</span>
<span class="token function">git</span> <span class="token function">mv</span> index.html index.copy.index
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,30),m={href:"https://www.yiibai.com/git/git_mv.html",target:"_blank",rel:"noopener noreferrer"},u=a(`<h2 id="git-的版本历史" tabindex="-1"><a class="header-anchor" href="#git-的版本历史" aria-hidden="true">#</a> git 的版本历史</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 无参数</span>
<span class="token function">git</span> log

<span class="token comment"># 所有分支log, 但是这种情况对于多分支 多提交是比较累的(没有眼睛或者*号) 可以使用 --graph（有眼睛或者*号）</span>
<span class="token function">git</span> log <span class="token parameter variable">--all</span>
<span class="token comment"># 图形化的用用法 || gitk</span>
<span class="token function">git</span> log <span class="token parameter variable">--all</span> <span class="token parameter variable">--graph</span>


<span class="token comment"># 简介模式、</span>
<span class="token function">git</span> log <span class="token parameter variable">--oneline</span>
64b9a4b <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master<span class="token punctuation">)</span> Move index.html to index.copy.html
ebe990b Add index
3ffd698 Add Readme

<span class="token comment"># 最近的几个commit</span>
<span class="token function">git</span> log <span class="token parameter variable">-n2</span> <span class="token parameter variable">--oneline</span>
64b9a4b <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master<span class="token punctuation">)</span> Move index.html to index.copy.html
ebe990b Add index


<span class="token comment"># 查看分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-v</span>
* master 64b9a4b Move index.html to index.copy.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><code>git log --all --graph</code></strong> 的效果如下：</p><figure><img src="`+o+`" alt="git log --all --graph" tabindex="0" loading="lazy"><figcaption>git log --all --graph</figcaption></figure><h2 id="怎么删除不需要的分支" tabindex="-1"><a class="header-anchor" href="#怎么删除不需要的分支" aria-hidden="true">#</a> 怎么删除不需要的分支？</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 部分情况下可能会删除不掉</span>
<span class="token function">git</span> branch <span class="token parameter variable">-d</span> 分支名

<span class="token function">git</span> branch <span class="token parameter variable">-D</span> 分支名

<span class="token comment"># 例如：</span>
<span class="token function">git</span> branch <span class="token parameter variable">-d</span> temp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="怎么修改最新的-commit-的-message" tabindex="-1"><a class="header-anchor" href="#怎么修改最新的-commit-的-message" aria-hidden="true">#</a> 怎么修改最新的 commit 的 message?</h2><blockquote><p>使用场景很简单， 就是最新提交的 commit message 不是很明确的情况下，需要使用该命令区修改最新提交 commit message 的；</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> commit <span class="token parameter variable">--amend</span>
<span class="token comment"># 直接 输入i进行编辑， wq保存退出</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例子： 比如我在 git 提交了 3 条 commit, 如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>commit <span class="token number">3</span>
Author: cs <span class="token operator">&lt;</span><span class="token number">123</span>@qq.com<span class="token operator">&gt;</span>
Date: <span class="token number">2023</span>
  add: 第三次提交

commit <span class="token number">2</span>
Author: cs <span class="token operator">&lt;</span><span class="token number">123</span>@qq.com<span class="token operator">&gt;</span>
Date: <span class="token number">2023</span>
  add: 第二次提交

commit <span class="token number">1</span>
Author: cs <span class="token operator">&lt;</span><span class="token number">123</span>@qq.com<span class="token operator">&gt;</span>
Date: <span class="token number">2023</span>
  add: 第一次提交
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于第三次提交的提交消息我输错了。我想修改最新的即第三次提交的 commit message;</p><p>这时可以使用<code>git commit --amend</code>, 进去之后直接操作 vim。修稿你的 commit message 就可以了；</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 解释： 这里就是你 git commit --amend命令之后的界面“， 直接将下面的消息文案修改为你想要的commit message就可以</span>
add: 添加服务

<span class="token comment"># Please enter the commit message for your changes. Lines starting</span>
<span class="token comment"># with &#39;#&#39; will be ignored, and an empty message aborts the commit.</span>
<span class="token comment">#</span>
<span class="token comment"># Date:      Fri Jan 6 21:36:05 2023 +0800</span>
<span class="token comment">#</span>
<span class="token comment"># On branch master</span>
<span class="token comment"># Changes to be committed:</span>
<span class="token comment">#       new file:   server.js</span>
<span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="怎么修改老旧的-commit-的-message" tabindex="-1"><a class="header-anchor" href="#怎么修改老旧的-commit-的-message" aria-hidden="true">#</a> 怎么修改老旧的 commit 的 message?</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 变基</span>
<span class="token function">git</span> rebase <span class="token parameter variable">-i</span> 变更的上一个分支id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>例子： 比如我在 git 提交了 3 条 commit, 如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>commit <span class="token number">3</span>
Author: cs <span class="token operator">&lt;</span><span class="token number">123</span>@qq.com<span class="token operator">&gt;</span>
Date: <span class="token number">2023</span>
  add: 第三次提交

commit <span class="token number">2</span>
Author: cs <span class="token operator">&lt;</span><span class="token number">123</span>@qq.com<span class="token operator">&gt;</span>
Date: <span class="token number">2023</span>
  add: 第二次提交

commit <span class="token number">1</span>
Author: cs <span class="token operator">&lt;</span><span class="token number">123</span>@qq.com<span class="token operator">&gt;</span>
Date: <span class="token number">2023</span>
  add: 第一次提交
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是我想修改第二次提交的 commit message; 可以使用<code>git rebase -i 1</code>; 这里的<code>1</code> 是你想要修改第几次提交的父级 id;</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 效果如下</span>
pick <span class="token number">3</span> add: 第三次提交
<span class="token comment"># 这是第二条的， 吧pick 修改为 reword 或者 r 就可以了； 记得保存</span>
pick <span class="token number">2</span> add: 第二次提交

<span class="token comment"># Rebase 3ffd698..70639fd onto 3ffd698 (1 command)</span>
<span class="token comment">#</span>
<span class="token comment"># Commands:</span>
<span class="token comment"># p, pick &lt;commit&gt; = use commit</span>
<span class="token comment"># r, reword &lt;commit&gt; = use commit, but edit the commit message</span>
<span class="token comment"># e, edit &lt;commit&gt; = use commit, but stop for amending</span>
<span class="token comment"># s, squash &lt;commit&gt; = use commit, but meld into previous commit</span>
<span class="token comment"># f, fixup [-C | -c] &lt;commit&gt; = like &quot;squash&quot; but keep only the previous</span>
<span class="token comment">#                    commit&#39;s log message, unless -C is used, in which case</span>
<span class="token comment">#                    keep only this commit&#39;s message; -c is same as -C but</span>
<span class="token comment">#                    opens the editor</span>
<span class="token comment"># x, exec &lt;command&gt; = run command (the rest of the line) using shell</span>
<span class="token comment"># b, break = stop here (continue rebase later with &#39;git rebase --continue&#39;)</span>
<span class="token comment"># d, drop &lt;commit&gt; = remove commit</span>
<span class="token comment"># l, label &lt;label&gt; = label current HEAD with a name</span>
<span class="token comment"># t, reset &lt;label&gt; = reset HEAD to a label</span>
<span class="token comment"># m, merge [-C &lt;commit&gt; | -c &lt;commit&gt;] &lt;label&gt; [# &lt;oneline&gt;]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="把多个-连续的-commit-合并成-1-个" tabindex="-1"><a class="header-anchor" href="#把多个-连续的-commit-合并成-1-个" aria-hidden="true">#</a> 把多个(连续的)commit 合并成 1 个</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> rebase <span class="token parameter variable">-i</span> 合并commit的父级id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我想要将 第三次 和 第二次提交的消息合并成 1 个，可以使用<code>git rebase -i 1</code>, 这里的<code>1</code>是你为谁合并的父级 id；</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 效果如下</span>
<span class="token comment"># 这里保留最新的一次的pick, 将其他的pick修改为 squash || s</span>
pick <span class="token number">3</span> add: 第三次提交
pick <span class="token number">2</span> add: 第二次提交

<span class="token comment"># 修改如下： 3 是最新的 2 是最早提交的  吧 最新的合并到最早提交的</span>
pick <span class="token number">3</span> add: 第三次提交
squash <span class="token number">2</span> add: 第二次提交


<span class="token comment"># Rebase 52f2b39..2f79131 onto 52f2b39 (3 commands)</span>
<span class="token comment">#</span>
<span class="token comment"># Commands:</span>
<span class="token comment"># p, pick &lt;commit&gt; = use commit</span>
<span class="token comment"># r, reword &lt;commit&gt; = use commit, but edit the commit message</span>
<span class="token comment"># e, edit &lt;commit&gt; = use commit, but stop for amending</span>
<span class="token comment"># s, squash &lt;commit&gt; = use commit, but meld into previous commit</span>
<span class="token comment"># f, fixup [-C | -c] &lt;commit&gt; = like &quot;squash&quot; but keep only the previous</span>
<span class="token comment">#                    commit&#39;s log message, unless -C is used, in which case</span>
<span class="token comment">#                    keep only this commit&#39;s message; -c is same as -C but</span>
<span class="token comment">#                    opens the editor</span>
<span class="token comment"># x, exec &lt;command&gt; = run command (the rest of the line) using shell</span>
<span class="token comment"># b, break = stop here (continue rebase later with &#39;git rebase --continue&#39;)</span>
<span class="token comment"># d, drop &lt;commit&gt; = remove commit</span>
<span class="token comment"># l, label &lt;label&gt; = label current HEAD with a name</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="怎样吧间隔的几个-commit-整理成-1-个" tabindex="-1"><a class="header-anchor" href="#怎样吧间隔的几个-commit-整理成-1-个" aria-hidden="true">#</a> 怎样吧间隔的几个 commit 整理成 1 个？</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> rebase <span class="token parameter variable">-i</span> 间隔的父级id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例子： 比如我在 git 提交了 4 条 commit, 如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>commit <span class="token number">4</span>
Author: cs <span class="token operator">&lt;</span><span class="token number">123</span>@qq.com<span class="token operator">&gt;</span>
Date: <span class="token number">2023</span>
  add: 第四次提交

commit <span class="token number">3</span>
Author: cs <span class="token operator">&lt;</span><span class="token number">123</span>@qq.com<span class="token operator">&gt;</span>
Date: <span class="token number">2023</span>
  add: 第三次提交

commit <span class="token number">2</span>
Author: cs <span class="token operator">&lt;</span><span class="token number">123</span>@qq.com<span class="token operator">&gt;</span>
Date: <span class="token number">2023</span>
  add: 第二次提交

commit <span class="token number">1</span>
Author: cs <span class="token operator">&lt;</span><span class="token number">123</span>@qq.com<span class="token operator">&gt;</span>
Date: <span class="token number">2023</span>
  add: 第一次提交
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>合并 4 和 2， 可以这么使用<code>git rebase -i 1</code>,</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 效果如下</span>
pick <span class="token number">4</span> add: 第四次提交
pick <span class="token number">3</span> add: 第三次提交
pick <span class="token number">2</span> add: 第二次提交

<span class="token comment"># 修改如下： 将4合并到2 ， 2 是最早提交的，4是最新提交的。 将 2那一行添加在4下面，删除原来的2的那一行，</span>
<span class="token comment"># 并且将 4下面的2的那一行 的 pick 修改为 squash即可</span>
pick <span class="token number">4</span> add: 第四次提交
squash <span class="token number">2</span> add: 第三次提交
pick <span class="token number">3</span> add: 第三次提交

<span class="token comment"># Rebase 52f2b39..2f79131 onto 52f2b39 (3 commands)</span>
<span class="token comment">#</span>
<span class="token comment"># Commands:</span>
<span class="token comment"># p, pick &lt;commit&gt; = use commit</span>
<span class="token comment"># r, reword &lt;commit&gt; = use commit, but edit the commit message</span>
<span class="token comment"># e, edit &lt;commit&gt; = use commit, but stop for amending</span>
<span class="token comment"># s, squash &lt;commit&gt; = use commit, but meld into previous commit</span>
<span class="token comment"># f, fixup [-C | -c] &lt;commit&gt; = like &quot;squash&quot; but keep only the previous</span>
<span class="token comment">#                    commit&#39;s log message, unless -C is used, in which case</span>
<span class="token comment">#                    keep only this commit&#39;s message; -c is same as -C but</span>
<span class="token comment">#                    opens the editor</span>
<span class="token comment"># x, exec &lt;command&gt; = run command (the rest of the line) using shell</span>
<span class="token comment"># b, break = stop here (continue rebase later with &#39;git rebase --continue&#39;)</span>
<span class="token comment"># d, drop &lt;commit&gt; = remove commit</span>
<span class="token comment"># l, label &lt;label&gt; = label current HEAD with a name</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="暂存区和-head-之间的差异" tabindex="-1"><a class="header-anchor" href="#暂存区和-head-之间的差异" aria-hidden="true">#</a> 暂存区和 HEAD 之间的差异？</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">diff</span> <span class="token parameter variable">--cached</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// HEAD 上的文件</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;api&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>本地修改文件, 并添加到暂存区；</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// HEAD 上的文件</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;api&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后通过命令<code>git diff --cached</code>比较俩个文件的区别”</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">diff</span> <span class="token parameter variable">--git</span> a/api.js b/api.js
index 8558a46<span class="token punctuation">..</span>26731b7 <span class="token number">100644</span>
--- a/api.js
+++ b/api.js

@@ <span class="token parameter variable">-1</span> +1,3 @@
-console.log<span class="token punctuation">(</span><span class="token string">&#39;api&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">\\</span> No newline at end of <span class="token function">file</span>

+console.log<span class="token punctuation">(</span><span class="token string">&#39;api&#39;</span><span class="token punctuation">)</span>
+
+let a <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
<span class="token punctuation">\\</span> No newline at end of <span class="token function">file</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="怎样通过比较工作区和暂存区所含文件的差异" tabindex="-1"><a class="header-anchor" href="#怎样通过比较工作区和暂存区所含文件的差异" aria-hidden="true">#</a> 怎样通过比较工作区和暂存区所含文件的差异？</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 所有文件</span>
<span class="token function">git</span> <span class="token function">diff</span>

<span class="token comment"># api.js</span>
<span class="token function">git</span> <span class="token function">diff</span> -- api.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>预览的效果类似 上面的效果；</p><h2 id="暂存区恢复成和-head-一样" tabindex="-1"><a class="header-anchor" href="#暂存区恢复成和-head-一样" aria-hidden="true">#</a> 暂存区恢复成和 HEAD 一样？</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 恢复所有</span>
<span class="token function">git</span> reset HEAD

<span class="token comment"># 恢复某一个文件</span>
<span class="token function">git</span> reset HEAD api.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="让工作区文件恢复成暂存区一样" tabindex="-1"><a class="header-anchor" href="#让工作区文件恢复成暂存区一样" aria-hidden="true">#</a> 让工作区文件恢复成暂存区一样？</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout -- 文件名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="取消暂存区部分文件的修改" tabindex="-1"><a class="header-anchor" href="#取消暂存区部分文件的修改" aria-hidden="true">#</a> 取消暂存区部分文件的修改？</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout -- api.js  main.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="消除最近的几次提交-版本回退" tabindex="-1"><a class="header-anchor" href="#消除最近的几次提交-版本回退" aria-hidden="true">#</a> 消除最近的几次提交？（版本回退）</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> reset <span class="token parameter variable">--hard</span> 回退版本id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例子： 比如我在 git 提交了 3 条 commit, 如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>commit <span class="token number">3</span>
Author: cs <span class="token operator">&lt;</span><span class="token number">123</span>@qq.com<span class="token operator">&gt;</span>
Date: <span class="token number">2023</span>
  add: 第三次提交

commit <span class="token number">2</span>
Author: cs <span class="token operator">&lt;</span><span class="token number">123</span>@qq.com<span class="token operator">&gt;</span>
Date: <span class="token number">2023</span>
  add: 第二次提交

commit <span class="token number">1</span>
Author: cs <span class="token operator">&lt;</span><span class="token number">123</span>@qq.com<span class="token operator">&gt;</span>
Date: <span class="token number">2023</span>
  add: 第一次提交
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是我不想要第三次提交，想要消除（回退 2 的提交），可以使用 <code>git reset --hard 2</code>,</p><h2 id="不同提交文件的差异" tabindex="-1"><a class="header-anchor" href="#不同提交文件的差异" aria-hidden="true">#</a> 不同提交文件的差异？</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 所有的文文件</span>
<span class="token function">git</span> <span class="token function">diff</span> 分支1 分支2

<span class="token comment"># 指定文件</span>
<span class="token function">git</span> <span class="token function">diff</span> 分支1 分支2 -- index.js

<span class="token comment"># 指定的分支id 2 是temp分支的commit id,  1是master分支的commit id</span>
<span class="token function">git</span> <span class="token function">diff</span> <span class="token number">2</span> <span class="token number">1</span> -- index.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># git diff 分支1 分支2</span>
<span class="token function">diff</span> <span class="token parameter variable">--git</span> a/api.js b/api.js
index 26731b7<span class="token punctuation">..</span>0afa981 <span class="token number">100644</span>
--- a/api.js
+++ b/api.js
@@ -1,3 +1,5 @@
 console.log<span class="token punctuation">(</span><span class="token string">&#39;api&#39;</span><span class="token punctuation">)</span>

<span class="token parameter variable">-let</span> a <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
<span class="token punctuation">\\</span> No newline at end of <span class="token function">file</span>
+let a <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
+
+const b <span class="token operator">=</span> <span class="token number">1000</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="正确删除文件的方法" tabindex="-1"><a class="header-anchor" href="#正确删除文件的方法" aria-hidden="true">#</a> 正确删除文件的方法？</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">rm</span> 文件名

<span class="token comment"># 暂存区 放弃更改</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> HEAD
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="开发中紧急任务怎么处理" tabindex="-1"><a class="header-anchor" href="#开发中紧急任务怎么处理" aria-hidden="true">#</a> 开发中紧急任务怎么处理？</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 添加存放区，暂存区是一个干净的状态；</span>
<span class="token function">git</span> stash

<span class="token function">git</span> stash list
<span class="token comment"># stash@{0}: WIP on master: 886f134 edit: 修改diff</span>

<span class="token comment"># 1: 拿出来，放在工作区 2: git stash list 对用的信息还存在，可以重复使用</span>
<span class="token comment"># 即这条信息还存在： {stash@{0}: WIP on master: 886f134 edit: 修改diff}</span>
<span class="token function">git</span> stash apply

<span class="token comment"># 丢掉 Dropped refs/stash@{0} (6fc8e582adf57857a5a2af6eafbe375d6eae287f)</span>
<span class="token function">git</span> stash pop

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="指定不需要的-git-管理文件-gitignore-文件" tabindex="-1"><a class="header-anchor" href="#指定不需要的-git-管理文件-gitignore-文件" aria-hidden="true">#</a> 指定不需要的 git 管理文件？ <code>.gitignore 文件</code></h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>node_modules/
src/.vuepress/.cache/
src/.vuepress/.temp/
src/.vuepress/dist/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他整理" tabindex="-1"><a class="header-anchor" href="#其他整理" aria-hidden="true">#</a> 其他整理</h2><h3 id="选项解释" tabindex="-1"><a class="header-anchor" href="#选项解释" aria-hidden="true">#</a> 选项解释</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-d</span> --delete：删除

<span class="token parameter variable">-D</span> <span class="token parameter variable">--delete</span> --force的快捷键

<span class="token parameter variable">-f</span> --force：强制

<span class="token parameter variable">-m</span> --move：移动或重命名

<span class="token parameter variable">-M</span> <span class="token parameter variable">--move</span> --force的快捷键

<span class="token parameter variable">-r</span> --remote：远程

<span class="token parameter variable">-a</span> --all：所有
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="分支管理" tabindex="-1"><a class="header-anchor" href="#分支管理" aria-hidden="true">#</a> 分支管理</h3><ul><li>新建分支: <code>git branch</code> 分支名 <ul><li><code>git branch -r</code> 查看远程分支</li><li><code>git branch -a</code> 查看远程和本地分支</li><li><code>git branch -f</code> 新建分支但不切换</li><li><code>git branch -b</code> 新建分支并切换</li><li><code>git branch -d|-D</code> 删除本地分支</li><li><code>git branch -m|-M</code> 强制重命名</li></ul></li><li>切换分支: <code>git checkout 分支名</code></li><li>列出分支: <code>git branch</code></li><li>删除分支: <code>git branch -d 分支名</code></li><li>合并分支: <code>git merge 需要合并的分支</code></li><li>合并分支: <code>git rebase 合并到的分支</code></li></ul><h3 id="相对引用" tabindex="-1"><a class="header-anchor" href="#相对引用" aria-hidden="true">#</a> 相对引用</h3><ul><li><code>^</code>向上移动一个记录 <code>git checkout 分支 HEAD^</code></li><li>使用 <code>~</code> 向上移动多个提交记录，如 <code>~3</code></li></ul><h3 id="撤销变更" tabindex="-1"><a class="header-anchor" href="#撤销变更" aria-hidden="true">#</a> 撤销变更</h3><ul><li><code>git reset</code> 本地回滚上一步，原来指向的提交记录就跟从来没有提交过一样</li><li><code>git revert</code> 远程回滚，但会生成一条提交记录</li></ul><h3 id="查看历史" tabindex="-1"><a class="header-anchor" href="#查看历史" aria-hidden="true">#</a> 查看历史</h3><ul><li><code>git log</code><ul><li><code>git log --oneline</code> 查看历史记录的简洁的版本。</li><li><code>git log --graph</code> 查看历史中什么时候出现了分支、合并。</li><li><code>git log --reverse</code> 逆向显示所有日志。</li></ul></li></ul>`,71);function v(b,h){const e=d("ExternalLinkIcon");return l(),c("div",null,[p,n("p",null,[s("这里变更或者移动文件可以参考文献： "),n("a",m,[s("git mv 命令"),t(e)])]),u])}const k=i(r,[["render",v],["__file","index.html.vue"]]);export{k as default};
