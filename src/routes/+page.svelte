<script>
	import Footer from './Components/Footer.svelte';
	import Carousel from './Components/Carousel.svelte';
	import * as THREE from 'three';
	import { onMount } from 'svelte';
	import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
	import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
	import { cubicInOut } from 'svelte/easing';
	import inViewport from "./intersection.js";

	let outerWidth;
	let innerHeight;
	let scrollY
	let sizeFactor = 1;
	let arrowHeight;
	let carouselImgHeight = 400;
	let carouselImgWidth = 250;
	let carouselTopMargin = -30;
	let gap = 10;
	let canvasElement;
	let arrowHoverState = false;
	let Color = "#fff";
	let toggleMenuStatus = false;
	let selected = 0;
	let yearList = {
		"FRC 2022 - 2023" : {"path" : "/test.gltf"},
		"FRC 2021 - 2022" : {"path" : "/test2.gltf"}
	}
	
	let rotation = 0;
	let currentModel = yearList[Object.keys(yearList)[0]]["path"];

	let models = [];
	let yearListLength = Object.keys(yearList).length

	let competitions = ["FRC - 3544", "BetaBot - 3544", "FTC - 20274"]

	$: if(((outerWidth < 900) && (outerWidth > 650)) || ((innerHeight < 850) && (innerHeight > 730))){ //responsiveness
		sizeFactor = 0.8;
	} else if (outerWidth < 650 || innerHeight < 730){
		sizeFactor = 0.6;
	} else {
		sizeFactor = 1;
	}

	$: if(innerHeight > 0 && outerWidth < 500){ //responsiveness
		arrowHeight = innerHeight - 385;
		carouselTopMargin = innerHeight / 5 - 200;
		carouselImgHeight = innerHeight / 3;
		carouselImgWidth = 150
	} else {
		carouselImgHeight = innerHeight / 2.5
		carouselImgWidth = carouselImgHeight / 1.55
	}

	$: if(200 > scrollY > 0 ){ //mobileUi arrow follow
		arrowHeight = innerHeight - 385 + scrollY
	}

	const scene = new THREE.Scene();

	const loader = new GLTFLoader();

	function loadModel(path){
		loader.load( path, function ( gltf ) {
			gltf.scene.scale.set(8, 8, 8)
			scene.remove(scene.children[1]) //resets the scene before adding the new object
			scene.add( gltf.scene ); //adds the new object
		}, undefined, function ( error ) {
			console.error( error );
		});
	}

	onMount(() => { //3d model renderer
		let aspectRatioWidth;
		let aspectRatioHeight;
		let canvasWidth;
		let canvasHeight;

		loadModel(currentModel)

		if (outerWidth > 500){ //responsive values for aspect ratio and size
			aspectRatioWidth = Math.min(window.innerWidth/3.1, 560);
			aspectRatioHeight = window.innerHeight/1.2

			canvasWidth = Math.min(window.innerWidth/3, 600);
			canvasHeight = window.innerHeight/1.2;
		} else {
			aspectRatioWidth = window.innerWidth/1.32;
			aspectRatioHeight = window.innerHeight/2;

			canvasWidth = window.innerWidth/1.32;
			canvasHeight = window.innerHeight/2;
		}

		const camera = new THREE.PerspectiveCamera( 75, aspectRatioWidth / aspectRatioHeight, 0.1, 1000 );
		
		const renderer = new THREE.WebGLRenderer({canvas: canvasElement, antialias: true, alpha: true});
		renderer.setSize(canvasWidth, canvasHeight);

		const controls = new OrbitControls( camera, renderer.domElement );

		camera.position.set( 0, 0, 1 );
		controls.autoRotate = true;
		controls.update();

		const light = new THREE.HemisphereLight(0xffffff, 1)
		light.position.set (0,1.5,1)
		scene.add(light)
		
		camera.position.set(0, 0, 1);
		
		function animate() { //animation function
			requestAnimationFrame( animate );
			
			controls.update();

			renderer.render( scene, camera );
		}
		animate();
	})

	//Color change for model change arrow

	function arrowColor() {
		arrowHoverState = !arrowHoverState
	}

	$: if (arrowHoverState === true) {
		Color = '#FFD25E'
	} else {
		Color = "#fff"
	}

	//model selector

	for (let i = 0; i < yearListLength; i++){
		models.push(Object.keys(yearList)[i])
	}

	function toggleMenu() {
		toggleMenuStatus = !toggleMenuStatus;
		rotation += 180;
	}

	function currentSelect(index) {
		selected = models.indexOf(index)
		currentModel = yearList[Object.keys(yearList)[models.indexOf(index)]]["path"];
		loadModel(currentModel)
		toggleMenu()
	}

	function fadeSlide(node, { delay = 0, duration = 400, easing = cubicInOut }) { //fade in transition
		const style = getComputedStyle(node);
		const opacity = +style.opacity;
		const height = parseFloat(style.height);

		return {
			delay,
			duration,
			easing,
			css: (t) =>
				`overflow: hidden;` +
				`opacity: ${t * opacity + 0.1};` +
				`height: ${t * height}px;` 
		};
	}

</script>
<style>
	@keyframes reveal {
		0%{
			height: 100%;
		}
		100%{
			height: 0%;
		}
	}

	@keyframes rollingText{
		from{
			transform: translateX(0%);
		}
		to{
			transform: translateX(-30%);
		}
	}

	#mainContainer {
		padding-left: 12vw;
		padding-right: 12vw;
		padding-top: 150px;
		line-height: 1.2;
		overflow: hidden;
	}

	.headers {
		color: #ffffff;
		font-family: 'Bricolage Grotesque', sans-serif;
		font-size: calc(130px * var(--sizeFactor));
		font-weight: 500;
		margin-bottom: 0;
		display: relative;
	}

	.subHeader {
		margin-top: 0;
		font-weight: 600;
		width: 150px;
		cursor: pointer;
		transition: 100ms;
		user-select: none;
	}

	.subHeader:hover {
		color: #FFD25E;
	}

	.subHeader svg{
		transform: rotate(var(--rotation));
		transition: 300ms;
	}

	.descriptions {
		color: #575A59;
		width: 40vw;
		padding-top: 5px;
		font-weight: 600;
	}

	#robotShowcaseContainer {
		display: grid;
		grid-template-columns: auto auto;
		grid-template-rows: auto;
		width: 100%;
		margin-top: 200px;
		margin-bottom: 100px;
	}

	#robotShowcase3d {
		display: grid;
		justify-content: end;
		padding-left: 50px;
		max-height: 80vh;
	}

	#mainImgCarousel {
		margin-top: 10px;
		display: grid;
		grid-template-columns: 100%;
		grid-template-rows: 0;
	}

	#slide1{
        height: 100vh;
		position: relative;
    }

	#spartiates{
		position: relative;	
	}

	#teamNb{
		position: absolute;
		right: -45px;
		top: 55px;
		transform: rotate(-90deg);
		color: #FFD25E;
	}

	#teamNb::after, #teamNb::before{
		position: absolute;
		content: '3544 & 20274';
		width: 100%;
		right: 0;
		bottom: 5px;
		opacity: 20%;
	}

	#teamNb::before{
		bottom: 11px;
		opacity: 5%;
	}

	#footerContainer{
		margin-top: 400px;
	}

	#carousel{
		width: 100%;
		position: absolute;
		bottom: 205px;
		z-index: -1;
	}

	#robotShowcaseTxt{
		display: grid;
		place-content: center;
	}

	.selectorMenu{
		list-style-type: none;
		margin-top: 5px;
		position: absolute;
		background-color: #191D1B;
		z-index: 99;
		width: 150px;
		box-shadow: 10px 0 10px #191D1B;
		cursor: pointer;
	}

	.selectorMenu li {
		transition: 100ms;
	}

	.selectorMenu li:hover {
		color: #FFD25E;
	}

	.invisible {
		opacity: 0;
		transition: 300ms;
	}

	#aboutTxt{
		font-size: 170%;
		text-align: right;
	}

	#aboutHeader{
		text-align: end;
	}

	.textAnimation, .textAnimationHeader{
		position: relative;
	}

	.textAnimation::after, .textAnimationHeader::after{
		content: ' ';
		bottom: 0;
		left: 0;
		background: #191D1B;
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: 1;
		animation-name: reveal;
		animation-duration: 700ms;
		animation-fill-mode: forwards;
	}

	.textAnimationHeader::after{
		animation-duration: 1500ms;
	}

	@media only screen and (max-width: 500px) {

		#mainContainer {
			padding-top: 10vh;
		}

		.headers {
			text-align: center;
			font-size: 170%;
			display: flex;
			flex-direction: column;
		}

		#spartiates {
			font-size: 230%;
			margin-top: -15px;
		}

		#teamNb{
			font-family: 'Bricolage Grotesque', sans-serif;
			transform: none;
			color: #fff;	
			width: 100%;
			font-size: 80%;
			text-align: center;
			top: 100px;
			right: 0;
		}

		#arrowContainer{
			margin-left: 38vw;
			z-index: 5;
			margin-top: -120px;
		}
		
		#arrowHead{
			margin-top: -16px;
			margin-left: -7px;
		}

		#carousel{
			width: 100vw;
			margin-left: -12vw;
			margin-top: calc(var(--carouselTopMargin) * 1px);
			position: unset;
		}

		#robotShowcaseContainer{
			grid-template-columns: 100%;
			text-align: center;
		}

		#robotTitle{
			margin-bottom: 25px;
			font-size: 300%;
		}

		#robotShowcase3d{
			padding-left: 0;
		}

		#robotShowcase3d canvas{
			border-radius: 20px;
		}

		.subHeader{
			margin-top: 10px;
			margin-bottom: 10px;
		}

		.subHeader:hover{
			color: #fff;
		}

		#footerContainer{
			margin-top: 0;
		}

		#mainImgCarousel {
			margin-top: 150px;
		}

		.descriptions {
			width: 100%;
		}

		#aboutHeader{
			text-align: center;
			font-size: 300%;
			padding-bottom: 10px;
		}

		#aboutTxt{
			font-size: 100%;
			text-align: center;
			padding-bottom: 50px;
		}

		.subHeader{
			width: 100%;
		}

		.selectorMenu{
			width: 100%;
			left: -1vw;
		}

		.selectorMenu li{
			padding-bottom: 10px;
		}

		.selectorMenu li:hover {
			color: #fff;
		}

		.textAnimationHeader::after {
			animation-duration: 0ms;
		}
	}
</style>

<svelte:window bind:outerWidth bind:innerHeight bind:scrollY/>

<main id="mainContainer" style="--sizeFactor: {sizeFactor}; --carouselTopMargin: {carouselTopMargin}; --rotation: {rotation}deg;">
	<section id="slide1">
		<p class="headers textAnimationHeader">We are {#if outerWidth > 500}<br/>{/if} the <i style="font-family: inherit;" id="spartiates">Spartiates</i> <p id="teamNb">3544 & 20274</p>
		<section id="mainImgCarousel">
			<div id="arrowContainer">
				{#if outerWidth < 500}
					<svg width="2" height={arrowHeight} viewBox="0 0 2 {arrowHeight}" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M1 0L1.00002 {arrowHeight}" stroke="#FFD25E" stroke-width="2"/>
					</svg>
					<div id="arrowHead">
						<svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M9 7C9 6.44772 8.55228 6 8 6C7.44772 6 7 6.44772 7 7L9 7ZM7.29289 8.70711C7.68342 9.09763 8.31658 9.09763 8.70711 8.70711L15.0711 2.34315C15.4616 1.95262 15.4616 1.31946 15.0711 0.928932C14.6805 0.538408 14.0474 0.538408 13.6569 0.928932L8 6.58579L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L7.29289 8.70711ZM7 7L7 8L9 8L9 7L7 7Z" fill="#FFD25E"/>
						</svg>
					</div>
				{/if}
			</div>
			<div id="carousel" class="textAnimationHeader">
				<Carousel
					components={[
						'https://media.discordapp.net/attachments/1051259930914594879/1103175329910100048/C9A2BB25-A139-4D3B-9C8D-EC49F61223CF.jpg?ex=6566bd16&is=65544816&hm=234b4db629f9926e31ccf49223c610509d34736044744dd17f05ecca2f714b3b&=&width=666&height=889',
						'https://media.discordapp.net/attachments/1051259930914594879/1096886608747311275/IMG_1169.jpg?ex=656b8bc2&is=655916c2&hm=46eebcbfb5c2ca1bac2924d93c243b93e8813e3a2a3d6d9791334d9e68bbf6f5&=&width=499&height=889',
						'https://media.discordapp.net/attachments/1051259930914594879/1091927619357921290/DSC04818.JPG?ex=656bf657&is=65598157&hm=096c48f73bafa16f0af62f40361f74a01581ca71316763b19bd77b9a76acc844&=&width=592&height=889',
						'https://media.discordapp.net/attachments/1051259930914594879/1091927619357921290/DSC04818.JPG?ex=656bf657&is=65598157&hm=096c48f73bafa16f0af62f40361f74a01581ca71316763b19bd77b9a76acc844&=&width=592&height=889',
						'https://media.discordapp.net/attachments/1051259930914594879/1091927306789986334/DSC04798.JPG?ex=656bf60c&is=6559810c&hm=18dacdd4650206757cce80bf93f0d3ab0ca92a45fe2c5fb9ec2b1a63e39adf09&=&width=592&height=889',
						'https://media.discordapp.net/attachments/1051259930914594879/1103175329910100048/C9A2BB25-A139-4D3B-9C8D-EC49F61223CF.jpg?ex=6566bd16&is=65544816&hm=234b4db629f9926e31ccf49223c610509d34736044744dd17f05ecca2f714b3b&=&width=666&height=889',
						'https://media.discordapp.net/attachments/1051259930914594879/1103175329910100048/C9A2BB25-A139-4D3B-9C8D-EC49F61223CF.jpg?ex=6566bd16&is=65544816&hm=234b4db629f9926e31ccf49223c610509d34736044744dd17f05ecca2f714b3b&=&width=666&height=889',
						'https://media.discordapp.net/attachments/1051259930914594879/1091927306789986334/DSC04798.JPG?ex=656bf60c&is=6559810c&hm=18dacdd4650206757cce80bf93f0d3ab0ca92a45fe2c5fb9ec2b1a63e39adf09&=&width=592&height=889',
						'https://media.discordapp.net/attachments/1051259930914594879/1103175329910100048/C9A2BB25-A139-4D3B-9C8D-EC49F61223CF.jpg?ex=6566bd16&is=65544816&hm=234b4db629f9926e31ccf49223c610509d34736044744dd17f05ecca2f714b3b&=&width=666&height=889',
						'https://media.discordapp.net/attachments/1051259930914594879/1103175329910100048/C9A2BB25-A139-4D3B-9C8D-EC49F61223CF.jpg?ex=6566bd16&is=65544816&hm=234b4db629f9926e31ccf49223c610509d34736044744dd17f05ecca2f714b3b&=&width=666&height=889'
					]}
					height={`${carouselImgHeight}px`}
					gap={`${gap}px`}
					width={`${carouselImgWidth}px`}
					speed={'40s'}
				/>
			</div>
		</section>
	</section>

	<section id="about">
		<p class="headers textAnimation" use:inViewport id="aboutHeader">About us</p>
		<p id="aboutTxt" use:inViewport class="textAnimation">We are a robotics team from the secondary school of Calixa-Lavalée mainly participating in FRC and FTC competitions as teams 3544 and 20274 respectively</p>
	</section>

	<section id="robotShowcaseContainer">
		{#if outerWidth > 500}
			<div id="robotShowcaseTxt">
				<p class="headers invisible textAnimation" use:inViewport>Velocity</p>	
				<p class="subHeader invisible textAnimation" use:inViewport on:mouseenter={arrowColor} on:mouseleave={arrowColor} on:click={toggleMenu}>{Object.keys(yearList)[selected]}
					<svg width="14" height="11" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path style="transition: 100ms;" d="M9.11612 10.8839C9.60427 11.372 10.3957 11.372 10.8839 10.8839L18.8388 2.92893C19.327 2.44078 19.327 1.64932 18.8388 1.16116C18.3507 0.67301 17.5592 0.67301 17.0711 1.16116L10 8.23223L2.92893 1.16117C2.44078 0.67301 1.64932 0.67301 1.16116 1.16117C0.67301 1.64932 0.67301 2.44078 1.16116 2.92893L9.11612 10.8839ZM8.75 9L8.75 10L11.25 10L11.25 9L8.75 9Z" fill="{Color}"/>
					</svg>
					<section>
						{#if toggleMenuStatus === true}
							<ul class="selectorMenu" transition:fadeSlide={{ duration: 200, easing: cubicInOut }}>
							{#each models as model}
								<li on:click={() => currentSelect(model)}>{model}</li>
							{/each}
							</ul>
						{/if}
					</section>
					
				<p class="descriptions invisible textAnimation" use:inViewport>Tank drive, wheel size, 6 drive motors, falcon motors, 120lbs</p>
			</div>
		{:else}
			<p class="headers textAnimation" id="robotTitle" use:inViewport>Velocity</p>
		{/if}
		<div id="robotShowcase3d"><canvas bind:this={canvasElement}></canvas></div>
		{#if outerWidth < 500}
		<p class="subHeader invisible textAnimation" use:inViewport on:click={toggleMenu}>{Object.keys(yearList)[selected]}
			<svg width="14" height="11" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path style="transition: 100ms;" d="M9.11612 10.8839C9.60427 11.372 10.3957 11.372 10.8839 10.8839L18.8388 2.92893C19.327 2.44078 19.327 1.64932 18.8388 1.16116C18.3507 0.67301 17.5592 0.67301 17.0711 1.16116L10 8.23223L2.92893 1.16117C2.44078 0.67301 1.64932 0.67301 1.16116 1.16117C0.67301 1.64932 0.67301 2.44078 1.16116 2.92893L9.11612 10.8839ZM8.75 9L8.75 10L11.25 10L11.25 9L8.75 9Z" fill="{Color}"/>
			</svg>
			<section>
				{#if toggleMenuStatus === true}
					<ul class="selectorMenu" transition:fadeSlide={{ duration: 200, easing: cubicInOut }}>
					{#each models as model}
						<li on:click={() => currentSelect(model)}>{model}</li>
					{/each}
					</ul>
				{/if}
			</section>
			<p class="descriptions textAnimation" use:inViewport>Tank drive, wheel size, 6 drive motors, falcon motors, 120lbs</p>
		{/if}
	</section>
</main>

<section id="footerContainer">
	<Footer />
</section>