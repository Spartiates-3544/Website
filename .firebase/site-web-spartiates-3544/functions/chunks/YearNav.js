import { c as create_ssr_component, e as escape } from "./ssr.js";
const YearNav_svelte_svelte_type_style_lang = "";
const css = {
  code: "#yearNav.svelte-1fdua5e.svelte-1fdua5e{display:flex;gap:3px}section.svelte-1fdua5e.svelte-1fdua5e{display:flex;cursor:pointer;gap:3px}section.svelte-1fdua5e p.svelte-1fdua5e,section.svelte-1fdua5e svg path.svelte-1fdua5e{transition:100ms}section.svelte-1fdua5e:hover p.svelte-1fdua5e{color:#FFD25E}section.svelte-1fdua5e:hover svg path.svelte-1fdua5e{fill:#FFD25E}",
  map: null
};
let year1 = "2018";
let year2 = "2019";
const YearNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main id="yearNav" class="svelte-1fdua5e"><section class="svelte-1fdua5e"><svg width="20" height="20" viewBox="0 -1.5 11 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.646447 3.64645C0.451184 3.84171 0.451184 4.15829 0.646447 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646447 3.64645ZM10 4.5C10.2761 4.5 10.5 4.27614 10.5 4C10.5 3.72386 10.2761 3.5 10 3.5V4.5ZM1 4.5H10V3.5H1V4.5Z" fill="white" class="svelte-1fdua5e"></path></svg> <p class="svelte-1fdua5e">${escape(year1)}</p></section> <p data-svelte-h="svelte-1cfsefb">-</p> <section class="svelte-1fdua5e"><p class="svelte-1fdua5e">${escape(year2)}</p> <svg width="20" height="20" viewBox="0 -1.5 11 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5V3.5ZM10.3536 4.35355C10.5488 4.15829 10.5488 3.84171 10.3536 3.64645L7.17157 0.464466C6.97631 0.269204 6.65973 0.269204 6.46447 0.464466C6.2692 0.659728 6.2692 0.976311 6.46447 1.17157L9.29289 4L6.46447 6.82843C6.2692 7.02369 6.2692 7.34027 6.46447 7.53553C6.65973 7.7308 6.97631 7.7308 7.17157 7.53553L10.3536 4.35355ZM1 4.5H10V3.5H1V4.5Z" fill="white" class="svelte-1fdua5e"></path></svg></section></main>`;
});
export {
  YearNav as Y
};
