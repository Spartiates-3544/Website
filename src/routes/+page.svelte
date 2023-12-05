<script>
	import Footer from './Components/Footer.svelte';
	import Carousel from './Components/Carousel.svelte';
</script>

<style>
	#mainContainer {
		padding-left: 12vw;
		padding-right: 12vw;
		padding-top: 120px;
		line-height: 1.2;
	}

	.headers {
		color: #ffffff;
		font-family: 'EB Garamond', serif;
		font-size: 120px;
		font-weight: 500;
		margin-bottom: 0;
	}

	.subHeader {
		margin-top: 0;
		font-weight: 600;
	}

	.descriptions {
		opacity: 30%;
	}

	#fade {
		z-index: 1;
		position: absolute;
		background-color: aqua;
		width: 60vw;
		height: 35vh;
		background: linear-gradient(
			to right,
			#1a2121 10%,
			rgba(0, 0, 0, 0) 15%,
			rgba(0, 0, 0, 0) 95%,
			#1a2121 100%
		);
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
	}

	#mainImgCarousel {
		margin-top: 150px;
		display: grid;
		grid-template-columns: 12vw 60vw;
		grid-template-rows: 0;
		height: 300px;
	}

	#slide1{
        height: 100vh;
    }

	#spartiates{
		position: relative;
	}

	#spartiates::after{
		content: '3544 & 20274';
		position: absolute;
		transform: skew(-10deg, -15deg);
		font-family: 'Caveat', cursive;
		color: #ffcc01;
		font-size: 30%;
		width: 200px;
		bottom: 10%;
		right: -25%;
	}
</style>

<main id="mainContainer">
	<section id="slide1">
		<p class="headers">We are <br /> the <i style="font-family: inherit;" id="spartiates">Spartiates</i></p>
		<section id="mainImgCarousel">
			<div id="arrowContainer">
				<svg
					width="200"
					height="400"
					viewBox="-70 0 100 200"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M12.4999 1.98352C12.4908 1.15514 11.8119 0.490988 10.9835 0.500091C10.1551 0.509194 9.49099 1.18811 9.50009 2.01648L12.4999 1.98352ZM10.9511 94.0723C11.5432 94.6516 12.4929 94.6411 13.0723 94.0489L22.5127 84.3987C23.092 83.8065 23.0816 82.8568 22.4894 82.2775C21.8972 81.6982 20.9475 81.7086 20.3682 82.3008L11.9767 90.8788L3.39868 82.4873C2.80649 81.908 1.8568 81.9184 1.27749 82.5106C0.698175 83.1028 0.708611 84.0525 1.3008 84.6318L10.9511 94.0723ZM9.50009 2.01648L10.5001 93.0165L13.4999 92.9835L12.4999 1.98352L9.50009 2.01648Z"
						fill="#FFCC01"
					/>
				</svg>
			</div>
			<div id="carousel">
				<span id="fade" />
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
					height={'300px'}
					gap={'20px'}
					width={'200px'}
				/>
			</div>
		</section>
	</section>

	<section id="robotShowcaseContainer">
		<div id="robotShowcaseTxt">
			<p class="headers">Velocity</p>
			<p class="subHeader">FRC 2023</p>
			<p class="descriptions">Tank drive, wheel size, 6 drive motors, falcon motors, 120lbs</p>
		</div>
		<div id="robotShowcase3d">
			<img
				src="https://media.discordapp.net/attachments/1051259930914594879/1103175329910100048/C9A2BB25-A139-4D3B-9C8D-EC49F61223CF.jpg?ex=6566bd16&is=65544816&hm=234b4db629f9926e31ccf49223c610509d34736044744dd17f05ecca2f714b3b&=&width=666&height=889"
				alt="we"
				/>
		</div>
	</section>
</main>

<section style="margin-top: 400px;">
	<Footer />
</section>