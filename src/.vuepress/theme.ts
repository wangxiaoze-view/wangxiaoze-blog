import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
	hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",

	author: {
		name: "王小泽",
		url: "http://www.wangxiaoze.wang",
	},

	iconAssets: "iconfont",

	logo: "/logo.svg",

	repo: "https://gitee.com/wang-xiaoze/wangxiaoze-blog",

	docsDir: "/",

	pageInfo: [
		"Author",
		"Original",
		"Date",
		"Category",
		"Tag",
		"ReadingTime",
		"Word",
	],

	docsRepo: "https://gitee.com/wang-xiaoze/wangxiaoze-blog",
	lastUpdated: true,
	contributors: true,

	fullscreen: true,
	darkmode: "auto",

	themeColor: {
		blue: "#2196f3",
		red: "#f26d6d",
		green: "#3eaf7c",
		orange: "#fb9b5f",
	},

	locales: {
		"/": {
			// navbar
			navbar: zhNavbar,

			// sidebar
			sidebar: zhSidebar,

			footer: "",

			displayFooter: true,

			// page meta
			metaLocales: {
				editLink: "在 gitHub 上编辑此页",
			},
		},
	},

	encrypt: {
		config: {
			"/demo/encrypt.html": ["1234"],
			"/zh/demo/encrypt.html": ["1234"],
		},
	},

	plugins: {
		// If you don’t need comment feature, you can remove following option
		// The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
		// To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
		comment: {
			/**
			 * Using Giscus
			 */
			// provider: "Giscus",
			// repo: "vuepress-theme-hope/giscus-discussions",
			// repoId: "R_kgDOG_Pt2A",
			// category: "Announcements",
			// categoryId: "DIC_kwDOG_Pt2M4COD69",
			/**
			 * Using Twikoo
			 */
			// provider: "Twikoo",
			// envId: "https://twikoo.ccknbc.vercel.app",
			/**
			 * Using Waline
			 */
			// provider: "Waline",
			// serverURL: "https://vuepress-theme-hope-comment.vercel.app",
		},

		// Disable features you don’t want here
		mdEnhance: {
			align: true,
			attrs: true,
			chart: true,
			codetabs: true,
			container: true,
			demo: true,
			echarts: true,
			figure: true,
			flowchart: true,
			gfm: true,
			imageLazyload: true,
			imageSize: true,
			include: true,
			katex: true,
			mark: true,
			mermaid: true,
			playground: {
				presets: ["ts", "vue"],
			},
			presentation: {
				plugins: ["highlight", "math", "search", "notes", "zoom"],
			},
			stylize: [
				{
					matcher: "Recommended",
					replacer: ({ tag }) => {
						if (tag === "em")
							return {
								tag: "Badge",
								attrs: { type: "tip" },
								content: "Recommended",
							};
					},
				},
			],
			sub: true,
			sup: true,
			tabs: true,
			vPre: true,
			vuePlayground: true,
		},

		copyCode: {
			showInMobile: true,
		},

		// uncomment these if you want a pwa
		// pwa: {
		//   favicon: "/favicon.ico",
		//   cacheHTML: true,
		//   cachePic: true,
		//   appendBase: true,
		//   apple: {
		//     icon: "/assets/icon/apple-icon-152.png",
		//     statusBarColor: "black",
		//   },
		//   msTile: {
		//     image: "/assets/icon/ms-icon-144.png",
		//     color: "#ffffff",
		//   },
		//   manifest: {
		//     icons: [
		//       {
		//         src: "/assets/icon/chrome-mask-512.png",
		//         sizes: "512x512",
		//         purpose: "maskable",
		//         type: "image/png",
		//       },
		//       {
		//         src: "/assets/icon/chrome-mask-192.png",
		//         sizes: "192x192",
		//         purpose: "maskable",
		//         type: "image/png",
		//       },
		//       {
		//         src: "/assets/icon/chrome-512.png",
		//         sizes: "512x512",
		//         type: "image/png",
		//       },
		//       {
		//         src: "/assets/icon/chrome-192.png",
		//         sizes: "192x192",
		//         type: "image/png",
		//       },
		//     ],
		//     shortcuts: [
		//       {
		//         name: "Demo",
		//         short_name: "Demo",
		//         url: "/demo/",
		//         icons: [
		//           {
		//             src: "/assets/icon/guide-maskable.png",
		//             sizes: "192x192",
		//             purpose: "maskable",
		//             type: "image/png",
		//           },
		//           {
		//             src: "/assets/icon/guide-monochrome.png",
		//             sizes: "192x192",
		//             purpose: "monochrome",
		//             type: "image/png",
		//           },
		//         ],
		//       },
		//     ],
		//   },
		// },
	},
});
