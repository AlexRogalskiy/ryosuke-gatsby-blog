webpackJsonp([0xd5a19cb409e8],{574:function(n,s){n.exports={data:{blog:{html:'<p>Do your components look like this in NextJS?</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> ShopProfile <span class="token keyword">from</span> <span class="token string">\'../../layouts/ShopProfile/ShopProfile\'</span>\n<span class="token keyword">import</span> KushyApi <span class="token keyword">from</span> <span class="token string">\'../../utils/KushyApi\'</span>\n<span class="token keyword">import</span> Menu <span class="token keyword">from</span> <span class="token string">\'../../components/Menu/Menu\'</span>\n</code></pre>\n      </div>\n<p>This kind of setup is ok for smaller projects, but the second you need to shift a component around folders, it\'s easy to get lost in a sea of relative directories (was it two or three sets of <code class="language-text">.../</code> 🤔).</p>\n<h2>The plugin way</h2>\n<p>The babel plugin called root-import can handle this for us, and it\'s pretty easy to setup:</p>\n<p><code class="language-text">npm install babel-plugin-root-import --save-dev</code></p>\n<p>Add a <code class="language-text">.babelrc</code> to your project root:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token punctuation">{</span>\n    <span class="token string">"presets"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>\n        <span class="token string">"next/babel"</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token string">"plugins"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">[</span>\n            <span class="token string">"babel-plugin-root-import"</span>\n        <span class="token punctuation">]</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token string">"env"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token comment">// For React Native</span>\n        <span class="token string">"production"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n            <span class="token string">"plugins"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>\n                <span class="token string">"babel-plugin-root-import"</span>\n            <span class="token punctuation">]</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>That\'s it. You can include components by using the <code class="language-text">~</code> symbol as the root path:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> ShopProfile <span class="token keyword">from</span> <span class="token string">\'~/layouts/ShopProfile/ShopProfile\'</span>\n<span class="token keyword">import</span> KushyApi <span class="token keyword">from</span> <span class="token string">\'~/utils/KushyApi\'</span>\n<span class="token keyword">import</span> Menu <span class="token keyword">from</span> <span class="token string">\'~/components/Menu/Menu\'</span>\n</code></pre>\n      </div>\n<blockquote>\n<p>Since NextJS uses a custom babel setup, when we provide our own setup, it overrides the default config. Which means we lose all kinds of great functionality, like <a href="https://babeljs.io/docs/en/babel-plugin-transform-object-rest-spread/">object spread</a>. That\'s why we use Next\'s Babel presets in the beginning of the config(<code class="language-text">&quot;presets&quot;: [ &quot;next/babel&quot; ],</code>), and drop our plugin underneath. Now you shouldn\'t get any errors during compilation.</p>\n</blockquote>\n<h2>The better way</h2>\n<p>I looked up how to do this in general, not specifically for NexJS, and I found a site with <a href="https://moduscreate.com/blog/es6-es2015-import-no-relative-path-webpack/">a pretty concise guide</a>. It stated that for Webpack 2, you\'d add this to your <code class="language-text">webpack.config.js</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">resolve<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n  modules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'./\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n</code></pre>\n      </div>\n<p>So in NextJS, I tried doing this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> withLess <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'@zeit/next-less\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> withCSS <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'@zeit/next-css\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'path\'</span><span class="token punctuation">)</span>\n\n<span class="token comment">// To add new modules, nest the function (like a HOC in React)</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">withCSS</span><span class="token punctuation">(</span><span class="token function">withLess</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token function">webpack</span><span class="token punctuation">(</span>config<span class="token punctuation">,</span> options<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        config<span class="token punctuation">.</span>module<span class="token punctuation">.</span>rules<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            test<span class="token punctuation">:</span> <span class="token regex">/\\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/</span><span class="token punctuation">,</span>\n            use<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n                loader<span class="token punctuation">:</span> <span class="token string">\'url-loader\'</span><span class="token punctuation">,</span>\n                options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n                    limit<span class="token punctuation">:</span> <span class="token number">100000</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n        <span class="token comment">// Here is the magic</span>\n        <span class="token comment">// We push our config into the resolve.modules array</span>\n        config<span class="token punctuation">.</span>resolve<span class="token punctuation">.</span>modules<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'./\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n\n        <span class="token keyword">return</span> config\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>This allows you to use your components and modules like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> ShopProfile <span class="token keyword">from</span> <span class="token string">\'layouts/ShopProfile/ShopProfile\'</span>\n<span class="token keyword">import</span> KushyApi <span class="token keyword">from</span> <span class="token string">\'utils/KushyApi\'</span>\n<span class="token keyword">import</span> Menu <span class="token keyword">from</span> <span class="token string">\'components/Menu/Menu\'</span>\n</code></pre>\n      </div>\n<p>A bit cleaner than using the <code class="language-text">~</code> symbol, way easier than installing another dependency 👍</p>\n<p>Hope that helps 🍻\nRyo</p>\n<hr>\n<p><strong>References</strong>:</p>\n<ul>\n<li><a href="https://github.com/entwicklerstube/babel-plugin-root-import#readme">babel-plugin-root-import</a></li>\n<li><a href="https://moduscreate.com/blog/es6-es2015-import-no-relative-path-webpack/">ES6 Import Statement Without Relative Paths Using Webpack</a></li>\n<li><a href="https://github.com/zeit/next.js/issues/342">NextJS Issues - Relative modules absolutely</a></li>\n<li><a href="https://github.com/zeit/next.js/issues/4010">How to use .babelrc in combination with next.config.js?</a></li>\n</ul>',frontmatter:{title:"NextJS Tip: Relative ES6 Modules",cover_image:{publicURL:"/static/NextJS-Tip--Relative-ES6-Modules-1920px-80906733deef4503a1f7dd1622faa5e9.jpg",childImageSharp:{sizes:{tracedSVG:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='266' viewBox='0 0 400 266' version='1'%3E%3Cpath d='M0 133v133h28c33 0 30 1 30-9 0-4 0-6 2-6l1-2v-1c1 0 2 1 1 2l1 1 1 1-1 1c-2 0-3 0-3 2l1 1 1 2 1 2 1-2c0-2 1-2 8-2s8 0 8-2 0-2 3-1l5 1c1 1 3 8 2 9h6l-1-1h-2l2-1 1-1 2-2c3-1 3-2 0-3-5-1-2-7 3-7 2 0 3 0 2-2l1-2 1 2c-1 1-1 1 2 1l6-1c2 0 2 0 1-1-2-1-2-1 1-1l5 1 1 1 1 1 4 1c2 0 3 2 2 7 0 1 5 3 6 2v-2c-1-3 2-3 5 0 2 1 3 2 4 1h6l4 2-2 3c-3 3-4 5-1 5l1-1c0-2 5-7 6-7v1l2 1h4l2 1c3-2 9-3 10-2h1c0-1 5-1 9 1 2 1 3 1 2 3 0 2 0 2 1 1l2 1 1 1 1-2 1-3c1 0 4 2 4 4s16 2 19 0l3-2 3 2c1 2 2 1 2-2l5-5c7-5 11-10 11-14 0-2 1-3 2-3 4-2 6 0 6 5 1 5 2 8 6 12l2 5 3 3-1-8 2-4c1-2 1-2 5 0 5 3 5 3 4-3 0-4 0-4 2-5 2 0 2-1 1-3 0-1 0-2 2-3l5-4 5-3c2 0 4-2 4-5s0-3 2-2c3 2 4 1 2-1v-12l1 2c1 3 1 3 1 1 0-4 6-5 6-2l2 4c2 1 2 1 1-2 0-3 1-4 3-2s3 0 2-4l1-4v-4l1-2c2 1 3-1 2-3l4-1c3 0 4 0 4-2 1-4 3-3 4 1 0 4-1 5-6 9l-3 3c0 2 3 3 4 2l4-1c3-1 3-1 2-4-1-8 12-15 18-10l3 2-1-12-1-4c0-3 1-4 3-4s3-1 3-2 0-2-1-1l-1-2 1-3h1v-2c2-2 2-2 0-3h-2c-1 2-6 1-6-1s2-8 4-8c2-2 1-3-1-2-2 0-5 6-5 9s-4 2-5 0-1-2-1 0c-1 1-2 2-6 2l-6 1c-2 2-4 2-4 0l1-1c2 0 1-3-1-3v-1l-1-2c-2-2-2-2 0-3l3-2v-4c0-4 0-4 3-4s4 2 2 2l-1 1h3c2 0 3 0 4 2s1 2 2 1h2l1-2c0-1 0-2-1-1l-1-1c0-1 1-2 3-1h2l3-1 2-2 3-2c2 0 3-1 3-3 0-3 1-3 3 0 2 2 3 3 5 1l3-2 1-1h1c1 2 4 0 5-3l1-1 2 1c2-1 7 4 5 5l-1-1-2-1c-1 1 0 2 1 4l2 4h1c1-1 1-1 1 1l3 4 1 1-6-3-4-2c0 1 7 7 9 7v1l-5 1c-2-1-3 0-1 2l1 2 3 1c3 0 3 0 2 1s-1 1 2 1c2 0 3-1 3-2 0-3 7-9 7-7 1 1 1 1 1-1l2-2 2-1V73l1-73H0v133m319-47l-1 4-1 3-3 2c-3 2-2 5 2 6l2 4c0 4 2 6 5 5l1 1v1l2-1-1-1v-1c1-2 2-2 3 0 3 2 6 1 7-1l2-2 1-3 1-2c3-3 3-6-1-7-2-1-3-2-2-3 2-5-3-8-8-5-1 2-2 2-3 0h-6m52 27l-5 5v4c0 3-2 4-4 1-2-1-2-1-2 1 0 3 1 4 5 5 2 0 3 0 3-2l1-2v-1c-1-1-1-1 1-3 1-1 2-2 1-3h1l1-1 2-1v7l1 4c-1 1 0 2 1 3l1 4c0 2 2 5 4 5l4-2c3-1 4-3 2-3l-2-2-1-2-1 1h-1c-2-2-2-3-1-3 2 0 5-3 3-4l-1-2-2-2v-2c3-3 1-4-3-4-2 1-3 1-3-1l-2-1-3 1m-87 8l-9 12-3 4-4-6-9-10c-2 0-1 3 1 5l6 8 4 5-4 5-6 9-3 4-12-1h-12v-6l1-8c0-2 6-2 7 0h2c1-1 3-2 7-2l5-1-11-1h-11v-14h12c9 0 11 0 11-2l-13-1-12 1-1 17 1 18c0 2 1 2 14 2h15l6-9 6-8 2 3 6 8 6 6c2 0 1-2-2-6l-7-9-3-5 3-4a572 572 0 0 0 7-14m-218-4l-1 35c-1 2 1 5 4 5l13-1h10v-8l-9 1h-9v-10h7c9 0 9 0 8-4 0-2-1-2-8-2h-7v-3c-1-6 0-6 7-6 12 0 11 0 11-3v-3l-13-1H66m38 1c-7 1-11 13-5 18l7 3c10 3 13 7 7 9-3 1-7 1-12-2l-4-2-1 3c-2 4-2 5 5 7 13 5 23 0 23-9 0-6-2-8-11-12l-9-4c-1-5 6-6 12-3l4 2 1-3c2-4 2-4-4-6-4-2-8-2-13-1m34 0c-3 1-8 6-8 8l-1 2c-2 0-1 17 0 20 4 7 12 10 19 7 6-3 10-12 7-18s-13-9-18-5c-2 1-2 1-1-2 1-6 7-8 12-4 3 2 3 2 5 0s2-3 1-4c-3-4-11-6-16-4m62 22l1 19c1 0 2-10 2-23-1-11 0-11 2-8a911 911 0 0 0 24 33l-4-8v-1a115 115 0 0 1-17-24l-3-3c-5-8-5-7-5 15m100-19l-12 1c0 2 2 2 6 2l6 1v17c0 16 0 18 2 17 1 0 2-2 2-17v-17l6-1 6-1c0-2-3-4-3-3l-13 1m-162 17c-1 1-2 2-2 5 0 8 9 9 12 2 3-6-4-11-10-7m233 21v1l-2 1v2l-2-1-1-1v3l-2 4-3 4-2 1-1 2c1 1 0 1-1 2l-2 1c0 1-1 2-3 2l-2 1 2 1c4 1 5 3 3 9-1 2 3 1 4-1l1-2v2c0 2 0 2 1 1s8 0 10 3c3 4 3 12-1 15-3 4-3 6 0 3s5-3 7 0c1 2 2 2 4 1h6c4 3 3 1-1-2s-4-3-4-10c0-8 2-17 5-18l7-1c6-1 7-4 1-5-3-1-7-6-7-9 1-1 0-1-1-1h-5c-2-1-6 2-4 3v8c-2 2-8 4-9 4v-1l3-2c2-4 2-4 0-4-5 0-6-8-1-10 3-2 5-3 5-5-1-2-5-3-5-1M85 170c-4 4-1 11 5 11 3 0 5-2 5-6 0-3-3-7-6-7l-4 2m12 2c0 9 0 10 5 9 3 0 4-1 5-2 0-3 1-2 4 0 3 3 6 3 8 0 2-1 2-8 1-10-1-1-1 0-1 3 0 5-1 8-4 8s-4-2-4-7l-1-5v4l-1 4-1-2c0-3-5-6-8-6s-3 0-3 4m300 46l-1 2c0 2 0 2-1 1-2-1-2 0-2 5l-1 5v-5c0-4 0-4-3-5s-4-1-5 3c0 2-1 3-2 3-3 0-2 2 1 2 3 1 3 1 1 2s-2 1 0 1l2 1 2 1v1c-2 2-2 2 0 3 1 2 1 2-1 1l-5-2a650 650 0 0 0-11-6c-2-2-2 0 0 4 4 7 0 14-5 9-2-2-3 0-1 2l3 6c0 3 1 4 2 4l-1 2c-1 1-3 2-5 1-4 0-4 0-4 2s-1 2-3 2c-7 0-7 0-6 2l24 1h24l-1-24c0-26 0-25-1-24m-54 11l-6 2c-1-1-3 0-4 1l-4 1-5-1-3-1-1 1-5 1c-6-1-6 1-1 7 7 6 6 10-2 10h-2l2 2c2 1 11 2 12 1l3-1h3l2-3 2-6c1-4 3-6 8-8 3 0 3 0 3 2-1 1 2 5 4 5l-1-5c-3-2-2-3 0-3 3 1 4 0 2-4-2-5-3-5-7-1' fill='lightgray' fill-rule='evenodd'/%3E%3C/svg%3E",src:"/static/NextJS-Tip--Relative-ES6-Modules-1920px-80906733deef4503a1f7dd1622faa5e9-4e8db.jpg",srcSet:"/static/NextJS-Tip--Relative-ES6-Modules-1920px-80906733deef4503a1f7dd1622faa5e9-7cc04.jpg 310w,\n/static/NextJS-Tip--Relative-ES6-Modules-1920px-80906733deef4503a1f7dd1622faa5e9-69042.jpg 620w,\n/static/NextJS-Tip--Relative-ES6-Modules-1920px-80906733deef4503a1f7dd1622faa5e9-4e8db.jpg 1240w,\n/static/NextJS-Tip--Relative-ES6-Modules-1920px-80906733deef4503a1f7dd1622faa5e9-50ab1.jpg 1860w,\n/static/NextJS-Tip--Relative-ES6-Modules-1920px-80906733deef4503a1f7dd1622faa5e9-e738f.jpg 1920w"}}},date:"16 July, 2018",tags:["nextjs","js","es6","tips"],section:"blog"},fields:{slug:"/blog/2018/nextjs-tip-relative-es6-modules/"}},relatedPosts:null},pathContext:{tag:"es6",slug:"/blog/2018/nextjs-tip-relative-es6-modules/"}}}});
//# sourceMappingURL=path---blog-2018-nextjs-tip-relative-es-6-modules-5dd235ecfbc642deca60.js.map