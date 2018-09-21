webpackJsonp([60383714059621],{572:function(s,n){s.exports={data:{blog:{html:'<p>Ever needed to apply middleware to specific controller methods? Just use the <code class="language-text">middleware()</code> method in the controller\'s constructor and feed it a middleware and array of method names.</p>\n<blockquote>\n<p>Protip: You can stack middleware as much as you want (just don\'t lock yourself out!). If you need to apply different middleware, or complex \'only\' and \'except\' situations, call the middleware method as much as you need.</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code class="language-php"><span class="token delimiter important">&lt;?php</span>\n<span class="token comment">//... the class</span>\n<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">__construct</span><span class="token punctuation">(</span><span class="token punctuation">)</span> \n<span class="token punctuation">{</span>\n    <span class="token comment">// Apply middleware to only certain routes</span>\n    <span class="token variable">$this</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">middleware</span><span class="token punctuation">(</span><span class="token single-quoted-string string">\'auth\'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token single-quoted-string string">\'only\'</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">[</span><span class="token single-quoted-string string">\'create\'</span><span class="token punctuation">,</span> <span class="token single-quoted-string string">\'store\'</span><span class="token punctuation">,</span> <span class="token single-quoted-string string">\'edit\'</span><span class="token punctuation">,</span> <span class="token single-quoted-string string">\'delete\'</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// Or apply middleware to all routes except these</span>\n    <span class="token variable">$this</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">middleware</span><span class="token punctuation">(</span><span class="token single-quoted-string string">\'auth\'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token single-quoted-string string">\'except\'</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">[</span><span class="token single-quoted-string string">\'index\'</span><span class="token punctuation">,</span> <span class="token single-quoted-string string">\'show\'</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">✅ <a href="https://twitter.com/hashtag/Laravel?src=hash&amp;ref_src=twsrc%5Etfw">#Laravel</a> <a href="https://twitter.com/hashtag/ProTip?src=hash&amp;ref_src=twsrc%5Etfw">#ProTip</a> You can apply your middleware to specific routes in the controller&#39;s construct method 👌 <a href="https://t.co/BU7taP0ksv">https://t.co/BU7taP0ksv</a> <a href="https://t.co/6UQc2gYMU4">pic.twitter.com/6UQc2gYMU4</a></p>&mdash; Ryosuke (@whoisryosuke) <a href="https://twitter.com/whoisryosuke/status/1001976417826017280?ref_src=twsrc%5Etfw">May 30, 2018</a></blockquote>\n<p>Before writing this post, this wasn\'t in the Laravel docs. I could have swore I\'ve seen it since, but just in case, I\'ve archived it here.</p>\n<p>Hope that helps,\nRyo</p>\n<hr>\n<p><strong>References</strong></p>\n<ul>\n<li><a href="https://twitter.com/whoisryosuke/status/1001976417826017280">Original tweet</a></li>\n<li><a href="https://gist.github.com/whoisryosuke/902f2ebd3b1e0c232b85b0c6ac255105">See the code gist</a></li>\n<li><a href="https://laravel.com/docs/5.6/eloquent-resources#concept-overview">Laravel docs - Resource Collections</a></li>\n<li><a href="https://laracasts.com/discuss/channels/general-discussion/apply-middleware-for-certain-methods?page=0">Laracasts middleware thread</a></li>\n</ul>',frontmatter:{title:"shortcode - Apply middleware to Laravel controller methods",cover_image:{publicURL:"/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac.jpg",childImageSharp:{sizes:{tracedSVG:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='267' viewBox='0 0 400 267' version='1'%3E%3Cpath d='M0 134v133h10c11 0 14-1 14-6l1-1c1 0 3-5 3-9 0-2 0-3 2-3s2-1 2-4v-4h4l4-1h8l5-3 6-4c2 0 2-1 2-4v-4h6c4 0 5 0 5-2s1-2 4-2c4 0 7 2 7 3 0 3 4 5 8 5h5v-12h8v-8h16v-8h4c4 0 4 0 4-2 0-3 0-3 4-3l4-1c0-2 1-2 4-2l4-1c0-2 2-2 8-2 8 0 8 0 8-2 0-3 0-3 4-3 3 0 4 0 4 2l1 2 3-2 3-2 1-3c0-3 2-4 4-2l2 1c2 0 4-3 3-4l3-6 2 3 2 4v-9h8v4l1 4 1-4c0-3 0-4 2-4l1-4c0-3 0-4 2-4l1-1 4-1 8-2c3-2 4-2 4-1 0 2 1 2 4 2l4-1c0-2 1-2 4-2l4-1h2c2 2 2 2 3 0 2-1 2-2-1-3l-8-2-4-1h4l9-1 7-2c4 0 4 0 4-3s0-3 4-3 4 0 4-2c0-3 0-3 4-3l4-1 4-1h4v-4c0-5 0-5 3-4l4-1c2-2 3-4 1-3s-7-1-5-2c1-1 1-1-1-1-2 1-5-4-4-9l1-5c1-3 12-1 12 3h2l1-2 4-4-1 2v1l2-2h4c2-3 1-3-3-3l-4 1-1 1-1-1c0-3 10-3 12 0 1 1 1 1 2-1 1-1 1-1 1 1-1 2 0 3 2 3l2 3 2-1 4-3 4-2v3l2 4c0 2 0 2-1 1l-1-1 1 3v3l1 3 1-5c0-8 1-9 5-9h1c-3 0-2-3 1-2 2 0 2 0 1-1s-1-1 2-1 3 0 2 1l-2 1-1 1 2 1v1l1 2 1 1c0-3 2-2 2 1s0 3 1 1l1-4c1 0 1-1-1-1-1-1-1-1 1-1 3 0 3-2 0-3h-2l2-1 3 1h1l3 2h2l-1-2 3-3c1 1 2 2 2 5v5l1-4c0-4 0-4 1-2v4l1 1 1-2 2-3c1-1 1-1-1-1-2 1-2 0-2-1 0-2 0-2 1-1l4 1 4 1h-2l-1 1 3 1h1c0 2 4 1 5-1l1-2 1-1c0-2 1-2 4-2 4 0 4 0 4-2l1-3 1-4-1-4-1-1c0-2 1-2 4-2s4 0 4 2l4 1h4v93c0 81 1 75 1-40V0H0v134m263-36l-1 3v10c-1 1-1 1-2-2l-2-2h-3c-3-2-3-4-1-4v1l1 1h1v1l1-2v-1c3 1 3-1 1-2-3-1-10 2-10 5 0 2 0 2 1 1l1-1c1 1 2 3 4 3l3 3c-1 3-3 4-6 1l-3-2 1 2v3a1139 1139 0 0 1 9 0c2-1 2-1 2 1s2 0 2-3c1-2 1-2 1 0 0 5 2 3 3-3 0-6 1-8 4-8 2 1 2 1 2 5v8c2 5 4 5 3-1 0-3 0-3 1 0l1 1v-3l-1-5c1-5-2-7-7-7-3 1-4 1-3-1v-5c-1-1-2 0-3 3' fill='lightgray' fill-rule='evenodd'/%3E%3C/svg%3E",src:"/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-4e8db.jpg",srcSet:"/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-7cc04.jpg 310w,\n/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-69042.jpg 620w,\n/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-4e8db.jpg 1240w,\n/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-50ab1.jpg 1860w,\n/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-e738f.jpg 1920w"}}},date:"30 May, 2018",tags:["laravel","php","api","shortcode","code snippet","tips"],section:"blog"},fields:{slug:"/blog/2018/shortcode-laravel-apply-middleware-in-controller/"}},relatedPosts:{edges:[{node:{html:'<p>I recently ran into an issue where I wasn\'t the admin in a Wordpress install, and after running this bit of SQL, I was quickly back in command:</p>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code class="language-sql"><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token punctuation">`</span>wp_users<span class="token punctuation">`</span> <span class="token punctuation">(</span><span class="token punctuation">`</span>user_login<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>user_pass<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>user_nicename<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>user_email<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>user_status<span class="token punctuation">`</span><span class="token punctuation">)</span>\n<span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">\'ryo\'</span><span class="token punctuation">,</span> MD5<span class="token punctuation">(</span><span class="token string">\'easy123\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">\'firstname lastname\'</span><span class="token punctuation">,</span> <span class="token string">\'ryo@example.com\'</span><span class="token punctuation">,</span> <span class="token string">\'0\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token punctuation">`</span>wp_usermeta<span class="token punctuation">`</span> <span class="token punctuation">(</span><span class="token punctuation">`</span>umeta_id<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>user_id<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>meta_key<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>meta_value<span class="token punctuation">`</span><span class="token punctuation">)</span> \n<span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">Select</span> <span class="token function">max</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token keyword">FROM</span> wp_users<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">\'wp_capabilities\'</span><span class="token punctuation">,</span> <span class="token string">\'a:1:{s:13:"administrator";s:1:"1";}\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token punctuation">`</span>wp_usermeta<span class="token punctuation">`</span> <span class="token punctuation">(</span><span class="token punctuation">`</span>umeta_id<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>user_id<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>meta_key<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>meta_value<span class="token punctuation">`</span><span class="token punctuation">)</span> \n<span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">Select</span> <span class="token function">max</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token keyword">FROM</span> wp_users<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">\'wp_user_level\'</span><span class="token punctuation">,</span> <span class="token string">\'10\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">❓ Oh I&#39;m not the admin on this <a href="https://twitter.com/hashtag/Wordpress?src=hash&amp;ref_src=twsrc%5Etfw">#Wordpress</a> install? Let me just do a little <a href="https://twitter.com/hashtag/SQL?src=hash&amp;ref_src=twsrc%5Etfw">#SQL</a> here... 🔑⚡️<a href="https://t.co/NZYCKV2xBV">https://t.co/NZYCKV2xBV</a> <a href="https://t.co/c63UawZLqe">pic.twitter.com/c63UawZLqe</a></p>&mdash; Ryosuke (@whoisryosuke) <a href="https://twitter.com/whoisryosuke/status/1013615808948285441?ref_src=twsrc%5Etfw">July 2, 2018</a></blockquote>\n<p>Hope that helps,\nRyo</p>\n<hr>\n<p><strong>References</strong></p>\n<ul>\n<li><a href="https://twitter.com/whoisryosuke/status/1013615808948285441">Original tweet</a></li>\n<li><a href="https://gist.github.com/whoisryosuke/9c49aed1a0b759731f0bc019ec903975">See the code gist</a></li>\n<li><a href="https://www.inmotionhosting.com/support/edu/wordpress/333-add-admin-via-mysql">Add admin via SQL</a></li>\n</ul>',frontmatter:{title:"shortcode - Make yourself Wordpress admin using SQL 🔑⚡️",cover_image:{publicURL:"/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac.jpg",childImageSharp:{sizes:{src:"/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-4e8db.jpg",srcSet:"/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-7cc04.jpg 310w,\n/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-69042.jpg 620w,\n/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-4e8db.jpg 1240w,\n/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-50ab1.jpg 1860w,\n/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-e738f.jpg 1920w"}}},date:"08 July, 2018",tags:["wordpress","sql","shortcode","code snippet","tips"]},fields:{slug:"/blog/2018/shortcode-make-yourself-wordpress-admin-using-sql/"}}},{node:{html:'<p>Need to protect your NextJS pages behind a login? Use a HOC (higher-order component) to wrap your page components, check the #API token, and redirect users if it fails 🙅‍♂️ </p>\n<p>Bonus: You can grab things from SSR like cookies or session data using the child\'s getInitialProps in the HOC 🙌 </p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span>Component<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> Router <span class="token keyword">from</span> <span class="token string">\'next/router\'</span>\n<span class="token keyword">import</span> AuthService <span class="token keyword">from</span> <span class="token string">\'./AuthService\'</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">withAuth</span><span class="token punctuation">(</span>AuthComponent<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> Auth <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AuthService</span><span class="token punctuation">(</span><span class="token string">\'http://localhost\'</span><span class="token punctuation">)</span>\n    <span class="token keyword">return</span> <span class="token keyword">class</span> <span class="token class-name">Authenticated</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n\n      <span class="token keyword">static</span> <span class="token keyword">async</span> <span class="token function">getInitialProps</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// Check if Page has a `getInitialProps`; if so, call it.</span>\n        <span class="token keyword">const</span> pageProps <span class="token operator">=</span> AuthComponent<span class="token punctuation">.</span>getInitialProps <span class="token operator">&amp;&amp;</span> <span class="token keyword">await</span> AuthComponent<span class="token punctuation">.</span><span class="token function">getInitialProps</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token comment">// Return props.</span>\n        <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span>pageProps <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n\n      <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n          isLoading<span class="token punctuation">:</span> <span class="token boolean">true</span>\n        <span class="token punctuation">}</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n\n      <span class="token function">componentDidMount</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>Auth<span class="token punctuation">.</span><span class="token function">loggedIn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          Router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">\'/\'</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> isLoading<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n\n      <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token punctuation">(</span>\n          <span class="token operator">&lt;</span>div<span class="token operator">></span>\n          <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>isLoading <span class="token operator">?</span> <span class="token punctuation">(</span>\n              <span class="token operator">&lt;</span>div<span class="token operator">></span>LOADING<span class="token operator">...</span><span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n            <span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token punctuation">(</span>\n              <span class="token operator">&lt;</span>AuthComponent <span class="token punctuation">{</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">}</span>  auth<span class="token operator">=</span><span class="token punctuation">{</span>Auth<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n            <span class="token punctuation">)</span><span class="token punctuation">}</span>\n          <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n        <span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">🔐 Need to protect your <a href="https://twitter.com/hashtag/NextJS?src=hash&amp;ref_src=twsrc%5Etfw">#NextJS</a> pages behind a login? Use a <a href="https://twitter.com/hashtag/HOC?src=hash&amp;ref_src=twsrc%5Etfw">#HOC</a> to wrap your page components, check the <a href="https://twitter.com/hashtag/API?src=hash&amp;ref_src=twsrc%5Etfw">#API</a> token, and redirect users if it fails 🙅‍♂️ Bonus: <a href="https://twitter.com/hashtag/SSR?src=hash&amp;ref_src=twsrc%5Etfw">#SSR</a> data fetching using the child&#39;s getInitialProps in the HOC 🙌 <a href="https://t.co/EEaNPRXTIx">https://t.co/EEaNPRXTIx</a> <a href="https://twitter.com/hashtag/ReactJS?src=hash&amp;ref_src=twsrc%5Etfw">#ReactJS</a> <a href="https://twitter.com/hashtag/javascript?src=hash&amp;ref_src=twsrc%5Etfw">#javascript</a> <a href="https://t.co/naJR9mNBo4">pic.twitter.com/naJR9mNBo4</a></p>&mdash; Ryosuke (@whoisryosuke) <a href="https://twitter.com/whoisryosuke/status/1011738754355089408?ref_src=twsrc%5Etfw">June 26, 2018</a></blockquote>\n<p>Hope that helps,\nRyo</p>\n<hr>\n<p><strong>References</strong></p>\n<ul>\n<li><a href="https://twitter.com/whoisryosuke/status/1011738754355089408">Original tweet</a></li>\n<li><a href="https://gist.github.com/whoisryosuke/d034d3eaa0556e86349fb2634788a7a1">See the code gist</a></li>\n</ul>',frontmatter:{title:"shortcode - Protect NextJS pages with a authorization HOC 🔐",cover_image:{publicURL:"/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac.jpg",childImageSharp:{sizes:{src:"/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-4e8db.jpg",srcSet:"/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-7cc04.jpg 310w,\n/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-69042.jpg 620w,\n/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-4e8db.jpg 1240w,\n/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-50ab1.jpg 1860w,\n/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-e738f.jpg 1920w"}}},date:"26 June, 2018",tags:["nextjs","api","js","shortcode","code snippet","tips"]},fields:{slug:"/blog/2018/shortcode-nextjs-auth-hoc/"}}}]}},pathContext:{tag:"code snippet",slug:"/blog/2018/shortcode-laravel-apply-middleware-in-controller/"}}}});
//# sourceMappingURL=path---blog-2018-shortcode-laravel-apply-middleware-in-controller-4a2fafdce16895d65023.js.map