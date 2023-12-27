<script>
	import Carousel from '../Components/Carousel.svelte';
</script>

<style>
    main{
        margin-top: 25vh;
        display: grid;
        place-items: center;
        width: 100vw;
        overflow: hidden;
    }

    #contacts{
        display: grid;
        grid-template-columns: repeat(2, 350px);
        margin-top: 100px;
        margin-left: 7vw;
    }

    #socialsList{
        display: flex;
        gap: 50px;
    }

    #socialsList ul li{
        list-style: none;
    }

    #contacts section a:hover{
        color: #FFD25E;
    }

    #contacts section a{
        text-decoration: none;
        transition: 100ms;
    }

    .contactHeader{
        font-size: 80%;
        opacity: 50%;
    }

    @media only screen and (max-width: 750px) {
        main {
            margin-top: 15vh;
        }

        #contacts{
            margin-top: 7vh;
            grid-template-columns: 100%;
            row-gap: 20px;
        }

        #socialsList ul li{
            padding-bottom: 7px;
        }
    }

    @media only screen and (max-width: 500px) {
        #carouselContainer {
            margin-top: -30px;
        }
    }
</style>

<main>
	<section id="carouselContainer">
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
			height={'40vh'}
			gap={'20px'}
			width={'250px'}
            speed={'40s'}
		/>

        <section id="contacts">
            <section>
                <p class="contactHeader">Socials</p>
                <section id="socialsList">
                    <ul>
                        <li><a href="https://www.instagram.com/frc_spartiates3544/">Instagram</a></li>
                        <li><a href="https://www.tiktok.com/@frc_spartiates3544">TikTok</a></li>
                        <li><a href="https://www.facebook.com/profile.php?id=100063976962160">Facebook</a></li>
                    </ul>
                    <ul>
                        <li><a href="https://www.youtube.com/@frc_spartiates3544">YouTube</a></li>
                        <li><a href="https://github.com/Spartiates-3544">Github</a></li>
                    </ul>
                </section>
            </section>
            <section>
                <p class="contactHeader">Email</p>
                <a href="mailto:jeunes.3544marketing@gmail.com">jeunes.3544marketing@gmail.com</a>
            </section>
        </section>
	</section>
</main>
