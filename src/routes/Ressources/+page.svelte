<style>
    @keyframes reveal {
		0%{
			height: 100%;
		}
		100%{
			height: 0%;
		}
	}

    main{
        height: calc(100vh - 60px);
        width: 100vw;
    }

    .optionContainer{
        height: calc(var(--sizeFactor) * 400px);
        width: calc(var(--sizeFactor) * 290px);
        background-color: aliceblue;
        position: relative;
        cursor: pointer;
    }

    #gallery{
        background-image: url('https://cdn.discordapp.com/attachments/1051259930914594879/1066200923661156483/PXL_20230120_223220900.jpg?ex=6573e1fd&is=65616cfd&hm=5061634083cad109c4eeedbdbfccc0b78fbca8411e419e8fc4a850b52bf1e3b8&');
    }

    #documents{
        background-image: url('https://i.pinimg.com/736x/36/ee/19/36ee197db6bad43a83024320ee3da5d0.jpg');
    }

    .imgContainer{
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        position: absolute;
        filter: drop-shadow(#ffffff65 0 0 25px);
        transition: 400ms;
        transition-timing-function: ease-in-out;
    }

    .text{
        position: absolute;
        top: 37%;
        font-size: calc(var(--sizeFactor) * 500%);
        width: 200%;
        left: -50%;
        text-align: center;
        mix-blend-mode: exclusion;
        color: #fff;
        transition: 250ms;
        transition-timing-function: ease-in-out;
    }

    .optionContainer:hover .imgContainer{
        transform: scale(1.03, 1.03);
        filter: drop-shadow(#ffffff56 0 0 20px);
    }

    .optionContainer:hover .text{
        color: #FFD25E;
    }

    #optionsContainer{
        display: grid;
        grid-template-columns: repeat(2, 15vw);
        place-content: center;
        column-gap: 20vw;
        padding-top: var(--centeringMargin);
    }

    .textAnimation{
		position: relative;
	}

	.textAnimation::after{
		content: ' ';
		bottom: 0;
		left: 0;
		background: #191D1B;
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: 1;
		animation-name: reveal;
		animation-duration: 2300ms;
		animation-fill-mode: forwards;
	}

    #optionsContainer::after{
		content: ' ';
		background-color: #191D1B;
		width: 100%;
		height: 100%;
		position: fixed;
		left: 0;
		top: 0;
		z-index: var(--index);
		opacity: var(--opacity);
		transition: 300ms;
	}

    @media only screen and (max-width: 500px) {
        main{
            height: 90vh;
        }

        #optionsContainer{
            grid-template-columns: 0;
            row-gap: 5vh;
            padding-top: calc(var(--sizeFactor) * 10vh);
            margin-left: calc(var(--sizeFactor) * -290px);
        }

        .textAnimation::after{
		    animation-duration: 0ms;
	    }
    }
</style>

<script>
    import { goto } from '$app/navigation';

    let documentLink = 'https://weebified.github.io/'
    let outerWidth;
    let innerHeight = 0;
    let sizeFactor = 1;
    let index = -1;
    let opacity = 0;
    $: centeringMargin = Math.max(innerHeight / 2 - 240, 50);

    $: if (1200 < outerWidth && outerWidth < 1500) {
        sizeFactor = 0.8
    } else if (950 < outerWidth && outerWidth < 1200) {
        sizeFactor = 0.65
    } else if (730 < outerWidth && outerWidth < 951) {
        sizeFactor = 0.5
    } else if (500 < outerWidth && outerWidth < 731){
        sizeFactor = 0.3
    } else if (outerWidth < 500) {
        sizeFactor = 0.6
    } else {
        sizeFactor = 1;
    }

    function nav() {
		index = 100;
		opacity = 1;
		setTimeout(() => {
			goto("./Ressources/Photos")
			setTimeout(() => {
				index = -1
				opacity = 0;
			}, 100);
		}, 1000);
	}
</script>

<svelte:window bind:outerWidth bind:innerHeight/>
<main style="--sizeFactor: {sizeFactor}; --centeringMargin: {centeringMargin}px; --opacity: {opacity}; --index: {index}" class="textAnimation">
    <section id="optionsContainer">
        <div class="optionContainer" on:click={nav}>
            <div id="gallery" class="imgContainer"></div>
            <p class="text">Photo gallery</p>
        </div>
        <div class="optionContainer" on:click={() => window.open(documentLink)}>
            <div id="documents" class="imgContainer"></div>
            <p class="text">Documents</p>
        </div>
    </section>
</main>