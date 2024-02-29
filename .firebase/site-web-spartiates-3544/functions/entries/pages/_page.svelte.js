import { c as create_ssr_component, b as add_attribute, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { C as Carousel } from "../../chunks/Carousel.js";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
const Footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '@keyframes svelte-1a8oem0-rolling{from{transform:translateX(0)}to{transform:translateX(-100%)}}:root{--oppColor:#585D5D}#rollingText.svelte-1a8oem0.svelte-1a8oem0{overflow:hidden;height:250px;width:100%;font-size:80px;font-weight:600;display:grid;grid-template-columns:repeat(5, 660px);grid-template-rows:0}#rollingText.svelte-1a8oem0 p.svelte-1a8oem0{animation-name:svelte-1a8oem0-rolling;animation-iteration-count:infinite;animation-duration:30s;animation-timing-function:linear;color:#FFD25E}#rollingText.svelte-1a8oem0 p i.svelte-1a8oem0{color:#FFD25E}#footerBottom.svelte-1a8oem0.svelte-1a8oem0{padding-left:12vw;padding-right:12vw;padding-bottom:60px;padding-top:40px}#nav.svelte-1a8oem0.svelte-1a8oem0{padding-right:20px}#nav.svelte-1a8oem0 a.svelte-1a8oem0{text-decoration:none;padding-right:40px;transition:100ms;transition-timing-function:ease-in-out}#nav.svelte-1a8oem0 a.svelte-1a8oem0:hover,#backToTop.svelte-1a8oem0 div.svelte-1a8oem0:hover{color:#FFD25E}#navContainer.svelte-1a8oem0.svelte-1a8oem0{display:grid;grid-template-columns:auto auto}#backToTop.svelte-1a8oem0.svelte-1a8oem0{display:grid;justify-content:end;background-color:#ffffff00;border-style:none;font-size:inherit;cursor:pointer}#backToTop.svelte-1a8oem0 div.svelte-1a8oem0{transition:100ms}#bottomNotes.svelte-1a8oem0.svelte-1a8oem0{display:grid;grid-template-columns:auto auto;font-weight:600}#bottomNotes.svelte-1a8oem0 p.svelte-1a8oem0{color:var(--oppColor)}#copyright.svelte-1a8oem0.svelte-1a8oem0{display:grid;justify-content:end;color:var(--oppColor);padding-left:20px}#credits.svelte-1a8oem0.svelte-1a8oem0{text-decoration:none;position:relative;color:var(--oppColor)}#credits.svelte-1a8oem0.svelte-1a8oem0::after{position:absolute;content:"weebified";background-color:#FFD25E;color:#191D1B;bottom:0;left:0;width:0;height:100%;opacity:0;transition:100ms}#credits.svelte-1a8oem0.svelte-1a8oem0:hover::after{width:140%;opacity:1}@media only screen and (max-width: 500px){#bottomNotes.svelte-1a8oem0.svelte-1a8oem0{grid-template-columns:100%;font-size:90%}#copyright.svelte-1a8oem0.svelte-1a8oem0{display:block;padding-top:10px;padding-left:0}#footerBottom.svelte-1a8oem0.svelte-1a8oem0{padding-bottom:40px;padding-top:0}#navContainer.svelte-1a8oem0.svelte-1a8oem0{grid-template-columns:100%;align-content:space-between;height:57vh;padding-top:23vh}#nav.svelte-1a8oem0.svelte-1a8oem0{display:grid;grid-template-columns:100%}#nav.svelte-1a8oem0 a.svelte-1a8oem0,#backToTop.svelte-1a8oem0.svelte-1a8oem0{font-size:200%}#backToTop.svelte-1a8oem0.svelte-1a8oem0{justify-content:start;padding-bottom:20px}}',
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let svgColor = "#fff";
  let arrowHeight = 20;
  $$result.css.add(css$1);
  {
    {
      arrowHeight = 20;
    }
  }
  return ` ${``} <section id="footerBottom" class="svelte-1a8oem0"><section id="navContainer" class="svelte-1a8oem0"><section id="nav" class="svelte-1a8oem0" data-svelte-h="svelte-2no1zj"><a href="https://www.chiefdelphi.com/u/hyute/summary" class="svelte-1a8oem0">Blog</a> <a href="/Ressources" class="svelte-1a8oem0">Ressources</a> <a href="/Sponsors" class="svelte-1a8oem0">Sponsors</a> <a href="/Contact" class="svelte-1a8oem0">Contact Us</a></section> <button id="backToTop" class="svelte-1a8oem0"> <div class="svelte-1a8oem0">Back to top

                <svg${add_attribute("width", arrowHeight, 0)}${add_attribute("height", arrowHeight, 0)} viewBox="0 -4 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path style="transition: 100ms;" d="M3.5 9C3.5 9.27614 3.72386 9.5 4 9.5C4.27614 9.5 4.5 9.27614 4.5 9H3.5ZM4.35355 0.646446C4.15829 0.451184 3.84171 0.451184 3.64645 0.646446L0.464466 3.82843C0.269204 4.02369 0.269204 4.34027 0.464466 4.53553C0.659728 4.7308 0.976311 4.7308 1.17157 4.53553L4 1.70711L6.82843 4.53553C7.02369 4.7308 7.34027 4.7308 7.53553 4.53553C7.7308 4.34027 7.7308 4.02369 7.53553 3.82843L4.35355 0.646446ZM4.5 9V1H3.5L3.5 9H4.5Z"${add_attribute("fill", svgColor, 0)}></path></svg></div></button></section> <section id="bottomNotes" class="svelte-1a8oem0" data-svelte-h="svelte-yg9suc"><p class="svelte-1a8oem0">Made with love by <a href="https://weebified.github.io" id="credits" class="svelte-1a8oem0">Nicky Ly</a> with SvelteKit, ThreeJS &amp; 3 cups of coffee</p> <p id="copyright" class="svelte-1a8oem0">Spartiates 2023 © Copyright</p></section></section>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@keyframes svelte-1mge1qj-reveal{0%{height:100%}100%{height:0%}}@keyframes svelte-1mge1qj-rollingText{from{transform:translateX(0%)}to{transform:translateX(-30%)}}#mainContainer.svelte-1mge1qj.svelte-1mge1qj{padding-left:12vw;padding-right:12vw;padding-top:150px;line-height:1.2;overflow:hidden}.headers.svelte-1mge1qj.svelte-1mge1qj{color:#ffffff;font-family:'Bricolage Grotesque', sans-serif;font-size:calc(130px * var(--sizeFactor));font-weight:500;margin-bottom:0;display:relative}.subHeader.svelte-1mge1qj.svelte-1mge1qj{margin-top:0;font-weight:600;width:150px;cursor:pointer;transition:100ms;user-select:none}.subHeader.svelte-1mge1qj.svelte-1mge1qj:hover{color:#FFD25E}.subHeader.svelte-1mge1qj svg.svelte-1mge1qj{transform:rotate(var(--rotation));transition:300ms}.descriptions.svelte-1mge1qj.svelte-1mge1qj{color:#575A59;width:40vw;padding-top:5px;font-weight:600}#robotShowcaseContainer.svelte-1mge1qj.svelte-1mge1qj{display:grid;grid-template-columns:auto auto;grid-template-rows:auto;width:100%;margin-top:200px;margin-bottom:100px}#robotShowcase3d.svelte-1mge1qj.svelte-1mge1qj{display:grid;justify-content:end;padding-left:50px;max-height:80vh}#mainImgCarousel.svelte-1mge1qj.svelte-1mge1qj{margin-top:10px;display:grid;grid-template-columns:100%;grid-template-rows:0}#slide1.svelte-1mge1qj.svelte-1mge1qj{height:100vh;position:relative}#spartiates.svelte-1mge1qj.svelte-1mge1qj{position:relative}#teamNb.svelte-1mge1qj.svelte-1mge1qj{position:absolute;right:-45px;top:55px;transform:rotate(-90deg);color:#FFD25E}#teamNb.svelte-1mge1qj.svelte-1mge1qj::after,#teamNb.svelte-1mge1qj.svelte-1mge1qj::before{position:absolute;content:'3544 & 20274';width:100%;right:0;bottom:5px;opacity:20%}#teamNb.svelte-1mge1qj.svelte-1mge1qj::before{bottom:11px;opacity:5%}#footerContainer.svelte-1mge1qj.svelte-1mge1qj{margin-top:400px}#carousel.svelte-1mge1qj.svelte-1mge1qj{width:100%;position:absolute;bottom:215px;z-index:-1}#robotShowcaseTxt.svelte-1mge1qj.svelte-1mge1qj{display:grid;place-content:center}.selectorMenu.svelte-1mge1qj.svelte-1mge1qj{list-style-type:none;margin-top:5px;position:absolute;background-color:#191D1B;z-index:99;width:150px;box-shadow:10px 0 10px #191D1B;cursor:pointer}.selectorMenu.svelte-1mge1qj li.svelte-1mge1qj{transition:100ms}.selectorMenu.svelte-1mge1qj li.svelte-1mge1qj:hover{color:#FFD25E}.invisible.svelte-1mge1qj.svelte-1mge1qj{opacity:0;transition:300ms}#aboutTxt.svelte-1mge1qj.svelte-1mge1qj{font-size:170%;text-align:right}#aboutHeader.svelte-1mge1qj.svelte-1mge1qj{text-align:end}.textAnimation.svelte-1mge1qj.svelte-1mge1qj,.textAnimationHeader.svelte-1mge1qj.svelte-1mge1qj{position:relative}.textAnimation.svelte-1mge1qj.svelte-1mge1qj::after,.textAnimationHeader.svelte-1mge1qj.svelte-1mge1qj::after{content:' ';bottom:0;left:0;background:#191D1B;width:100%;height:100%;position:absolute;z-index:1;animation-name:svelte-1mge1qj-reveal;animation-duration:700ms;animation-fill-mode:forwards}.textAnimationHeader.svelte-1mge1qj.svelte-1mge1qj::after{animation-duration:1500ms}@media only screen and (max-width: 500px){#mainContainer.svelte-1mge1qj.svelte-1mge1qj{padding-top:10vh}.headers.svelte-1mge1qj.svelte-1mge1qj{text-align:center;font-size:170%;display:flex;flex-direction:column}#spartiates.svelte-1mge1qj.svelte-1mge1qj{font-size:230%;margin-top:-15px}#teamNb.svelte-1mge1qj.svelte-1mge1qj{font-family:'Bricolage Grotesque', sans-serif;transform:none;color:#fff;width:100%;font-size:80%;text-align:center;top:100px;right:0}#arrowContainer.svelte-1mge1qj.svelte-1mge1qj{margin-left:38vw;z-index:5;margin-top:-120px}#arrowHead.svelte-1mge1qj.svelte-1mge1qj{margin-top:-16px;margin-left:-7px}#carousel.svelte-1mge1qj.svelte-1mge1qj{width:100vw;margin-left:-12vw;margin-top:calc(var(--carouselTopMargin) * 1px);position:unset}#robotShowcaseContainer.svelte-1mge1qj.svelte-1mge1qj{grid-template-columns:100%;text-align:center}#robotTitle.svelte-1mge1qj.svelte-1mge1qj{margin-bottom:25px;font-size:300%}#robotShowcase3d.svelte-1mge1qj.svelte-1mge1qj{padding-left:0}#robotShowcase3d.svelte-1mge1qj canvas.svelte-1mge1qj{border-radius:20px}.subHeader.svelte-1mge1qj.svelte-1mge1qj{margin-top:10px;margin-bottom:10px}.subHeader.svelte-1mge1qj.svelte-1mge1qj:hover{color:#fff}#footerContainer.svelte-1mge1qj.svelte-1mge1qj{margin-top:0}#mainImgCarousel.svelte-1mge1qj.svelte-1mge1qj{margin-top:150px}.descriptions.svelte-1mge1qj.svelte-1mge1qj{width:100%}#aboutHeader.svelte-1mge1qj.svelte-1mge1qj{text-align:center;font-size:300%;padding-bottom:10px}#aboutTxt.svelte-1mge1qj.svelte-1mge1qj{font-size:100%;text-align:center;padding-bottom:50px}.subHeader.svelte-1mge1qj.svelte-1mge1qj{width:100%}.selectorMenu.svelte-1mge1qj.svelte-1mge1qj{width:100%;left:-1vw}.selectorMenu.svelte-1mge1qj li.svelte-1mge1qj{padding-bottom:10px}.selectorMenu.svelte-1mge1qj li.svelte-1mge1qj:hover{color:#fff}.textAnimationHeader.svelte-1mge1qj.svelte-1mge1qj::after{animation-duration:0ms}}",
  map: null
};
let gap = 10;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let innerHeight;
  let sizeFactor = 1;
  let carouselImgHeight = 400;
  let carouselImgWidth = 250;
  let carouselTopMargin = -30;
  let canvasElement;
  let yearList = {
    "FRC 2022 - 2023": { "path": "/test.gltf" },
    "FRC 2021 - 2022": { "path": "/test2.gltf" }
  };
  let rotation = 0;
  yearList[Object.keys(yearList)[0]]["path"];
  let models = [];
  let yearListLength = Object.keys(yearList).length;
  new THREE.Scene();
  new GLTFLoader();
  for (let i = 0; i < yearListLength; i++) {
    models.push(Object.keys(yearList)[i]);
  }
  $$result.css.add(css);
  {
    {
      sizeFactor = 1;
    }
  }
  {
    {
      carouselImgHeight = innerHeight / 2.4;
      carouselImgWidth = carouselImgHeight / 1.55;
    }
  }
  return ` <main id="mainContainer" style="${"--sizeFactor: " + escape(sizeFactor, true) + "; --carouselTopMargin: " + escape(carouselTopMargin, true) + "; --rotation: " + escape(rotation, true) + "deg;"}" class="svelte-1mge1qj"><section id="slide1" class="svelte-1mge1qj"><p class="headers textAnimationHeader svelte-1mge1qj">We are ${``} the <i style="font-family: inherit;" id="spartiates" class="svelte-1mge1qj" data-svelte-h="svelte-f17gku">Spartiates</i> </p><p id="teamNb" class="svelte-1mge1qj" data-svelte-h="svelte-10yndgk">3544 &amp; 20274</p> <section id="mainImgCarousel" class="svelte-1mge1qj"><div id="arrowContainer" class="svelte-1mge1qj">${``}</div> <div id="carousel" class="textAnimationHeader svelte-1mge1qj">${validate_component(Carousel, "Carousel").$$render(
    $$result,
    {
      components: [
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20240224_094151411.jpg?alt=media&token=addbfdfb-7861-455e-b9ae-45cd65bb4291",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20240219_020353617.jpg?alt=media&token=1cf240d8-d507-41e4-8a6d-13509164f3e6",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20230328_015048223.jpg?alt=media&token=1c288d01-469e-46b3-9d5f-f04acfc371f7",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20240210_002141723.jpg?alt=media&token=320b00db-1bfd-463c-9397-baad3c01dab7",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20240128_162048258.jpg?alt=media&token=e5309fd3-0b0c-4de5-8513-8d8e8415970a",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20230218_012317100.jpg?alt=media&token=5fe0d967-3eb4-4c4c-b098-466678d5a3c3",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20240120_225747665.jpg?alt=media&token=a51bf7ed-e878-4017-a6de-4ef02e210e15",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20230401_121624594.jpg?alt=media&token=c536f7c8-b794-4460-992b-10d8efc5ec7b",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20240118_202722196.jpg?alt=media&token=f0ac6c6c-f975-46f3-a691-bcea44294e3d",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20230401_195100461.jpg?alt=media&token=c7dde432-d345-4a37-af6f-a113c826833e",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20240118_201513617.jpg?alt=media&token=a3e41449-3f68-4487-acc8-be09e0e23642",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20231117_212610108.jpg?alt=media&token=72cbc982-89c0-4e66-926e-68c871105eb5",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20231116_232419770.jpg?alt=media&token=4d6ab9cf-b0dc-4fe8-b20d-39d6678b62ef",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20231103_150755887.jpg?alt=media&token=412d1596-e794-46c1-9797-a793384f9f55",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20230323_005512717.jpg?alt=media&token=3c4c8226-86e2-4362-a7a9-c1ce1688ea9c",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20231103_145552317.jpg?alt=media&token=71add364-2adc-4f0e-85cd-db2edfd95437",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20231103_145224200.jpg?alt=media&token=b103152d-0f30-4f47-9e17-204345f2ad8d",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20230315_000933785.jpg?alt=media&token=2cc20392-2f42-47a5-a68f-d29063e0ad54",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20231103_132936169.jpg?alt=media&token=9f6cafcf-3880-43ef-8dd3-4cd73200f8be",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20231103_132617470.jpg?alt=media&token=61b47078-1630-458a-8136-6a8cc0168047",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20231103_131828280.jpg?alt=media&token=915346e9-72a8-48d2-b315-43205d7c04fc",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20230330_165806200.jpg?alt=media&token=77f2b138-4534-4fba-8880-0877e8508c6e",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20231103_131819929.jpg?alt=media&token=59b54171-68ad-443f-b667-418b6fce741f",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20231006_215926670.jpg?alt=media&token=c140722c-1182-434e-8bd1-01634e0a8223",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20231006_204826633.jpg?alt=media&token=5085bae5-655d-4524-ad5b-7ab80f91d362",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20231006_204818763.jpg?alt=media&token=cbfa7674-04b4-46af-8005-7776bbf73c5e",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20230218_005401682.jpg?alt=media&token=c0676799-f27c-4fa9-922b-3789e1392629",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20230125_013603642.jpg?alt=media&token=86b23a78-138a-44c0-bc3a-9a78783c586f",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20231006_204758583.jpg?alt=media&token=ff57f8dc-973c-4c79-8428-82bf8474318b",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20221210_163816498.jpg?alt=media&token=4ab6598a-7c42-46a3-bf8c-a896506a7b45",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20221216_234530316.jpg?alt=media&token=a3e95858-b626-4c1b-a072-927051570c3d",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20230115_142807174.jpg?alt=media&token=726a9e49-8451-4a34-8739-7542b676bbdd",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20230121_183411561.jpg?alt=media&token=ec569991-2244-4038-87ca-de888a699e52"
      ],
      height: `${carouselImgHeight}px`,
      gap: `${gap}px`,
      width: `${carouselImgWidth}px`,
      speed: "40s"
    },
    {},
    {}
  )}</div></section></section> <section id="about"><p class="headers textAnimation svelte-1mge1qj" id="aboutHeader" data-svelte-h="svelte-krpfc1">About us</p> <p id="aboutTxt" class="textAnimation svelte-1mge1qj" data-svelte-h="svelte-1yvfad8">We are a robotics team from the secondary school of Calixa-Lavalée in Montreal, Quebec. We mainly participate in FRC and FTC competitions as teams 3544 and 20274 respectively</p></section> <section id="robotShowcaseContainer" class="svelte-1mge1qj">${`<p class="headers textAnimation svelte-1mge1qj" id="robotTitle" data-svelte-h="svelte-i576ed">Velocity</p>`} <div id="robotShowcase3d" class="svelte-1mge1qj"><canvas class="svelte-1mge1qj"${add_attribute("this", canvasElement, 0)}></canvas></div> ${``}</section></main> <section id="footerContainer" class="svelte-1mge1qj">${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</section>`;
});
export {
  Page as default
};
