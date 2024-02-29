import { c as create_ssr_component, e as escape, a as each } from "./ssr.js";
const Carousel_svelte_svelte_type_style_lang = "";
const css = {
  code: "@keyframes svelte-e9s3sw-scrolling{from{transform:translateX(0)}to{transform:translateX(calc(-1 * ((var(--width) * var(--componentsLength)) + (var(--componentsLength) * var(--gap)))))}}@keyframes svelte-e9s3sw-verticalScroll{from{transform:translateY(0)}to{transform:translateY(calc(-1 * ((var(--height) * var(--componentsLength)) + (var(--componentsLength) * var(--gap)))))}}#container.svelte-e9s3sw.svelte-e9s3sw{width:100%;overflow:hidden}.imgContainer.svelte-e9s3sw.svelte-e9s3sw{display:grid;grid-template-columns:repeat(calc(2 * var(--componentsLength)), var(--width));grid-template-rows:0;column-gap:var(--gap);height:var(--height);animation-name:svelte-e9s3sw-scrolling;animation-duration:var(--speed);animation-timing-function:linear;animation-iteration-count:infinite}#container.svelte-e9s3sw div div.svelte-e9s3sw{height:var(--height);background-position:center;background-size:cover;border-radius:var(--borderRadius)}#verticalImgContainer.svelte-e9s3sw.svelte-e9s3sw{display:grid;grid-template-rows:repeat(calc(2 * var(--componentsLength)), var(--height));row-gap:var(--gap);animation-name:svelte-e9s3sw-verticalScroll;animation-duration:40s;animation-timing-function:linear;animation-iteration-count:infinite}",
  map: null
};
const Carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { components, height, gap, width, borderRadius, direction, speed } = $$props;
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
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0)
    $$bindings.direction(direction);
  if ($$props.speed === void 0 && $$bindings.speed && speed !== void 0)
    $$bindings.speed(speed);
  $$result.css.add(css);
  return `<div id="container" style="${"--componentsLength: " + escape(components.length, true) + "; --height: " + escape(height, true) + "; --gap: " + escape(gap, true) + "; --width: " + escape(width, true) + "; --borderRadius: " + escape(borderRadius, true) + "; --speed: " + escape(speed, true)}" class="svelte-e9s3sw">${direction === "vertical" ? `<div id="verticalImgContainer" class="svelte-e9s3sw">${each(components, (component) => {
    return `<div style="${"background-image: url(" + escape(component, true) + ");"}" class="svelte-e9s3sw"></div>`;
  })} ${each(components, (component) => {
    return `<div style="${"background-image: url(" + escape(component, true) + ");"}" class="svelte-e9s3sw"></div>`;
  })}</div>` : `<div class="imgContainer svelte-e9s3sw">${each(components, (component) => {
    return `<div style="${"background-image: url(" + escape(component, true) + ");"}" class="svelte-e9s3sw"></div>`;
  })} ${each(components, (component) => {
    return `<div style="${"background-image: url(" + escape(component, true) + ");"}" class="svelte-e9s3sw"></div>`;
  })}</div>`}</div>`;
});
export {
  Carousel as C
};
