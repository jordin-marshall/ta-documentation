(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{287:function(e,t,r){"use strict";r.r(t);var n=r(14),s=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),t("p",[e._v("VuePress is composed of two parts: a "),t("a",{attrs:{href:"https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/core",target:"_blank",rel:"noopener noreferrer"}},[e._v("minimalistic static site generator"),t("OutboundLink")],1),e._v(" with a Vue-powered "),t("a",{attrs:{href:"https://v1.vuepress.vuejs.org/theme/",target:"_blank",rel:"noopener noreferrer"}},[e._v("theming system"),t("OutboundLink")],1),e._v(" and "),t("a",{attrs:{href:"https://v1.vuepress.vuejs.org/plugin/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Plugin API"),t("OutboundLink")],1),e._v(", and a "),t("a",{attrs:{href:"https://v1.vuepress.vuejs.org/theme/default-theme-config.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("default theme"),t("OutboundLink")],1),e._v(" optimized for writing technical documentation. It was created to support the documentation needs of Vue's own sub projects.")]),e._v(" "),t("p",[e._v("Each page generated by VuePress has its own pre-rendered static HTML, providing great loading performance and is SEO-friendly. Once the page is loaded, however, Vue takes over the static content and turns it into a full Single-Page Application (SPA). Additional pages are fetched on demand as the user navigates around the site.")]),e._v(" "),t("h2",{attrs:{id:"using-vue-in-markdown"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-vue-in-markdown"}},[e._v("#")]),e._v(" Using Vue in Markdown")]),e._v(" "),t("h3",{attrs:{id:"browser-api-access-restrictions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#browser-api-access-restrictions"}},[e._v("#")]),e._v(" Browser API Access Restrictions")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://stackoverflow.com/a/69371227",target:"_blank",rel:"noopener noreferrer"}},[e._v("How To Use Plugins"),t("OutboundLink")],1),e._v(" "),t("br"),e._v("\nBecause VuePress applications are server-rendered in Node.js when generating static builds, any Vue usage must conform to the "),t("a",{attrs:{href:"https://ssr.vuejs.org/en/universal.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("universal code requirements"),t("OutboundLink")],1),e._v(". In short, make sure to only access Browser / DOM APIs in "),t("code",[e._v("beforeMount")]),e._v(" or "),t("code",[e._v("mounted")]),e._v(" hooks.")]),e._v(" "),t("p",[e._v("If you are using or demoing components that are not SSR friendly (for example containing custom directives), you can wrap them inside the built-in "),t("code",[e._v("<ClientOnly>")]),e._v(" component:")])])}),[],!1,null,null,null);t.default=s.exports}}]);