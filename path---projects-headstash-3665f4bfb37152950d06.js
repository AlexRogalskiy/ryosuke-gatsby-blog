webpackJsonp([0xaacaf239ca2],{592:function(a,e){a.exports={data:{blog:{html:'<p>In 2017, I created Headstash, a B2C glass marketplace that allowed artists and craftsman to create their own online storefront. Using their shop profile, they could sell and auction their products to customers worldwide.</p>\n<p>The goal of this project was to solve the issue of buying glass as a collector or consumer. The current state of the market lacked a solution that allowed artists to easily sell their work in a single marketplace. The only solution was costly or free self-hosted options, which only really receive sales from direct artist promotion. Marketplaces like Amazon and Ebay don\'t allow for glass paraphrenalia to be sold on their site, which despite being art pieces, the glass still classified as illegal.</p>\n<p>My role in the project was to be the sole creator. I would develop the branding of the company, the go-to-market strategy and any competitive research, and the actual design and development of the website (and the UI/UX involved in that). This project was designed with Sketch, and developed using Wordpress and a multitude of plugins.</p>\n<h2>Branding</h2>\n<p>For the Headstash branding, I primarily took inspiration from Amazon and the Gap, and taking note of cues from Etsy. </p>\n<p>\n  <a class="gatsby-resp-image-link" href="/static/headstash-header-e9a28620cd7e7f9ba8471b21c6f46ca3-2700d.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 752px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 35.77127659574468%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAABdElEQVQoz31Ry2rCQBRNUiQvNUFLGbvxFQPWdVIQKSiCDcaJ8S26cSE+8TP8ou77C/2A/kGDWbcwTG8GlGLBC5dz58w5dw4Mx13V8Xi8zNls7iNfKFLDKP0UjdJ3AeZsLv92vn+qVLh/Va1W+b/tOI6gxhM8pZQzSuYn9jzawZhi7NHWq0OBe498tv0s2LbNX/u5W5XJPL7A8m4iqblJTXfjiaQPCa2bJtM0kaqqKBaLIVEUUTqdRqlUCum6ju4EXgWJpEiiDCijh3tJlsSEpmkZWZaZT1EUhoIgoHK5jLhWqxX0er1gMpkE4/E4cF2XnSP0ff80Go3CwWAQwhx2Op0Q+BPG+CvS9vv9YDgcRroAdEGj0Qi4er1OF4sF3Ww2dL1e091uR+fzOTsfDgeG+/2e8dvtlvVqtaLL5ZLxZ99sNqOwkHKWZZFms0k8z2M9nU5Ju90m8CqBFATSEEhIut0ugeSXOWpIRSAhgaSkVqsR+CTyC/0AnM2xrTKpAAAAAElFTkSuQmCC&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="headstash header" title="" src="/static/headstash-header-e9a28620cd7e7f9ba8471b21c6f46ca3-2700d.png" srcset="/static/headstash-header-e9a28620cd7e7f9ba8471b21c6f46ca3-6ee67.png 270w,\n/static/headstash-header-e9a28620cd7e7f9ba8471b21c6f46ca3-dc7de.png 540w,\n/static/headstash-header-e9a28620cd7e7f9ba8471b21c6f46ca3-2700d.png 752w" sizes="(max-width: 752px) 100vw, 752px">\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>\n  <a class="gatsby-resp-image-link" href="/static/branding-784c3d16ba5038f9e3d6f36d33f37f66-38b5f.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 803px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 43.08841843088418%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsSAAALEgHS3X78AAACg0lEQVQoz4XSXUhTYRgH8EORUHkTdaMlLi9cpJKk03POzj5F2hyVs5JZ84OmkE4T1OmstE3L1TQtiwoMneBHlkRGF4JGF0VlZFQXkYPCiIIyA7XNnXO28+8cpegi6IU/78N78eN53+clcIQguMbtbWIWxYTE3GDrkjYS/1lqmty0PkmfEJ2sl21J0cjWyHWyxDRGJmHNaE0AV78NrGNrBGfE+mRcz5xpKCaQ3zQoFFSMoki/kwCimN5vulTPRLQEKkilpyg7Hfm69KVDWRnBUkN60KAmgwTbEP8B7iRwHjLMedUC70pGyBm/ELZU+VHYhHflPRgpuf3J5p6ZNvYHUNg2MyaBKkbZ4bYw8FhIocyoQO3e3divywTBOWPfoi0N3IWsCNuZDa5llxBwyuHqnMRlxzjXVf6cu1LzBtcrptDQMouaxlcLEqjRqs+VllfCWmLjKaVKUGRSAknRAsEeV4yhORZsfQzPOmIF1G7AeKtNiBsORw6736O/8jF8rpf8teppnLVP+U9XPzGvgBptx4E8M9QqhqdIUqBpGjRNgQgVuhCqNPBsg5xfdsrDE54y3nbrY8Ryb0ko7vsccdlfcO1Hp3C1bHLBd+x+wu+hUBTppWglxK54WsmsgpQIouIiBOt5fCm5hIf2m9AOhKEeCcA0OBchRzk4ul8jWFWHH9V7ZiUoY99QlLSLiFeba4Uq5yBPG8yCeO1VcDnP+fTnoRNVD4qHu+8WjT2ytvt703zzi8qBAJL7A/47p7o6YU99xtXvKJCgplxq3cpQVCpvrjkPOSYTr2QYgRIxqct//jHG9z2R8s2b9H1fN/99DksKwahVa6VaSdNeo9EIrVbz5w0l9BeWZEmBGGa/PgAAAABJRU5ErkJggg==&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="branding" title="" src="/static/branding-784c3d16ba5038f9e3d6f36d33f37f66-38b5f.png" srcset="/static/branding-784c3d16ba5038f9e3d6f36d33f37f66-97e64.png 270w,\n/static/branding-784c3d16ba5038f9e3d6f36d33f37f66-8b2a9.png 540w,\n/static/branding-784c3d16ba5038f9e3d6f36d33f37f66-38b5f.png 803w" sizes="(max-width: 803px) 100vw, 803px">\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>The logo drew most inspiration from the Gap with it\'s refined and safe qualities exhibited by the san-serif typeface. After a bit of experimentation, I ended up on the Headstash "logo" to be it\'s logotype in white inside a black box.</p>\n<p>The color scheme was composed with Amazon\'s primary color in mind -- orange. I wanted the site\'s main color to evoke that sense of sale and urgency, without the tension you get with a hotter red or an often crass green. <strong>Orange</strong> was a wonderful medley of what I was looking for, bright and energizing, yet subtle enough. From there, I chose a complimentary <strong>purple</strong>. I wanted the site to feel bright and colorful, and feature modern gradients, so I picked additional colors (like the purple) that would create exciting and appealing blends of color. </p>\n<p>I also wanted a font that was readable, had a good "design" feel, but was still approachable (nothing too edgy or loud). The focus of the site was the products themselves, the text would play a secondary role. This led me to using a mix of <strong>Roboto</strong> for headers and <strong>Noto Sans</strong> for body text. Roboto gave me the thickness and legibility I needed for headers, and Noto Sans is notorious for performing well at smaller scales (perfect for body - or even smaller scale).</p>\n<h2>User Research (UX)</h2>\n<p>Before developing the application, I embarked on user research through user flow diagrams and user stories. This allowed me to really understand who the consumer of the app would be, what functionality they need out of it, and their typical use of the app. This made the process of creating wireframing and high-fi mockups much simpler.</p>\n<p>\n  <a class="gatsby-resp-image-link" href="/static/headstash-ux-2da1ca14b6ca80441507ef8dcf7e0965-973c8.jpg" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 689px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 64.87663280116111%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMEAgX/xAAVAQEBAAAAAAAAAAAAAAAAAAADAv/aAAwDAQACEAMQAAAB6GaUSjiYNP/EABsQAAIDAAMAAAAAAAAAAAAAAAECAAMRBBMj/9oACAEBAAEFAuShZmFfZjSzNLegef/EABgRAAIDAAAAAAAAAAAAAAAAAAACARJR/9oACAEDAQE/AVXCkn//xAAWEQEBAQAAAAAAAAAAAAAAAAABABL/2gAIAQIBAT8BW0X/xAAcEAACAgIDAAAAAAAAAAAAAAAAEQECIZExQqH/2gAIAQEABj8CqpRLWztsgtg49P/EAB0QAAICAQUAAAAAAAAAAAAAAAERAEGRMVFhgdH/2gAIAQEAAT8hQqm/UaQZmkCfGOaDmAVV3xBLVlP/2gAMAwEAAgADAAAAEGQP/8QAGREBAAIDAAAAAAAAAAAAAAAAAQDwESFB/9oACAEDAQE/EETI5uVrP//EABkRAAMAAwAAAAAAAAAAAAAAAAABESFh8f/aAAgBAgEBPxDJHod+n//EAB0QAAIDAAIDAAAAAAAAAAAAAAERACExYXFB0fD/2gAIAQEAAT8QINsBAG7whxLKphO/SewXBd+iAyhDSTyOI+WOr3aFP9Xc/9k=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="headstash ux" title="" src="/static/headstash-ux-2da1ca14b6ca80441507ef8dcf7e0965-973c8.jpg" srcset="/static/headstash-ux-2da1ca14b6ca80441507ef8dcf7e0965-f4964.jpg 270w,\n/static/headstash-ux-2da1ca14b6ca80441507ef8dcf7e0965-445e3.jpg 540w,\n/static/headstash-ux-2da1ca14b6ca80441507ef8dcf7e0965-973c8.jpg 689w" sizes="(max-width: 689px) 100vw, 689px">\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h2>Inteface Design (UI)</h2>\n<p>I really wanted Headstash to feel modern, and the first impression users receive from a website is it\'s visual theming. I set out to create components that would exhibit the style I was looking to achieve, to later restyle pre-existing Wordpress elements. I took inspiration from Material Design, and used some of their components as the basis.</p>\n<p>\n  <a class="gatsby-resp-image-link" href="/static/Website-Mockup-Copy-21efbaad7ac7f2643a41b5b1b170db72-93a9e.jpg" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 1080px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 58.21917808219178%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAMABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQBAgX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB0bNTCw0V/8QAGhAAAgMBAQAAAAAAAAAAAAAAABEBAxMSFP/aAAgBAQABBQLKt4Vrz1nMChH/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAZEAACAwEAAAAAAAAAAAAAAAABkgARMSD/2gAIAQEABj8CqixmFjMLHj//xAAdEAEAAQQDAQAAAAAAAAAAAAABABEhMfAQYXGx/9oACAEBAAE/IRngaZjcansNE+wAxXuBUBbj/9oADAMBAAIAAwAAABCoz//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABURAQEAAAAAAAAAAAAAAAAAABAh/9oACAECAQE/EKf/xAAbEAEBAQACAwAAAAAAAAAAAAABABEhMUFRof/aAAgBAQABPxDq8vlNkeCmGtgEJMUctgIehABl/9k=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="Website Mockup Copy" title="" src="/static/Website-Mockup-Copy-21efbaad7ac7f2643a41b5b1b170db72-918ac.jpg" srcset="/static/Website-Mockup-Copy-21efbaad7ac7f2643a41b5b1b170db72-2ceef.jpg 270w,\n/static/Website-Mockup-Copy-21efbaad7ac7f2643a41b5b1b170db72-b59aa.jpg 540w,\n/static/Website-Mockup-Copy-21efbaad7ac7f2643a41b5b1b170db72-918ac.jpg 1080w,\n/static/Website-Mockup-Copy-21efbaad7ac7f2643a41b5b1b170db72-93a9e.jpg 1168w" sizes="(max-width: 1080px) 100vw, 1080px">\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>\n  <a class="gatsby-resp-image-link" href="/static/interface-design1-dfee0d8cafaa7cdadb05013402c1dbc0-3a225.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 584px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 119.00684931506851%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAYCAYAAAD6S912AAAACXBIWXMAAAsSAAALEgHS3X78AAAE20lEQVQ4y3VVW2hcRRhepKAm2lBQH4RiG6yoz1UKghDxTXzQFimF5qUSiXlTEBUVQ6U21VqNNqSmMQ1NrdVExYr1FpM02SbZNM21zWVNN9ls9nL2nN1zv8yZOb//zJ5dXMSBj7Mz888333+bjURwPHd+674XL2w8HumA+z848Unb5Zmb2YEhbe9rjUO7zrw5/mjH66MPcLuV2dQdqqpuR9RVvrpWV0hnt7sAdQBwD7eL7O3Knnqiz4F9Z/Jmc/sYfP1nHN47tszef3XCbG+ago9fHj7L7VIJ6SHG2O0gCFT85vErM8pkCiC5m1nbvLF0VRAe+C7/xaE/AJoH8vToQC5o69lgHZ0r0HN8nl06GofudyZ7uV0ykalHIhP+Z9ip/KIgdF2vnS/oukF0www03QDHcVEAEL7uum4Pt5NleTcuFsPzKAyYRwjr+rLXP93Zx9dmBaFj25/zmWkaxLYtIJ4HPvUDSqnP1y3LOicUrqfrcap+8+NF2L+/ibW2noCDB49A4+EmOjIS5aZzgtC0LEGo6ToxTRM8JCSEBJ5HBKFhGIJQUoz6gHrqD1fehjt37GD7nnwW4vG/y2oBBZQIkUAQ2rZNUI0gxBEg/NBlQZiVtupxVd1MDsHh5gPs8k+/C98J8QUhxrdE6DhOidBxiOO6XB2/7T8uK7LMk6KGMWQhSUVhhdAIXS46hCiWB7LpgG67AcayymVZytcznwpCvI0F/D5GIWC0RFh2uaxQLRaJ6zjlKqi4jPuC0AjIbsXzlIxpQ9p0/ZxNacZkNG0wEh6YroqhrBR42YDrEYybFyCqYqgNjj9sjM0RmF4GMhYFf3IQYP43gKUreLUBLJtdFoQYq8+wxmBzbcXdSqzSJCKxvkrX1le9VCoFnut9xe023vp0p9rWO6R/dHZaa313UjveElNPvhTTT78wYYz9vKBNjPeVCbu4kmkJIJoCWEhQWLtlw9aKGWaRXOR2cYBtjQB3HwKoaUFgc9XEEM2IxizUvKKqdwnCfD7fouv6fOd4bujYL6nR7u/XRvt7FkcHL90a1g19JpfLvcHtGPF3AgsWMFgpRkgivZVZTyWT6wHzbzPPk7CIf42ggKd8lz4t5+UGzCfCQngIhgga8LIGLPZn0O4x3/d3YevZoiI0G2IYy79GrsNWRip54rrLEd6wlmtiV3iBYVoB72UDgX0daJqOiXH9sMam0HYPf2FKhBadnouz6NRNlpMUYYN7sxHie7CwMQWKIkM6nQZUBJIk4VzhBc1LplzAGC7ghIpQ41OWWM/CtbHr+LvUKbg3xxXyeuNKAmy9AA9WAQcN6zKGyasQIge7OjoF5zu7gYaFLQh566CLgK8vZLNZgUwmI75cLSar3PhVClEFG/jwJPSfaq+0Xlkhtk7A2wuKxaJ4GFAtKvAhNCobx/DyCiGPwujwBExEY9WEDOUiGUUSqmka5Yowq5XfaETCGE5iz+7B2yuEStEAVTerCUXzm4ZQxbuFK+VvIsaz6nnnLwl32aCQV/F1U1TDL2oGLagGVYoaCc1ucMJVDuwGgfL8X1hGbCL6YXPmEWtpzIHkDPj4xPms+j8Fzy/zpNQWCoVanAugslqMYy0qFkA3aokm3Yt725z25x8k545EyYWWRWaps5iYOQzZHNrMYHmtonff/gOA2kA+3qqzWQAAAABJRU5ErkJggg==&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="interface design1" title="" src="/static/interface-design1-dfee0d8cafaa7cdadb05013402c1dbc0-3a225.png" srcset="/static/interface-design1-dfee0d8cafaa7cdadb05013402c1dbc0-5f550.png 270w,\n/static/interface-design1-dfee0d8cafaa7cdadb05013402c1dbc0-da40f.png 540w,\n/static/interface-design1-dfee0d8cafaa7cdadb05013402c1dbc0-3a225.png 584w" sizes="(max-width: 584px) 100vw, 584px">\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h2>Website Design</h2>\n<p>I took care in designing key pages of the website that would act as landing pages for specific use cases (capturing business signups, frontpage, etc). The following is an example of the business landing page, designed to entice business owners to open their first shop with Headstash.</p>\n<p>\n  <a class="gatsby-resp-image-link" href="/static/website-mockup-ce36007caa88c18638b319087b7c4f1a-54dc0.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 1000px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 145.29999999999998%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,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&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="website mockup" title="" src="/static/website-mockup-ce36007caa88c18638b319087b7c4f1a-54dc0.png" srcset="/static/website-mockup-ce36007caa88c18638b319087b7c4f1a-f3291.png 270w,\n/static/website-mockup-ce36007caa88c18638b319087b7c4f1a-9272f.png 540w,\n/static/website-mockup-ce36007caa88c18638b319087b7c4f1a-54dc0.png 1000w" sizes="(max-width: 1000px) 100vw, 1000px">\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h2>Email Design</h2>\n<p>I wanted to ensure I really took care of the UX of the entire experience, from onboarding to checkout. Part of that process was designing and developing emails that WooCommerce and BuddyPress would send to users (like customers making a purchase, or new user registration guides).</p>\n<p>\n  <a class="gatsby-resp-image-link" href="/static/email-design3-6f702773e7dd9fc92c1e0db578513f2b-b3fe7.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 598px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 109.86622073578596%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAYAAADAQbwGAAAACXBIWXMAAAsSAAALEgHS3X78AAAEzklEQVQ4y42VDUxTVxTHm0WBlQ+dW+ZH4sfiwiCMsMAwQmY0W4zLlswtZtliTCSLOjBqSLZlyeKGI1G0U3AOiyC4CRYYmDkcqxluKhNBXPmy1ALy1W9oqW0tr7y+9+45u/cVHrq4xJOc3PPuu+93//ecc1vVInW8GBulFtn4WuIrYkZSshgfEyvEPRtPEuIWBeLUCStV1JYtXf6M6mns7MZ8KHgjBz5J2QLfpm2EgsxNsHPdu/DB2s344ctbuG2Jm1fOrc1av35JZmbmjvT09Jy0tLSda9e8lPNqSkpOenrGztczMnZlZ2elqH7Z+gXoPi+B7/OLoPSzEjjwXi4c/CgPtqe+hR8nvc1psr5RgBR0Sq2OxQULFuKixYtxxepV+NyS53FhVBRGRUfj6jVr7qp+Ss3Gzh1fYev+Q3hx324s2vQm7l+RBgeT1uHelA3cpuTtClCj0dSd+qEUjx3ThEu1WqlOWymd0Z6Rjmk0YnFJCZ44UTyiakh+H7o35kLz5negZWsqnM1eCntXZJEvV23ArS8s55YsS1SAPT09DRgxEQUErvw0oM0E9Jmwyelp7r7qXuNN4UrVJaFOqxNqTzcI1WU1QvPZirC+vILUVvwYuFhRowB/1+uvsQ+DHCcGvH70dvyJPtswfZ6RgU6na1jFgin/A+w03ME71A3dBrx64wbYJyfZK466AmxpaZGBA6Z+0T5iBtekHcfto2geMBGfj27g9Q6pgACEeR5GhkdgdHSUOh1HRoCf4REI4XieV4C32jsaGdDqC4vV3Q9Bf3sKW/VWtJin2LHxbp9xRlYYDocxGAxicJqjY4jFIAiCrFCSpHmFV69eYZO2IIqlnRxcbn+A15vsaDX5ZeDg4NCUCoDGBCKp1l9HvFTHInmCvuOoK8C2trYmiRB0OWwi8g/lNb6AGyfcTkI3ximvdzACpM4JIvo6O9Df8QeNJQX4aA77+vpqmPLxcYsY4sMsWzg56UaPxyMXhcbDESA1t5NKd1rQPulEt8P2RIW9vb21c21DDajL6QqFQoRxrFYrrTINIlDqNgfi2BgqOfgPsLrmgm7Prt3Y3t4uEkKAgpCOSFUTl8uF/f2mWYWERLb9+RKK508+lsNHj1xVdU6Xv+9T7Lx9S5QkAkwdM5o/4nQ60Gjsj/Qhg7o9HrQNmdExZMQpj2e2SkgVEgVoNBp1yk1hH9FVtK1khZIosdxGgJIkon/ChhN+H3po6wQmrIBSpG2AzLeNoadbNytfnDuFf9pPAylyU1yOYaXKsvUMID3P/x7ZcO1vHQ7aUTQMiNOGYfB2WdDRZcexHjdxmENo7h2PKCSsWuxyN13GUGMZvfcIs5s8VpQ7F5svYDVtqzO/iq6yKzBY3gqGyn/g2jkTuVFrx5t6030ZKFCgzTKOTsc4Wuw2tFiswBqVAWkVFaB5aLBevllIeJapABdki5gLgsTjDB+SjxzpmTAHGPLBDOcHPhx6Yh8WFhaePllcgkcOH8aqyko8VFCAWq0Wj393HI8cKcKjRUfvqebKWdo1g1//5sPq8xb8q3Z0bjokifMKqb2oVqv3xMXF7Y2Ojs6Lj4/Pi4mJyYuNjc1NSEg4wH7UmUJZtjUgSaPusORyhiSvixNnlT+cU1hfX/9Uf1L/Aj56stowkxZ8AAAAAElFTkSuQmCC&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="email design3" title="" src="/static/email-design3-6f702773e7dd9fc92c1e0db578513f2b-b3fe7.png" srcset="/static/email-design3-6f702773e7dd9fc92c1e0db578513f2b-7bd6a.png 270w,\n/static/email-design3-6f702773e7dd9fc92c1e0db578513f2b-1b55d.png 540w,\n/static/email-design3-6f702773e7dd9fc92c1e0db578513f2b-b3fe7.png 598w" sizes="(max-width: 598px) 100vw, 598px">\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h2>Social Media Graphics</h2>\n<p>In order to promote the project, I designed several series of graphics for social media using glass photography I accrued from local galleries and showings. I was able to run the campaign for a couple months and saw fair success in the style of graphics.</p>\n<p>\n  <a class="gatsby-resp-image-link" href="/static/social-media-graphics1a-879737fe5a793b78892c8f96dded737e-df7eb.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 876px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 107.76255707762556%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,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&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="social media graphics1a" title="" src="/static/social-media-graphics1a-879737fe5a793b78892c8f96dded737e-df7eb.png" srcset="/static/social-media-graphics1a-879737fe5a793b78892c8f96dded737e-ab013.png 270w,\n/static/social-media-graphics1a-879737fe5a793b78892c8f96dded737e-cd5c3.png 540w,\n/static/social-media-graphics1a-879737fe5a793b78892c8f96dded737e-df7eb.png 876w" sizes="(max-width: 876px) 100vw, 876px">\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>\n  <a class="gatsby-resp-image-link" href="/static/social-media-graphics2a-8a3e0241c93d8354dbc4efbf2d6b1add-2947c.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 977px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 55.47594677584442%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAADhklEQVQozwF7A4T8ADNaqf9jTIL1VSUz31wrOP8jIEHfRTp6/zIjYdQ/NGr/PChn9EEvXu9bLWD0Li9n6Dg+XP9RJDTXWiw7/0stVdc5NFr/UTFA7DcxZ/JCMnz/AGRUj/GKQGfibyg8znM8Xe5CK1/OXjh/8kkpd8NBPI3rQjGQ4VM1c91xNHXgQjNd1mc/RPSYMkTGUy1C7VcxTcZdMkPzay002lk0cN9EKXzyACM4ltUvMIjIKjOMti41i9NWIEW2lCEz1pw2Zqx5Iz7QbC5Yx0BAZcNAIDTGcxsivV8VFNg6PV+vNk2B0jhHda9ATm/XbTZKwaEeJMW2JSbWACZTr/80OZz0NlCj3zpAj/94JEHfo0he/51CcNN5Kij/aDZJ9EFDVe9sO0LzmDA6534wN/87TnTWTmic/zZFaddSaZX/Wy447KIxKPHANyP/AH0uX89FFUXCTSFDsW0bNs14Eh6xcBw00V8pS6hLJzrKVR0wwoIoPb6LKT/BRylCuEUkQNIoN2GqGydIzEMnQatTIjTRWhUju4cSC7+nHArQALlBSf9ZMDTzfion3ZU/LP+QMTHdjT5F/zwnKtJKQU39iT1M8pg5Re2NQVrxMkBW5jQ/Uf8lMUHVP0BK/0kjKNVsMTL/Zy496pswKPDhRy3/AIkkOdRVHznGeBoitV8XE9F5Hyi1dSM81TYXK6s/JDLPkDhUxkocLMJbJ0bFQB0muzcbINYxHzCuRCIv0FsaHa5ZGi/VaCVIv4chHsOhKRnUALNFYf+RRmrwUSY+2o5BTP1uLDDahkJh/3BDdc9LTHX6b0xx7zBHVupRQU/ueTRC43U5Tf94L0DSj0U++30wKNJzNE7/UDlg50FMZOxRP1T/AJcyWO9dK1bgayZDzJo8NuxyKDDMYypY8VcxZcI5JknqSyE53zEnMdtEICbfXSQ51EAoU/JVIjPFgy4h62EfGsVMLFLxQS5W2EEyTN1ZLD7wAGQrR+JaMlPUMkF5wStJiOBvMVHBljhY5IMqQ7d+HBDdYCIg05wwN893LUHTR05/yF5MdeWDLkC6dCIt3i42XLoxaLXkNk6TzDBZlNFSSXTjAHU5UP9ZOFP3K0R+4TFSjv9rM1ThiENn/3YvT9a9NSH/pDAg9oM3SfFuPlX2W0t26oJPc/+QNEjZaTJD/zo5YtlIabX/Rk6Q7kNUf/RwRmX/sg+B2iYSroQAAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="social media graphics2a" title="" src="/static/social-media-graphics2a-8a3e0241c93d8354dbc4efbf2d6b1add-2947c.png" srcset="/static/social-media-graphics2a-8a3e0241c93d8354dbc4efbf2d6b1add-77785.png 270w,\n/static/social-media-graphics2a-8a3e0241c93d8354dbc4efbf2d6b1add-c0031.png 540w,\n/static/social-media-graphics2a-8a3e0241c93d8354dbc4efbf2d6b1add-2947c.png 977w" sizes="(max-width: 977px) 100vw, 977px">\n    </span>\n  </span>\n  \n  </a>\n    </p>',frontmatter:{title:"Headstash",cover_image:{publicURL:"/static/Website-Mockup-Copy-21efbaad7ac7f2643a41b5b1b170db72.jpg",childImageSharp:{sizes:{tracedSVG:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='233' viewBox='0 0 400 233' version='1'%3E%3Cpath d='M2 12v23h198l198-1V12c0-2-396-2-396 0m295 62c0 4 0 5-1 4h-1l1 2 1 2c0 2 1 2 3 2 3 0 4-2 2-3v-1c2 1 2 0 2-6v-6h-8l1 6M62 77l-2 3 14 1c14 0 14-1 12-2-3-4-3-4-13-4-9 0-10 0-11 2m10 46c0 1-1 2-3 2s-4 4-2 4l1-1v-1c1-1 1 0 1 1l1 3v2l-3 1h2c3 0 3 0 2 2 0 2-3 3-3 1h-1c-1 1 0 2 1 3l1 1v2c2 2 2 2 0 3v1l2 1h1v1l1 3 2 2 1 1c2-1 5 1 5 3-1 1 0 1 2 1s3-1 4-3v-3h-1c-1-1 0-2 2-3h3l-3-2c-3-1-3-2-2-2 3 0 2-2 0-2l-2-1h4l-2-3-3-4c-3 0-3 0-2-1 2-1 0-3-2-2v-2l-1-2h-3l-3-1 2-1 2-1-1-1-2-2h-1m-49 71c-8 7-8 7 8 7 15 0 15 0 10-6-3-3-4-4-7-4s-3 0-1-1 2-1-2-1c-3 0-4 1-8 5' fill='lightgray' fill-rule='evenodd'/%3E%3C/svg%3E",src:"/static/Website-Mockup-Copy-21efbaad7ac7f2643a41b5b1b170db72-b1bec.jpg",srcSet:"/static/Website-Mockup-Copy-21efbaad7ac7f2643a41b5b1b170db72-32d8e.jpg 310w,\n/static/Website-Mockup-Copy-21efbaad7ac7f2643a41b5b1b170db72-63470.jpg 620w,\n/static/Website-Mockup-Copy-21efbaad7ac7f2643a41b5b1b170db72-b1bec.jpg 1168w"}}},date:"15 June, 2017",tags:["web design","ui","ux","branding","photography"],section:"project"},fields:{slug:"/projects/headstash/"}},relatedPosts:null},pathContext:{tag:"ui",slug:"/projects/headstash/"}}}});
//# sourceMappingURL=path---projects-headstash-3665f4bfb37152950d06.js.map