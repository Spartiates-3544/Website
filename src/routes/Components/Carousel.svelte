<script>
    export let components, height, gap, width, borderRadius, direction;
</script>

<style>
    @keyframes scrolling {
        from {transform: translateX(0);}
        to {transform: translateX(calc(-1 * ((var(--width) * var(--componentsLength)) + (var(--componentsLength) * var(--gap)))))}
    }

    @keyframes verticalScroll {
        from {transform: translateY(0);}
        to {transform: translateY(calc(-1 * ((var(--height) * var(--componentsLength)) + (var(--componentsLength) * var(--gap)))))}
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
        border-radius: var(--borderRadius);
    }

    #verticalImgContainer{
        display: grid;
        grid-template-rows: repeat(calc(2 * var(--componentsLength)), var(--height));
        row-gap: var(--gap);
        animation-name: verticalScroll;
        animation-duration: 40s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }
</style>

<div id="container" style="--componentsLength: {components.length}; --height: {height}; --gap: {gap}; --width: {width}; --borderRadius: {borderRadius};">
    {#if direction === 'vertical'}
        <div id="verticalImgContainer">
            {#each components as component}
                <div style="background-image: url({component});"></div>
            {/each}

            {#each components as component}
                <div style="background-image: url({component});"></div>
            {/each}
        </div>
    {:else}
        <div class="imgContainer">
            {#each components as component}
                <div style="background-image: url({component});"></div>
            {/each}

            {#each components as component}
                <div style="background-image: url({component});"></div>
            {/each}
        </div>
    {/if}
    
</div>