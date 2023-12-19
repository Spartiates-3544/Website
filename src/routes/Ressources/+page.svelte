<style>
    main{
        height: calc(100vh - 35px);
        width: 100vw;
    }

    .optionContainer{
        height: 400px;
        width: 290px;
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
        font-size: 500%;
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
        padding-top: calc(50vh - 250px);
    }
</style>

<script>
    let documentLink = 'https://weebified.github.io/'
</script>

<main>
    <section id="optionsContainer">
        <a class="optionContainer" href="./Ressources/Photos">
            <div id="gallery" class="imgContainer"></div>
            <p class="text">Photo gallery</p>
        </a>
        <a class="optionContainer" href="{documentLink}">
            <div id="documents" class="imgContainer"></div>
            <p class="text">Documents</p>
        </a>
    </section>
</main>