import { c as create_ssr_component, e as escape, b as each } from "./ssr.js";
const Carousel_svelte_svelte_type_style_lang = "";
const css = {
  code: "@keyframes s-z4xMY0WQGNti-scrolling{from{transform:translateX(0)}to{transform:translateX(calc(-1 * ((var(--width) * var(--componentsLength)) + (var(--componentsLength) * var(--gap)))))}}#container.s-z4xMY0WQGNti.s-z4xMY0WQGNti{width:100%;overflow:hidden}.imgContainer.s-z4xMY0WQGNti.s-z4xMY0WQGNti{display:grid;grid-template-columns:repeat(calc(2 * var(--componentsLength)), var(--width));grid-template-rows:0;column-gap:var(--gap);height:var(--height);animation-name:s-z4xMY0WQGNti-scrolling;animation-duration:40s;animation-timing-function:linear;animation-iteration-count:infinite}#container.s-z4xMY0WQGNti div div.s-z4xMY0WQGNti{height:var(--height);background-position:center;background-size:cover;border-radius:var(--borderRadius)}",
  map: null
};
const Carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { components, height, gap, width, borderRadius } = $$props;
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.gap === void 0 && $$bindings.gap && gap !== void 0)
    $$bindings.gap(gap);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.borderRadius === void 0 && $$bindings.borderRadius && borderRadius !== void 0)
    $$bindings.borderRadius(borderRadius);
  $$result.css.add(css);
  return `<div id="container" style="${"--componentsLength: " + escape(components.length, true) + "; --height: " + escape(height, true) + "; --gap: " + escape(gap, true) + "; --width: " + escape(width, true) + "; --borderRadius: " + escape(borderRadius, true) + ";"}" class="s-z4xMY0WQGNti"><div class="imgContainer s-z4xMY0WQGNti">${each(components, (component) => {
    return `<div style="${"background-image: url(" + escape(component, true) + ");"}" class="s-z4xMY0WQGNti"></div>`;
  })} ${each(components, (component) => {
    return `<div style="${"background-image: url(" + escape(component, true) + ");"}" class="s-z4xMY0WQGNti"></div>`;
  })}</div></div>`;
});
export {
  Carousel as C
};
