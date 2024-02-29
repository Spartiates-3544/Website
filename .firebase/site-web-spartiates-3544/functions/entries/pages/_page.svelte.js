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
  code: "@keyframes svelte-1spg5qy-reveal{0%{height:100%}100%{height:0%}}@keyframes svelte-1spg5qy-rollingText{from{transform:translateX(0%)}to{transform:translateX(-30%)}}#mainContainer.svelte-1spg5qy.svelte-1spg5qy{padding-left:12vw;padding-right:12vw;padding-top:150px;line-height:1.2;overflow:hidden}.headers.svelte-1spg5qy.svelte-1spg5qy{color:#ffffff;font-family:'Bricolage Grotesque', sans-serif;font-size:calc(130px * var(--sizeFactor));font-weight:500;margin-bottom:0;display:relative}.subHeader.svelte-1spg5qy.svelte-1spg5qy{margin-top:0;font-weight:600;width:150px;cursor:pointer;transition:100ms;user-select:none}.subHeader.svelte-1spg5qy.svelte-1spg5qy:hover{color:#FFD25E}.subHeader.svelte-1spg5qy svg.svelte-1spg5qy{transform:rotate(var(--rotation));transition:300ms}.descriptions.svelte-1spg5qy.svelte-1spg5qy{color:#575A59;width:40vw;padding-top:5px;font-weight:600}#robotShowcaseContainer.svelte-1spg5qy.svelte-1spg5qy{display:grid;grid-template-columns:auto auto;grid-template-rows:auto;width:100%;margin-top:200px;margin-bottom:100px}#robotShowcase3d.svelte-1spg5qy.svelte-1spg5qy{display:grid;justify-content:end;padding-left:50px;max-height:80vh}#mainImgCarousel.svelte-1spg5qy.svelte-1spg5qy{margin-top:10px;display:grid;grid-template-columns:100%;grid-template-rows:0}#slide1.svelte-1spg5qy.svelte-1spg5qy{height:100vh;position:relative}#spartiates.svelte-1spg5qy.svelte-1spg5qy{position:relative}#teamNb.svelte-1spg5qy.svelte-1spg5qy{position:absolute;right:-45px;top:55px;transform:rotate(-90deg);color:#FFD25E}#teamNb.svelte-1spg5qy.svelte-1spg5qy::after,#teamNb.svelte-1spg5qy.svelte-1spg5qy::before{position:absolute;content:'3544 & 20274';width:100%;right:0;bottom:5px;opacity:20%}#teamNb.svelte-1spg5qy.svelte-1spg5qy::before{bottom:11px;opacity:5%}#footerContainer.svelte-1spg5qy.svelte-1spg5qy{margin-top:400px}#carousel.svelte-1spg5qy.svelte-1spg5qy{width:100%;position:absolute;bottom:205px;z-index:-1}#robotShowcaseTxt.svelte-1spg5qy.svelte-1spg5qy{display:grid;place-content:center}.selectorMenu.svelte-1spg5qy.svelte-1spg5qy{list-style-type:none;margin-top:5px;position:absolute;background-color:#191D1B;z-index:99;width:150px;box-shadow:10px 0 10px #191D1B;cursor:pointer}.selectorMenu.svelte-1spg5qy li.svelte-1spg5qy{transition:100ms}.selectorMenu.svelte-1spg5qy li.svelte-1spg5qy:hover{color:#FFD25E}.invisible.svelte-1spg5qy.svelte-1spg5qy{opacity:0;transition:300ms}#aboutTxt.svelte-1spg5qy.svelte-1spg5qy{font-size:170%;text-align:right}#aboutHeader.svelte-1spg5qy.svelte-1spg5qy{text-align:end}.textAnimation.svelte-1spg5qy.svelte-1spg5qy,.textAnimationHeader.svelte-1spg5qy.svelte-1spg5qy{position:relative}.textAnimation.svelte-1spg5qy.svelte-1spg5qy::after,.textAnimationHeader.svelte-1spg5qy.svelte-1spg5qy::after{content:' ';bottom:0;left:0;background:#191D1B;width:100%;height:100%;position:absolute;z-index:1;animation-name:svelte-1spg5qy-reveal;animation-duration:700ms;animation-fill-mode:forwards}.textAnimationHeader.svelte-1spg5qy.svelte-1spg5qy::after{animation-duration:1500ms}@media only screen and (max-width: 500px){#mainContainer.svelte-1spg5qy.svelte-1spg5qy{padding-top:10vh}.headers.svelte-1spg5qy.svelte-1spg5qy{text-align:center;font-size:170%;display:flex;flex-direction:column}#spartiates.svelte-1spg5qy.svelte-1spg5qy{font-size:230%;margin-top:-15px}#teamNb.svelte-1spg5qy.svelte-1spg5qy{font-family:'Bricolage Grotesque', sans-serif;transform:none;color:#fff;width:100%;font-size:80%;text-align:center;top:100px;right:0}#arrowContainer.svelte-1spg5qy.svelte-1spg5qy{margin-left:38vw;z-index:5;margin-top:-120px}#arrowHead.svelte-1spg5qy.svelte-1spg5qy{margin-top:-16px;margin-left:-7px}#carousel.svelte-1spg5qy.svelte-1spg5qy{width:100vw;margin-left:-12vw;margin-top:calc(var(--carouselTopMargin) * 1px);position:unset}#robotShowcaseContainer.svelte-1spg5qy.svelte-1spg5qy{grid-template-columns:100%;text-align:center}#robotTitle.svelte-1spg5qy.svelte-1spg5qy{margin-bottom:25px;font-size:300%}#robotShowcase3d.svelte-1spg5qy.svelte-1spg5qy{padding-left:0}#robotShowcase3d.svelte-1spg5qy canvas.svelte-1spg5qy{border-radius:20px}.subHeader.svelte-1spg5qy.svelte-1spg5qy{margin-top:10px;margin-bottom:10px}.subHeader.svelte-1spg5qy.svelte-1spg5qy:hover{color:#fff}#footerContainer.svelte-1spg5qy.svelte-1spg5qy{margin-top:0}#mainImgCarousel.svelte-1spg5qy.svelte-1spg5qy{margin-top:150px}.descriptions.svelte-1spg5qy.svelte-1spg5qy{width:100%}#aboutHeader.svelte-1spg5qy.svelte-1spg5qy{text-align:center;font-size:300%;padding-bottom:10px}#aboutTxt.svelte-1spg5qy.svelte-1spg5qy{font-size:100%;text-align:center;padding-bottom:50px}.subHeader.svelte-1spg5qy.svelte-1spg5qy{width:100%}.selectorMenu.svelte-1spg5qy.svelte-1spg5qy{width:100%;left:-1vw}.selectorMenu.svelte-1spg5qy li.svelte-1spg5qy{padding-bottom:10px}.selectorMenu.svelte-1spg5qy li.svelte-1spg5qy:hover{color:#fff}.textAnimationHeader.svelte-1spg5qy.svelte-1spg5qy::after{animation-duration:0ms}}",
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
      carouselImgHeight = innerHeight / 2.5;
      carouselImgWidth = carouselImgHeight / 1.55;
    }
  }
  return ` <main id="mainContainer" style="${"--sizeFactor: " + escape(sizeFactor, true) + "; --carouselTopMargin: " + escape(carouselTopMargin, true) + "; --rotation: " + escape(rotation, true) + "deg;"}" class="svelte-1spg5qy"><section id="slide1" class="svelte-1spg5qy"><p class="headers textAnimationHeader svelte-1spg5qy">We are ${``} the <i style="font-family: inherit;" id="spartiates" class="svelte-1spg5qy" data-svelte-h="svelte-f17gku">Spartiates</i> </p><p id="teamNb" class="svelte-1spg5qy" data-svelte-h="svelte-10yndgk">3544 &amp; 20274</p> <section id="mainImgCarousel" class="svelte-1spg5qy"><div id="arrowContainer" class="svelte-1spg5qy">${``}</div> <div id="carousel" class="textAnimationHeader svelte-1spg5qy">${validate_component(Carousel, "Carousel").$$render(
    $$result,
    {
      components: [
        "https://media.discordapp.net/attachments/1051259930914594879/1103175329910100048/C9A2BB25-A139-4D3B-9C8D-EC49F61223CF.jpg?ex=6566bd16&is=65544816&hm=234b4db629f9926e31ccf49223c610509d34736044744dd17f05ecca2f714b3b&=&width=666&height=889",
        "https://media.discordapp.net/attachments/1051259930914594879/1096886608747311275/IMG_1169.jpg?ex=656b8bc2&is=655916c2&hm=46eebcbfb5c2ca1bac2924d93c243b93e8813e3a2a3d6d9791334d9e68bbf6f5&=&width=499&height=889",
        "https://media.discordapp.net/attachments/1051259930914594879/1091927619357921290/DSC04818.JPG?ex=656bf657&is=65598157&hm=096c48f73bafa16f0af62f40361f74a01581ca71316763b19bd77b9a76acc844&=&width=592&height=889",
        "https://media.discordapp.net/attachments/1051259930914594879/1091927619357921290/DSC04818.JPG?ex=656bf657&is=65598157&hm=096c48f73bafa16f0af62f40361f74a01581ca71316763b19bd77b9a76acc844&=&width=592&height=889",
        "https://media.discordapp.net/attachments/1051259930914594879/1091927306789986334/DSC04798.JPG?ex=656bf60c&is=6559810c&hm=18dacdd4650206757cce80bf93f0d3ab0ca92a45fe2c5fb9ec2b1a63e39adf09&=&width=592&height=889",
        "https://media.discordapp.net/attachments/1051259930914594879/1103175329910100048/C9A2BB25-A139-4D3B-9C8D-EC49F61223CF.jpg?ex=6566bd16&is=65544816&hm=234b4db629f9926e31ccf49223c610509d34736044744dd17f05ecca2f714b3b&=&width=666&height=889",
        "https://media.discordapp.net/attachments/1051259930914594879/1103175329910100048/C9A2BB25-A139-4D3B-9C8D-EC49F61223CF.jpg?ex=6566bd16&is=65544816&hm=234b4db629f9926e31ccf49223c610509d34736044744dd17f05ecca2f714b3b&=&width=666&height=889",
        "https://media.discordapp.net/attachments/1051259930914594879/1091927306789986334/DSC04798.JPG?ex=656bf60c&is=6559810c&hm=18dacdd4650206757cce80bf93f0d3ab0ca92a45fe2c5fb9ec2b1a63e39adf09&=&width=592&height=889",
        "https://media.discordapp.net/attachments/1051259930914594879/1103175329910100048/C9A2BB25-A139-4D3B-9C8D-EC49F61223CF.jpg?ex=6566bd16&is=65544816&hm=234b4db629f9926e31ccf49223c610509d34736044744dd17f05ecca2f714b3b&=&width=666&height=889",
        "https://media.discordapp.net/attachments/1051259930914594879/1103175329910100048/C9A2BB25-A139-4D3B-9C8D-EC49F61223CF.jpg?ex=6566bd16&is=65544816&hm=234b4db629f9926e31ccf49223c610509d34736044744dd17f05ecca2f714b3b&=&width=666&height=889"
      ],
      height: `${carouselImgHeight}px`,
      gap: `${gap}px`,
      width: `${carouselImgWidth}px`,
      speed: "40s"
    },
    {},
    {}
  )}</div></section></section> <section id="about"><p class="headers textAnimation svelte-1spg5qy" id="aboutHeader" data-svelte-h="svelte-krpfc1">About us</p> <p id="aboutTxt" class="textAnimation svelte-1spg5qy" data-svelte-h="svelte-14qgrfm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p></section> <section id="robotShowcaseContainer" class="svelte-1spg5qy">${`<p class="headers textAnimation svelte-1spg5qy" id="robotTitle" data-svelte-h="svelte-i576ed">Velocity</p>`} <div id="robotShowcase3d" class="svelte-1spg5qy"><canvas class="svelte-1spg5qy"${add_attribute("this", canvasElement, 0)}></canvas></div> ${``}</section></main> <section id="footerContainer" class="svelte-1spg5qy">${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</section>`;
});
export {
  Page as default
};
