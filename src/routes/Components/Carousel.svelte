<script>
    export let components, height, gap, width;;
</script>

<style>
    @keyframes scrolling {
        from {transform: translateX(0);}
        to {transform: translateX(calc(-1 * ((var(--width) * var(--componentsLength)) + (var(--componentsLength) * var(--gap)))))}
    }

    #container{
        width: 100%;
        overflow: hidden;
    }

    .imgContainer{
        display: grid;
        grid-template-columns: repeat(calc(2 * var(--componentsLength)), var(--width));
        grid-template-rows: 0;
        column-gap: var(--gap);
        height: var(--height);
        animation-name: scrolling;
        animation-duration: 40s;
        animation-timing-function: linear;
        animation-iteration-count: infinite; 
    }

    #container div div{
        height: var(--height);
        background-position: center;
        background-size: cover;
    }
</style>

<div id="container" style="--componentsLength: {components.length}; --height: {height}; --gap: {gap}; --width: {width};">
    <div class="imgContainer">
        {#each components as component}
            <div style="background-image: url({component});"></div>
        {/each}

        {#each components as component}
        <div style="background-image: url({component});"></div>
        {/each}
    </div>
</div>