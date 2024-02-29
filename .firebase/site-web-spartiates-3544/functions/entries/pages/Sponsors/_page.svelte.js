import { c as create_ssr_component, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import { C as Carousel } from "../../../chunks/Carousel.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@keyframes svelte-1j3taol-reveal{0%{height:100%}100%{height:0%}}main.svelte-1j3taol.svelte-1j3taol{display:grid;place-items:center;height:calc(100vh - 35px)}#thanksContainer.svelte-1j3taol.svelte-1j3taol{width:85%;margin-top:15vh}#thanks.svelte-1j3taol.svelte-1j3taol{font-size:calc(500% * var(--sizeFactor));font-weight:600}#contact.svelte-1j3taol a.svelte-1j3taol{color:#FFD25E}#carouselContainer.svelte-1j3taol.svelte-1j3taol{overflow:hidden;width:100%}.textAnimation.svelte-1j3taol.svelte-1j3taol{position:relative}.textAnimation.svelte-1j3taol.svelte-1j3taol::after{content:' ';bottom:0;left:0;background:#191D1B;width:100%;height:100%;position:absolute;z-index:1;animation-name:svelte-1j3taol-reveal;animation-duration:700ms;animation-fill-mode:forwards}@media only screen and (max-width: 500px){main.svelte-1j3taol.svelte-1j3taol{height:calc(100vh - 67px);position:relative;overflow:hidden}#thanksContainer.svelte-1j3taol.svelte-1j3taol{margin-top:var(--topMargin);padding-bottom:5vh}#thanks.svelte-1j3taol.svelte-1j3taol{text-align:center;font-size:calc(400% * var(--sizeFactor))}#carouselContainer.svelte-1j3taol.svelte-1j3taol{height:100%;position:absolute;top:30vh;width:100vw}#carouselFade.svelte-1j3taol.svelte-1j3taol{width:100%;height:50px;z-index:1;position:absolute;background:linear-gradient(to top, rgba(255, 255, 255, 0), #191D1B 90%)}#carousel.svelte-1j3taol.svelte-1j3taol{width:calc(100% - 60px);padding-left:30px;padding-top:5px}}",
  map: null
};
let topMargin = "-60vh";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let sizeFactor = 1;
  let scrollDirection = "horizontal";
  $$result.css.add(css);
  {
    {
      sizeFactor = 1;
    }
  }
  {
    {
      scrollDirection = "horizontal";
    }
  }
  return `  <main style="${"--sizeFactor: " + escape(sizeFactor, true) + "; --topMargin: " + escape(topMargin, true)}" class="svelte-1j3taol"><section id="thanksContainer" class="svelte-1j3taol"><p id="thanks" class="textAnimation svelte-1j3taol" data-svelte-h="svelte-7w8vnb">Thank you to our sponsors!</p> ${``}</section> <section id="carouselContainer" class="svelte-1j3taol"><span id="carouselFade" class="svelte-1j3taol"></span> <div id="carousel" class="textAnimation svelte-1j3taol">${validate_component(Carousel, "Carousel").$$render(
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
      height: "150px",
      gap: "20px",
      width: "500px",
      borderRadius: "5px",
      direction: scrollDirection,
      speed: "40s"
    },
    {},
    {}
  )}</div></section></main>`;
});
export {
  Page as default
};
