import { c as create_ssr_component, v as validate_component, e as escape } from "../../../../chunks/ssr.js";
import { Y as YearNav } from "../../../../chunks/YearNav.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-q20msf.svelte-q20msf{margin-top:100px;display:grid;place-content:center}#mainContainer.svelte-q20msf.svelte-q20msf{width:90vw;height:calc(100vh - 200px);display:grid;grid-template-columns:20vw 50vw 20vw}.title.svelte-q20msf.svelte-q20msf{margin-bottom:15px;color:#FFD25E;font-size:120%}#itemList.svelte-q20msf.svelte-q20msf{text-decoration:none;height:55vh}li.svelte-q20msf.svelte-q20msf{list-style-type:none;opacity:20%;cursor:pointer;transition:100ms}li.svelte-q20msf.svelte-q20msf:hover{opacity:30%}#yearNav.svelte-q20msf.svelte-q20msf{position:relative}#yearNavContainer.svelte-q20msf.svelte-q20msf{height:10vh;position:absolute;bottom:0}#file.svelte-q20msf.svelte-q20msf{width:100%;height:100%;display:grid;place-content:center}#file.svelte-q20msf p.svelte-q20msf{opacity:30%}#docInfo.svelte-q20msf.svelte-q20msf{padding-left:55px}#metaData.svelte-q20msf.svelte-q20msf,#download.svelte-q20msf.svelte-q20msf{opacity:20%;margin-bottom:15px;transition:100ms}#download.svelte-q20msf.svelte-q20msf{cursor:pointer}#download.svelte-q20msf.svelte-q20msf:hover{opacity:30%}",
  map: null
};
let documentName = "Lorem Ipsum";
let uploadDate = "2018-11-16";
let fileSize = "35kb";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="svelte-q20msf"><section id="mainContainer" class="svelte-q20msf"><section id="navBarContainer"><p class="title svelte-q20msf" data-svelte-h="svelte-rz0trh">Documents</p> <ul id="itemList" class="svelte-q20msf" data-svelte-h="svelte-ucs2jx"><li class="svelte-q20msf">Folder name</li> <li class="svelte-q20msf">Folder name</li> <li class="svelte-q20msf">Folder name</li> <li class="svelte-q20msf">Folder name</li> <li class="svelte-q20msf">Folder name</li></ul> <section id="yearNavContainer" class="svelte-q20msf"><div id="yearNav" class="svelte-q20msf">${validate_component(YearNav, "YearNav").$$render($$result, {}, {}, {})}</div></section></section> <section id="file" class="svelte-q20msf" data-svelte-h="svelte-1ent0gk"><p class="svelte-q20msf">No file is open</p></section> <section id="docInfo" class="svelte-q20msf"><p class="title svelte-q20msf">${escape(documentName)}</p> <div id="metaData" class="svelte-q20msf"><p id="fileSize">Size: ${escape(fileSize)}</p> <p id="uploadDate">Upload date: ${escape(uploadDate)}</p></div> <a id="download" class="svelte-q20msf" data-svelte-h="svelte-1bqyqa0">Download</a></section></section></main>`;
});
export {
  Page as default
};
