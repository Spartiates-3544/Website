<script>
    import Carousel from '../Components/Carousel.svelte';

    let outerWidth;
    let innerHeight;
    let sizeFactor = 1;
    let scrollDirection = 'horizontal';
    let topMargin = '-60vh'

    $: if (outerWidth < 800 && innerHeight > 550) {
        sizeFactor = 0.7
    } else if (outerWidth < 800 && innerHeight < 550){
        sizeFactor = 0.4
    } else {
        sizeFactor = 1
    }

    $: if (outerWidth < 500) {
        scrollDirection = 'vertical';
    } else {
        scrollDirection = 'horizontal'
    }
</script>

<svelte:window bind:outerWidth bind:innerHeight/>

<style>
    main{
        display: grid;
        place-items: center;
        height: calc(100vh - 35px);
    }

    #thanksContainer{
        width: 85%;
        margin-top: 15vh;
    }

    #thanks{
        font-size: calc(500% * var(--sizeFactor));
        font-weight: 600;
    }

    #contact a{
        color: #FFD25E;
    }

    #carouselContainer{
        overflow: hidden;
        width: 100%;
    }

    @media only screen and (max-width: 500px) {
        main {
            height: calc(100vh - 67px);
            position: relative;
            overflow: hidden;
        }

        #thanksContainer {
            margin-top: var(--topMargin);
            padding-bottom: 5vh;
        }

        #thanks {
            text-align: center;
            font-size: calc(400% * var(--sizeFactor));
        }

        #carouselContainer {
            height: 100%;
            position: absolute;
            top: 30vh;
            width: 100vw;
        }

        #carouselFade{
            width: 100%;
            height: 50px;
            z-index: 1;
            position: absolute;
            background: linear-gradient(to top, rgba(255, 255, 255, 0), #191D1B 90%);
        }

        #carousel{
            width: calc(100% - 60px);
            padding-left: 30px;
            padding-top: 5px;
        }
    }
    
</style>

<main style="--sizeFactor: {sizeFactor}; --topMargin: {topMargin}">
    <section id="thanksContainer">
        <p id="thanks">Thank you to our sponsors!</p>
        {#if outerWidth > 500}
            <p id="contact">If you'd like to sponsor us, please contact us <a href="../Contact">here</a></p>
        {/if}
    </section>
    <section id="carouselContainer">
        <span id="carouselFade"></span>
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
	        	height={'150px'}
	        	gap={'20px'}
	        	width={'500px'}
                borderRadius={'5px'}
                direction={scrollDirection}
	        />
        </div>
    </section>
    
</main>