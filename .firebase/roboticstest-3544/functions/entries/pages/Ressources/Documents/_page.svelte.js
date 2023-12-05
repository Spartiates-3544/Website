import { c as create_ssr_component, a as validate_component, e as escape } from "../../../../chunks/ssr.js";
import { Y as YearNav } from "../../../../chunks/YearNav.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.s-WKlELxgpey5b.s-WKlELxgpey5b{margin-top:100px;display:grid;place-content:center}#mainContainer.s-WKlELxgpey5b.s-WKlELxgpey5b{width:90vw;height:calc(100vh - 200px);display:grid;grid-template-columns:20vw 50vw 20vw}.title.s-WKlELxgpey5b.s-WKlELxgpey5b{margin-bottom:15px;color:#ffcc01;font-size:120%}#itemList.s-WKlELxgpey5b.s-WKlELxgpey5b{text-decoration:none;height:55vh}li.s-WKlELxgpey5b.s-WKlELxgpey5b{list-style-type:none;opacity:20%;cursor:pointer;transition:100ms}li.s-WKlELxgpey5b.s-WKlELxgpey5b:hover{opacity:30%}#yearNav.s-WKlELxgpey5b.s-WKlELxgpey5b{position:relative}#yearNavContainer.s-WKlELxgpey5b.s-WKlELxgpey5b{height:10vh;position:absolute;bottom:0}#file.s-WKlELxgpey5b.s-WKlELxgpey5b{width:100%;height:100%;display:grid;place-content:center}#file.s-WKlELxgpey5b p.s-WKlELxgpey5b{opacity:30%}#docInfo.s-WKlELxgpey5b.s-WKlELxgpey5b{padding-left:55px}#metaData.s-WKlELxgpey5b.s-WKlELxgpey5b,#download.s-WKlELxgpey5b.s-WKlELxgpey5b{opacity:20%;margin-bottom:15px;transition:100ms}#download.s-WKlELxgpey5b.s-WKlELxgpey5b{cursor:pointer}#download.s-WKlELxgpey5b.s-WKlELxgpey5b:hover{opacity:30%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let documentName = "Lorem Ipsum";
  let uploadDate = "2018-11-16";
  let fileSize = "35kb";
  $$result.css.add(css);
  return `<main class="s-WKlELxgpey5b"><section id="mainContainer" class="s-WKlELxgpey5b"><section id="navBarContainer"><p class="title s-WKlELxgpey5b" data-svelte-h="svelte-rz0trh">Documents</p> <ul id="itemList" class="s-WKlELxgpey5b"><li class="s-WKlELxgpey5b" data-svelte-h="svelte-162iyy3">Folder name</li> <li class="s-WKlELxgpey5b" data-svelte-h="svelte-162iyy3">Folder name</li> <li class="s-WKlELxgpey5b" data-svelte-h="svelte-162iyy3">Folder name</li> <li class="s-WKlELxgpey5b" data-svelte-h="svelte-162iyy3">Folder name</li> <li class="s-WKlELxgpey5b" data-svelte-h="svelte-162iyy3">Folder name</li></ul> <section id="yearNavContainer" class="s-WKlELxgpey5b"><div id="yearNav" class="s-WKlELxgpey5b">${validate_component(YearNav, "YearNav").$$render($$result, {}, {}, {})}</div></section></section> <section id="file" class="s-WKlELxgpey5b"><p class="s-WKlELxgpey5b" data-svelte-h="svelte-onfelr">No file is open</p></section> <section id="docInfo" class="s-WKlELxgpey5b"><p class="title s-WKlELxgpey5b">${escape(documentName)}</p> <div id="metaData" class="s-WKlELxgpey5b"><p id="fileSize">Size: ${escape(fileSize)}</p> <p id="uploadDate">Upload date: ${escape(uploadDate)}</p></div> <a id="download" class="s-WKlELxgpey5b" data-svelte-h="svelte-1bqyqa0">Download</a></section></section></main>`;
});
export {
  Page as default
};
