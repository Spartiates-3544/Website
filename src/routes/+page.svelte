<script>
	import Footer from './Components/Footer.svelte';
	import Carousel from './Components/Carousel.svelte';

	let outerWidth;
	let innerHeight;
	let scrollY
	let sizeFactor = 1;
	let arrowHeight;
	let carouselImgHeight = 400;
	let carouselImgWidth = 250;
	let carouselTopMargin = -30;
	let gap = 10

	$: if(((outerWidth < 900) && (outerWidth > 650)) || ((innerHeight < 850) && (innerHeight > 730))){
		sizeFactor = 0.8;
	} else if (outerWidth < 650 || innerHeight < 730){
		sizeFactor = 0.6;
	} else {
		sizeFactor = 1;
	}

	$: if(innerHeight > 0 & outerWidth < 500){
		arrowHeight = innerHeight - 385;
		carouselTopMargin = innerHeight / 5 - 200;
		carouselImgHeight = innerHeight / 3;
		carouselImgWidth = 150
	} else {
		carouselImgHeight = innerHeight / 2.5
		carouselImgWidth = carouselImgHeight / 1.55
	}

	$: if(200 > scrollY > 0 ){
		arrowHeight = innerHeight - 385 + scrollY
	}
</script>

<style>
	#mainContainer {
		padding-left: 12vw;
		padding-right: 12vw;
		padding-top: 150px;
		line-height: 1.2;
		overflow: hidden;
	}

	.headers {
		color: #ffffff;
		font-family: 'EB Garamond', serif;
		font-size: calc(120px * var(--sizeFactor));
		font-weight: 500;
		margin-bottom: 0;
		display: relative;
	}

	.subHeader {
		margin-top: 0;
		font-weight: 600;
	}

	.descriptions {
		opacity: 30%;
		width: 40vw;
	}

	#robotShowcaseContainer {
		display: grid;
		grid-template-columns: auto auto;
		grid-template-rows: auto;
		width: 100%;
		margin-top: 100px;
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
		color: #ffcc01;
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

	@media only screen and (max-width: 500px) {

		#mainContainer {
			padding-top: 10vh;
		}

		.headers {
			text-align: center;
			font-size: 200%;
			display: flex;
			flex-direction: column;
		}

		#spartiates {
			font-size: 230%;
			margin-top: -15px;
		}

		#teamNb{
			font-family: 'EB Garamond', serif;
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

		#robotShowcase3d img{
			border-radius: 10px;
		}

		.subHeader{
			margin-top: 10px;
			margin-bottom: 5px;
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
	}
</style>

<svelte:window bind:outerWidth bind:innerHeight bind:scrollY/>

<main id="mainContainer" style="--sizeFactor: {sizeFactor}; --carouselTopMargin: {carouselTopMargin}">
	<section id="slide1">
		<p class="headers">We are {#if outerWidth > 500}<br/>{/if} the <i style="font-family: inherit;" id="spartiates">Spartiates</i> <p id="teamNb">3544 & 20274</p>
		<section id="mainImgCarousel">
			<div id="arrowContainer">
				{#if outerWidth < 500}
					<svg width="2" height={arrowHeight} viewBox="0 0 2 {arrowHeight}" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M1 0L1.00002 {arrowHeight}" stroke="#FFCC01" stroke-width="2"/>
					</svg>
					<div id="arrowHead">
						<svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M9 7C9 6.44772 8.55228 6 8 6C7.44772 6 7 6.44772 7 7L9 7ZM7.29289 8.70711C7.68342 9.09763 8.31658 9.09763 8.70711 8.70711L15.0711 2.34315C15.4616 1.95262 15.4616 1.31946 15.0711 0.928932C14.6805 0.538408 14.0474 0.538408 13.6569 0.928932L8 6.58579L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L7.29289 8.70711ZM7 7L7 8L9 8L9 7L7 7Z" fill="#FFCC01"/>
						</svg>
					</div>
				{/if}
			</div>
			<div id="carousel">
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
				/>
			</div>
		</section>

	</section>

	<section id="robotShowcaseContainer">
		{#if outerWidth > 500}
			<div id="robotShowcaseTxt">
				<p class="headers">Velocity</p>	
				<p class="subHeader">FRC - 2023</p>
				<p class="descriptions">Tank drive, wheel size, 6 drive motors, falcon motors, 120lbs</p>
			</div>
			<div id="robotShowcase3d">
				<img
					src="https://media.discordapp.net/attachments/1051259930914594879/1103175329910100048/C9A2BB25-A139-4D3B-9C8D-EC49F61223CF.jpg?ex=6566bd16&is=65544816&hm=234b4db629f9926e31ccf49223c610509d34736044744dd17f05ecca2f714b3b&=&width=666&height=889"
					alt="we"
					width="100%"
					/>
			</div>
		{:else}
			<p class="headers" id="robotTitle">Velocity</p>
			<div id="robotShowcase3d">
				<img
					src="https://media.discordapp.net/attachments/1051259930914594879/1103175329910100048/C9A2BB25-A139-4D3B-9C8D-EC49F61223CF.jpg?ex=6566bd16&is=65544816&hm=234b4db629f9926e31ccf49223c610509d34736044744dd17f05ecca2f714b3b&=&width=666&height=889"
					alt="we"
					width="100%"
					/>
			</div>
			<p class="subHeader">FRC - 2023</p>
			<p class="descriptions">Tank drive, wheel size, 6 drive motors, falcon motors, 120lbs</p>
		{/if}
	</section>
</main>

<section id="footerContainer">
	<Footer />
</section>