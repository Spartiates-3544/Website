<style>
    @keyframes rolling {
        from {transform: translateX(0);}
        to {transform: translateX(-100%);}
    }

    :root{
        --oppColor: #585D5D;
    }

    #rollingText{  
        overflow: hidden;
        height: 250px;
        width: 100%;
        font-size: 80px;
        font-weight: 600;
        display: grid;
        grid-template-columns: repeat(5, 660px);
        grid-template-rows: 0;
    }

    #rollingText p {
        animation-name: rolling;
        animation-iteration-count: infinite;
        animation-duration: 30s;
        animation-timing-function: linear;
        color: #FFD25E;
    }

    #rollingText p i {
        color: #FFD25E;
    }

    #footerBottom{
        padding-left: 12vw;
        padding-right: 12vw;
        padding-bottom: 60px;
        padding-top: 40px;
    }

    #nav {
        padding-right: 20px;
    }

    #nav a{
        text-decoration: none;
        padding-right: 40px;
        transition: 100ms;
        transition-timing-function: ease-in-out;
    }

    #nav a:hover, #backToTop div:hover{
        color: #FFD25E;
    }

    #navContainer{
        display: grid;
        grid-template-columns: auto auto;
    }

    #backToTop{
        display: grid;
        justify-content: end;
        background-color: #ffffff00;
        border-style: none;
        font-size: inherit;
        cursor: pointer;
    }

    #backToTop div{
        transition: 100ms;
    }

    #bottomNotes{
        display: grid;
        grid-template-columns: auto auto;
        font-weight: 600;
    }

    #bottomNotes p{
        color: var(--oppColor);
    }

    #copyright{
        display: grid;
        justify-content: end;
        color: var(--oppColor);
        padding-left: 20px;
    }

    #credits{
        text-decoration: none;
        position: relative;
        color: var(--oppColor);
    }

    #credits::after{
        position: absolute;
        content: "weebified";
        background-color: #FFD25E;
        color: #191D1B;
        bottom: 0;
        left: 0;
        width: 0;
        height: 100%;
        opacity: 0;
        transition: 100ms;
    }

    #credits:hover::after{
        width: 140%;
        opacity: 1;
    }

    @media only screen and (max-width: 500px) {
        #bottomNotes{
            grid-template-columns: 100%;
            font-size: 90%;
        }

        #copyright{
            display: block;
        }

        #footerBottom{
            padding-bottom: 40px;
            padding-top: 0;
        }

        #navContainer{
            grid-template-columns: 100%;
            align-content: space-between;
            height: 57vh;
            padding-top: 23vh;
        }

        #nav{
            display: grid;
            grid-template-columns: 100%;
        }

        #nav a, #backToTop{
            font-size: 200%;
        }

        #backToTop{
            justify-content: start;
            padding-bottom: 20px;
        }
    }
</style>

<script>
    let svgColor = '#fff';
    let outerWidth;
    let arrowHeight = 20;

    function goToTop() {
        window.scrollTo({top: 0, behavior: "smooth"})
    }

    function arrowColor() {
        if(svgColor === '#fff'){
            svgColor = '#FFD25E'
        } else {
            svgColor = '#fff'
        }
    }

    $: if (outerWidth < 500) {
        arrowHeight = 30;
    } else {
        arrowHeight = 20;
    }
</script>

<svelte:window bind:outerWidth/>

{#if outerWidth > 500}
    <div id="rollingText">
        <p>The <i>Spartiates</i></p>
        <p>The <i>Spartiates</i></p>
        <p>The <i>Spartiates</i></p>
        <p>The <i>Spartiates</i></p>
        <p>The <i>Spartiates</i></p>
    </div>
{/if}


<section id="footerBottom">
    <section id="navContainer">
        <section id="nav">
    	    <a href="https://www.chiefdelphi.com/u/hyute/summary">Blog</a>
    	    <a href="/Ressources">Ressources</a>
    	    <a href="/Sponsors">Sponsors</a>
    	    <a href="/Contact">Contact Us</a>
        </section>
        <button id="backToTop" on:click={goToTop}>
            <!-- svelte-ignore a11y-no-static-element-interactions-->
            <div on:mouseenter={arrowColor} on:mouseleave={arrowColor}>
                Back to top

                <svg width="{arrowHeight}" height="{arrowHeight}" viewBox="0 -4 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path style="transition: 100ms;" d="M3.5 9C3.5 9.27614 3.72386 9.5 4 9.5C4.27614 9.5 4.5 9.27614 4.5 9H3.5ZM4.35355 0.646446C4.15829 0.451184 3.84171 0.451184 3.64645 0.646446L0.464466 3.82843C0.269204 4.02369 0.269204 4.34027 0.464466 4.53553C0.659728 4.7308 0.976311 4.7308 1.17157 4.53553L4 1.70711L6.82843 4.53553C7.02369 4.7308 7.34027 4.7308 7.53553 4.53553C7.7308 4.34027 7.7308 4.02369 7.53553 3.82843L4.35355 0.646446ZM4.5 9V1H3.5L3.5 9H4.5Z" fill='{svgColor}'/>
                </svg>
            </div>
        </button>
    </section>

    <section id="bottomNotes">
        <p>Made with love by&nbsp<a href="https://weebified.github.io" id="credits">Nicky Ly</a></p>
        <p id="copyright">Spartiates 2023 © Copyright</p>
    </section>

</section>
