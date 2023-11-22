<style>
    @keyframes rolling {
        from {
            transform: translateX(0);
        }

        to {transform: translateX(-100%);}
    }

    body{
        margin-top: 100px;
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
        animation-duration: 20s;
        animation-timing-function: linear;
        color: #FFCC01;
    }

    #rollingText p i {
        color: #FFCC01;
    }

    #footerBottom{
        padding-left: 12vw;
        padding-right: 12vw;
        padding-bottom: 60px;
        padding-top: 40px;
    }

    #nav{

    }

    #nav a{
        text-decoration: none;
        padding-right: 40px;
    }

    #navContainer{
        display: grid;
        grid-template-columns: auto auto;
    }

    #backToTop{
        display: grid;
        justify-content: end;
    }

    #bottomNotes{
        display: grid;
        grid-template-columns: auto auto;
        opacity: 30%;
    }

    #copyright{
        display: grid;
        justify-content: end;
    }
</style>

<div id="rollingText">
    <p>The <i>Spartiates</i></p>
    <p>The <i>Spartiates</i></p>
    <p>The <i>Spartiates</i></p>
    <p>The <i>Spartiates</i></p>
    <p>The <i>Spartiates</i></p>
</div>

<section id="footerBottom">
    <section id="navContainer">
        <section id="nav">
    	    <a href="https://www.chiefdelphi.com/u/hyute/summary">Blog</a>
    	    <a href="/Ressources">Ressources</a>
    	    <a href="/Sponsors">Sponsors</a>
    	    <a href="/Contact">Contact Us</a>
        </section>
        <div id="backToTop">
            <div>
                Back to top

                <svg width="20" height="20" viewBox="0 -4 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.5 9C3.5 9.27614 3.72386 9.5 4 9.5C4.27614 9.5 4.5 9.27614 4.5 9H3.5ZM4.35355 0.646446C4.15829 0.451184 3.84171 0.451184 3.64645 0.646446L0.464466 3.82843C0.269204 4.02369 0.269204 4.34027 0.464466 4.53553C0.659728 4.7308 0.976311 4.7308 1.17157 4.53553L4 1.70711L6.82843 4.53553C7.02369 4.7308 7.34027 4.7308 7.53553 4.53553C7.7308 4.34027 7.7308 4.02369 7.53553 3.82843L4.35355 0.646446ZM4.5 9V1H3.5L3.5 9H4.5Z" fill="white"/>
                </svg>
            </div>
        </div>
    </section>

    <section id="bottomNotes">
        <p>Made with love by Nicky Ly</p>
        <p id="copyright">Spartiates 2023 © Copyright</p>
    </section>

</section>
