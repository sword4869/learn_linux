import{_ as n,W as s,X as a,Y as p}from"./framework-9a5142fa.js";const t={},e=p(`<p>[toc]</p><h2 id="打开主题" tabindex="-1"><a class="header-anchor" href="#打开主题" aria-hidden="true">#</a> 打开主题</h2><p><img src="https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202410241229172.png" alt="image-20241024122923132"></p><p>基于 github风格的，编辑文件<code>github.css</code></p><h2 id="修改" tabindex="-1"><a class="header-anchor" href="#修改" aria-hidden="true">#</a> 修改</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
    <span class="token property">--side-bar-bg-color</span><span class="token punctuation">:</span> #fafafa<span class="token punctuation">;</span>
    <span class="token property">--control-text-color</span><span class="token punctuation">:</span> #777<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@include-when-export</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>https://fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,700,400&amp;subset=latin,latin-ext<span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>

<span class="token comment">/* open-sans-regular - latin-ext_latin */</span>
<span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&#39;Open Sans&#39;</span><span class="token punctuation">;</span>
    <span class="token property">font-style</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>
    <span class="token property">src</span><span class="token punctuation">:</span> <span class="token function">local</span><span class="token punctuation">(</span><span class="token string">&#39;Open Sans Regular&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">local</span><span class="token punctuation">(</span><span class="token string">&#39;OpenSans-Regular&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;./github/open-sans-v17-latin-ext_latin-regular.woff2&#39;</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&#39;woff2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">unicode-range</span><span class="token punctuation">:</span> U+0000-00FF<span class="token punctuation">,</span> U+0131<span class="token punctuation">,</span> U+0152-0153<span class="token punctuation">,</span> U+02BB-02BC<span class="token punctuation">,</span> U+02C6<span class="token punctuation">,</span> U+02DA<span class="token punctuation">,</span> U+02DC<span class="token punctuation">,</span> U+2000-206F<span class="token punctuation">,</span> U+2074<span class="token punctuation">,</span> U+20AC<span class="token punctuation">,</span> U+2122<span class="token punctuation">,</span> U+2191<span class="token punctuation">,</span> U+2193<span class="token punctuation">,</span> U+2212<span class="token punctuation">,</span> U+2215<span class="token punctuation">,</span> U+FEFF<span class="token punctuation">,</span> U+FFFD<span class="token punctuation">,</span> U+0100-024F<span class="token punctuation">,</span> U+0259<span class="token punctuation">,</span> U+1E00-1EFF<span class="token punctuation">,</span> U+2020<span class="token punctuation">,</span> U+20A0-20AB<span class="token punctuation">,</span> U+20AD-20CF<span class="token punctuation">,</span> U+2113<span class="token punctuation">,</span> U+2C60-2C7F<span class="token punctuation">,</span> U+A720-A7FF<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">/* open-sans-italic - latin-ext_latin */</span>
  <span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&#39;Open Sans&#39;</span><span class="token punctuation">;</span>
    <span class="token property">font-style</span><span class="token punctuation">:</span> italic<span class="token punctuation">;</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>
    <span class="token property">src</span><span class="token punctuation">:</span> <span class="token function">local</span><span class="token punctuation">(</span><span class="token string">&#39;Open Sans Italic&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">local</span><span class="token punctuation">(</span><span class="token string">&#39;OpenSans-Italic&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;./github/open-sans-v17-latin-ext_latin-italic.woff2&#39;</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&#39;woff2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">unicode-range</span><span class="token punctuation">:</span> U+0000-00FF<span class="token punctuation">,</span> U+0131<span class="token punctuation">,</span> U+0152-0153<span class="token punctuation">,</span> U+02BB-02BC<span class="token punctuation">,</span> U+02C6<span class="token punctuation">,</span> U+02DA<span class="token punctuation">,</span> U+02DC<span class="token punctuation">,</span> U+2000-206F<span class="token punctuation">,</span> U+2074<span class="token punctuation">,</span> U+20AC<span class="token punctuation">,</span> U+2122<span class="token punctuation">,</span> U+2191<span class="token punctuation">,</span> U+2193<span class="token punctuation">,</span> U+2212<span class="token punctuation">,</span> U+2215<span class="token punctuation">,</span> U+FEFF<span class="token punctuation">,</span> U+FFFD<span class="token punctuation">,</span> U+0100-024F<span class="token punctuation">,</span> U+0259<span class="token punctuation">,</span> U+1E00-1EFF<span class="token punctuation">,</span> U+2020<span class="token punctuation">,</span> U+20A0-20AB<span class="token punctuation">,</span> U+20AD-20CF<span class="token punctuation">,</span> U+2113<span class="token punctuation">,</span> U+2C60-2C7F<span class="token punctuation">,</span> U+A720-A7FF<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">/* open-sans-700 - latin-ext_latin */</span>
  <span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&#39;Open Sans&#39;</span><span class="token punctuation">;</span>
    <span class="token property">font-style</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
    <span class="token property">src</span><span class="token punctuation">:</span> <span class="token function">local</span><span class="token punctuation">(</span><span class="token string">&#39;Open Sans Bold&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">local</span><span class="token punctuation">(</span><span class="token string">&#39;OpenSans-Bold&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;./github/open-sans-v17-latin-ext_latin-700.woff2&#39;</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&#39;woff2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token property">unicode-range</span><span class="token punctuation">:</span> U+0000-00FF<span class="token punctuation">,</span> U+0131<span class="token punctuation">,</span> U+0152-0153<span class="token punctuation">,</span> U+02BB-02BC<span class="token punctuation">,</span> U+02C6<span class="token punctuation">,</span> U+02DA<span class="token punctuation">,</span> U+02DC<span class="token punctuation">,</span> U+2000-206F<span class="token punctuation">,</span> U+2074<span class="token punctuation">,</span> U+20AC<span class="token punctuation">,</span> U+2122<span class="token punctuation">,</span> U+2191<span class="token punctuation">,</span> U+2193<span class="token punctuation">,</span> U+2212<span class="token punctuation">,</span> U+2215<span class="token punctuation">,</span> U+FEFF<span class="token punctuation">,</span> U+FFFD<span class="token punctuation">,</span> U+0100-024F<span class="token punctuation">,</span> U+0259<span class="token punctuation">,</span> U+1E00-1EFF<span class="token punctuation">,</span> U+2020<span class="token punctuation">,</span> U+20A0-20AB<span class="token punctuation">,</span> U+20AD-20CF<span class="token punctuation">,</span> U+2113<span class="token punctuation">,</span> U+2C60-2C7F<span class="token punctuation">,</span> U+A720-A7FF<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">/* open-sans-700italic - latin-ext_latin */</span>
  <span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&#39;Open Sans&#39;</span><span class="token punctuation">;</span>
    <span class="token property">font-style</span><span class="token punctuation">:</span> italic<span class="token punctuation">;</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
    <span class="token property">src</span><span class="token punctuation">:</span> <span class="token function">local</span><span class="token punctuation">(</span><span class="token string">&#39;Open Sans Bold Italic&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">local</span><span class="token punctuation">(</span><span class="token string">&#39;OpenSans-BoldItalic&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;./github/open-sans-v17-latin-ext_latin-700italic.woff2&#39;</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&#39;woff2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">unicode-range</span><span class="token punctuation">:</span> U+0000-00FF<span class="token punctuation">,</span> U+0131<span class="token punctuation">,</span> U+0152-0153<span class="token punctuation">,</span> U+02BB-02BC<span class="token punctuation">,</span> U+02C6<span class="token punctuation">,</span> U+02DA<span class="token punctuation">,</span> U+02DC<span class="token punctuation">,</span> U+2000-206F<span class="token punctuation">,</span> U+2074<span class="token punctuation">,</span> U+20AC<span class="token punctuation">,</span> U+2122<span class="token punctuation">,</span> U+2191<span class="token punctuation">,</span> U+2193<span class="token punctuation">,</span> U+2212<span class="token punctuation">,</span> U+2215<span class="token punctuation">,</span> U+FEFF<span class="token punctuation">,</span> U+FFFD<span class="token punctuation">,</span> U+0100-024F<span class="token punctuation">,</span> U+0259<span class="token punctuation">,</span> U+1E00-1EFF<span class="token punctuation">,</span> U+2020<span class="token punctuation">,</span> U+20A0-20AB<span class="token punctuation">,</span> U+20AD-20CF<span class="token punctuation">,</span> U+2113<span class="token punctuation">,</span> U+2C60-2C7F<span class="token punctuation">,</span> U+A720-A7FF<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

<span class="token selector">html</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
    <span class="token property">-webkit-font-smoothing</span><span class="token punctuation">:</span> antialiased<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">body</span> <span class="token punctuation">{</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&quot;Clear Sans&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Helvetica Neue&quot;</span><span class="token punctuation">,</span> Helvetica<span class="token punctuation">,</span> Arial<span class="token punctuation">,</span> <span class="token string">&#39;Segoe UI Emoji&#39;</span><span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>51<span class="token punctuation">,</span> 51<span class="token punctuation">,</span> 51<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 1.6<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#write</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span>
    <span class="token property">padding-bottom</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 1400px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 1800px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token selector">#write &gt; ul:first-child,
#write &gt; ol:first-child</span><span class="token punctuation">{</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">a</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #4183C4<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">h1,
h2,
h3,
h4,
h5,
h6</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 1.4<span class="token punctuation">;</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> text<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">h1:hover a.anchor,
h2:hover a.anchor,
h3:hover a.anchor,
h4:hover a.anchor,
h5:hover a.anchor,
h6:hover a.anchor</span> <span class="token punctuation">{</span>
    <span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">h1 tt,
h1 code</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">h2 tt,
h2 code</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">h3 tt,
h3 code</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">h4 tt,
h4 code</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">h5 tt,
h5 code</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">h6 tt,
h6 code</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">h1</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 2.25em<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 1.2<span class="token punctuation">;</span>
    <span class="token property">border-bottom</span><span class="token punctuation">:</span> 1px solid #eee<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">h2</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 1.75em<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 1.225<span class="token punctuation">;</span>
    <span class="token property">border-bottom</span><span class="token punctuation">:</span> 1px solid #eee<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*@media print {
    .typora-export h1,
    .typora-export h2 {
        border-bottom: none;
        padding-bottom: initial;
    }

    .typora-export h1::after,
    .typora-export h2::after {
        content: &quot;&quot;;
        display: block;
        height: 100px;
        margin-top: -96px;
        border-top: 1px solid #eee;
    }
}*/</span>

<span class="token selector">h3</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 1.5em<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 1.43<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">h4</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 1.25em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">h5</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">h6</span> <span class="token punctuation">{</span>
   <span class="token property">font-size</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #777<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">p,
blockquote,
ul,
ol,
dl,
table</span><span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0.8em 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">li&gt;ol,
li&gt;ul</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">hr</span> <span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 2px<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 16px 0<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #e7e7e7<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 0 none<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token property">box-sizing</span><span class="token punctuation">:</span> content-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">li p.first</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">ul,
ol</span> <span class="token punctuation">{</span>
    <span class="token property">padding-left</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">ul:first-child,
ol:first-child</span> <span class="token punctuation">{</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">ul:last-child,
ol:last-child</span> <span class="token punctuation">{</span>
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">blockquote</span> <span class="token punctuation">{</span>
    <span class="token property">border-left</span><span class="token punctuation">:</span> 4px solid #dfe2e5<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0 15px<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #777777<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">blockquote blockquote</span> <span class="token punctuation">{</span>
    <span class="token property">padding-right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">table</span> <span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">word-break</span><span class="token punctuation">:</span> initial<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">table tr</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #dfe2e5<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">table tr:nth-child(2n),
thead</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #f8f8f8<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">table th</span> <span class="token punctuation">{</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #dfe2e5<span class="token punctuation">;</span>
    <span class="token property">border-bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 6px 13px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">table td</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #dfe2e5<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 6px 13px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">table th:first-child,
table td:first-child</span> <span class="token punctuation">{</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">table th:last-child,
table td:last-child</span> <span class="token punctuation">{</span>
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.CodeMirror-lines</span> <span class="token punctuation">{</span>
    <span class="token property">padding-left</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.code-tooltip</span> <span class="token punctuation">{</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 1px 1px 0 <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>28<span class="token punctuation">,</span>36<span class="token punctuation">,</span>.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">border-top</span><span class="token punctuation">:</span> 1px solid #eef2f2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.md-fences,
code,
tt</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #e7eaed<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #f8f8f8<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 2px 4px 0px 4px<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 0.9em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">code</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #f3f4f4<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0 2px 0 2px<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.md-fences</span> <span class="token punctuation">{</span>
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
    <span class="token property">padding-top</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
    <span class="token property">padding-bottom</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token selector">.md-task-list-item &gt; input</span> <span class="token punctuation">{</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> -1.3em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@media</span> print</span> <span class="token punctuation">{</span>
    <span class="token selector">html</span> <span class="token punctuation">{</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 13px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">pre</span> <span class="token punctuation">{</span>
        <span class="token property">page-break-inside</span><span class="token punctuation">:</span> avoid<span class="token punctuation">;</span>
        <span class="token property">word-wrap</span><span class="token punctuation">:</span> break-word<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.md-fences</span> <span class="token punctuation">{</span>
	<span class="token property">background-color</span><span class="token punctuation">:</span> #f8f8f8<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 0.8em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#write pre.md-meta-block</span> <span class="token punctuation">{</span>
	<span class="token property">padding</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 85%<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 1.45<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #f7f7f7<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #777777<span class="token punctuation">;</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> 0 <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mathjax-block&gt;.code-tooltip</span> <span class="token punctuation">{</span>
	<span class="token property">bottom</span><span class="token punctuation">:</span> .375rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.md-mathjax-midline</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #fafafa<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#write&gt;h3.md-focus:before</span><span class="token punctuation">{</span>
	<span class="token property">left</span><span class="token punctuation">:</span> -1.5625rem<span class="token punctuation">;</span>
	<span class="token property">top</span><span class="token punctuation">:</span> .375rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#write&gt;h4.md-focus:before</span><span class="token punctuation">{</span>
	<span class="token property">left</span><span class="token punctuation">:</span> -1.5625rem<span class="token punctuation">;</span>
	<span class="token property">top</span><span class="token punctuation">:</span> .285714286rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#write&gt;h5.md-focus:before</span><span class="token punctuation">{</span>
	<span class="token property">left</span><span class="token punctuation">:</span> -1.5625rem<span class="token punctuation">;</span>
	<span class="token property">top</span><span class="token punctuation">:</span> .285714286rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#write&gt;h6.md-focus:before</span><span class="token punctuation">{</span>
	<span class="token property">left</span><span class="token punctuation">:</span> -1.5625rem<span class="token punctuation">;</span>
	<span class="token property">top</span><span class="token punctuation">:</span> .285714286rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.md-image&gt;.md-meta</span> <span class="token punctuation">{</span>
    <span class="token comment">/*border: 1px solid #ddd;*/</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 2px 0px 0px 4px<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 0.9em<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.md-tag</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #a7a7a7<span class="token punctuation">;</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.md-toc</span> <span class="token punctuation">{</span> 
    <span class="token property">margin-top</span><span class="token punctuation">:</span>20px<span class="token punctuation">;</span>
    <span class="token property">padding-bottom</span><span class="token punctuation">:</span>20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.sidebar-tabs</span> <span class="token punctuation">{</span>
    <span class="token property">border-bottom</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#typora-quick-open</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ddd<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #f8f8f8<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#typora-quick-open-item</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #FAFAFA<span class="token punctuation">;</span>
    <span class="token property">border-color</span><span class="token punctuation">:</span> #FEFEFE #e5e5e5 #e5e5e5 #eee<span class="token punctuation">;</span>
    <span class="token property">border-style</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span>
    <span class="token property">border-width</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/** focus mode */</span>
<span class="token selector">.on-focus-mode blockquote</span> <span class="token punctuation">{</span>
    <span class="token property">border-left-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>85<span class="token punctuation">,</span> 85<span class="token punctuation">,</span> 85<span class="token punctuation">,</span> 0.12<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">header, .context-menu, .megamenu-content, footer</span><span class="token punctuation">{</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&quot;Segoe UI&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Arial&quot;</span><span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.file-node-content:hover .file-node-icon,
.file-node-content:hover .file-node-open-state</span><span class="token punctuation">{</span>
    <span class="token property">visibility</span><span class="token punctuation">:</span> visible<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mac-seamless-mode #typora-sidebar</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #fafafa<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--side-bar-bg-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mac-os #write</span><span class="token punctuation">{</span>
    <span class="token property">caret-color</span><span class="token punctuation">:</span> AccentColor<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.md-lang</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #b4654d<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*.html-for-mac {
    --item-hover-bg-color: #E6F0FE;
}*/</span>

<span class="token selector">#md-notification .btn</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.dropdown-menu .divider</span> <span class="token punctuation">{</span>
    <span class="token property">border-color</span><span class="token punctuation">:</span> #e5e5e5<span class="token punctuation">;</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0.4<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.ty-preferences .window-content</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #fafafa<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.ty-preferences .nav-group-item.active</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #999<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.menu-item-container a.menu-style-btn</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #f5f8fa<span class="token punctuation">;</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span> 180deg <span class="token punctuation">,</span> <span class="token function">hsla</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0%<span class="token punctuation">,</span> 100%<span class="token punctuation">,</span> 0.8<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">hsla</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0%<span class="token punctuation">,</span> 100%<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="默认-完全看不出左右" tabindex="-1"><a class="header-anchor" href="#默认-完全看不出左右" aria-hidden="true">#</a> 默认<code>“”</code>完全看不出左右</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&quot;Open Sans&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Clear Sans&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Helvetica Neue&quot;</span><span class="token punctuation">,</span> Helvetica<span class="token punctuation">,</span> Arial<span class="token punctuation">,</span> <span class="token string">&#39;Segoe UI Emoji&#39;</span><span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>51<span class="token punctuation">,</span> 51<span class="token punctuation">,</span> 51<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 1.6<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>删掉第一个字体 <code>&quot;Open Sans&quot;,</code> 即可。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&quot;Clear Sans&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Helvetica Neue&quot;</span><span class="token punctuation">,</span> Helvetica<span class="token punctuation">,</span> Arial<span class="token punctuation">,</span> <span class="token string">&#39;Segoe UI Emoji&#39;</span><span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>51<span class="token punctuation">,</span> 51<span class="token punctuation">,</span> 51<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 1.6<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="code代码字体缩小" tabindex="-1"><a class="header-anchor" href="#code代码字体缩小" aria-hidden="true">#</a> code代码字体缩小</h3><h4 id="code-block" tabindex="-1"><a class="header-anchor" href="#code-block" aria-hidden="true">#</a> code block \`\`\`</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.md-fences</span> <span class="token punctuation">{</span>
	<span class="token property">background-color</span><span class="token punctuation">:</span> #f8f8f8<span class="token punctuation">;</span>
	<span class="token property">font-size</span><span class="token punctuation">:</span> 0.8em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>增加<code>font-size: 0.8em;</code></p><h4 id="code-inline" tabindex="-1"><a class="header-anchor" href="#code-inline" aria-hidden="true">#</a> code inline \`\`</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">code</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #f3f4f4<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0 2px 0 2px<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>增加<code>font-size: 1em;</code> ：让其和正常字体一样大小</p><h3 id="占满屏幕" tabindex="-1"><a class="header-anchor" href="#占满屏幕" aria-hidden="true">#</a> 占满屏幕</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">#write</span> <span class="token punctuation">{</span>
    <span class="token property">max-width</span><span class="token punctuation">:</span> 860px<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token property">padding-bottom</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 1400px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token selector">#write</span> <span class="token punctuation">{</span>
        <span class="token property">max-width</span><span class="token punctuation">:</span> 1024px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 1800px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token selector">#write</span> <span class="token punctuation">{</span>
        <span class="token property">max-width</span><span class="token punctuation">:</span> 1200px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>删掉 <code>max-width</code> 的属性限制</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">#write</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span>
    <span class="token property">padding-bottom</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 1400px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 1800px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>顺便调大 padding</p>`,22),c=[e];function o(i,l){return s(),a("div",null,c)}const r=n(t,[["render",o],["__file","主题修改.html.vue"]]);export{r as default};
