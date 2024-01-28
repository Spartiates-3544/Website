<script>
	import { cubicInOut } from 'svelte/easing';
	import { goto } from '$app/navigation';

	let outerWidth;
	let mobileNavStatus = false;
	let opacity = 0;
	let index = -1;

	function mobileNav() {
		mobileNavStatus = !mobileNavStatus;
	}

	function fadeSlide(node, { delay = 0, duration = 400, easing = cubicInOut }) {
		const style = getComputedStyle(node);
		const opacity = +style.opacity;
		const height = parseFloat(style.height);

		return {
			delay,
			duration,
			easing,
			css: (t) =>
				`overflow: hidden;` +
				`opacity: ${t * opacity + 0.1};` +
				`height: ${t * height}px;` 
		};
	}

	function nav(target) {
		index = 100;
		opacity = 1;
		setTimeout(() => {
			goto(target)
			setTimeout(() => {
				index = -1
				opacity = 0;
			}, 100);
		}, 300);
	}
</script>

<svelte:window bind:outerWidth/>

<nav style="--opacity: {opacity}; --index: {index}">
	{#if outerWidth < 500}
		<div id="burgerMenu">
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<a id="mobileNav" on:click={mobileNav}>
				<svg
					width="25"
					height="25"
					viewBox="0 0 10 10  "
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<line y1="0.5" x2="10" y2="0.5" stroke="white" />
					<line y1="3.5" x2="10" y2="3.5" stroke="white" />
					<line y1="6.5" x2="10" y2="6.5" stroke="white" />
				</svg>
			</a>
			{#if mobileNavStatus}
				<ul id="mobileNavMenu" transition:fadeSlide={{ duration: 300, easing: cubicInOut }}>
					<div id="backArrow">
						<!-- svelte-ignore a11y-no-static-element-interactions -->
						<!-- svelte-ignore a11y-click-events-have-key-events -->
                        <!-- svelte-ignore a11y-missing-attribute -->
						<a on:click={mobileNav}>
							<svg
								width="40"
								height="40"
								viewBox="0 0 26 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M25 9C25.5523 9 26 8.55228 26 8C26 7.44772 25.5523 7 25 7V9ZM0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM25 7L1 7V9L25 9V7Z"
									fill="white"
								/>
							</svg>
						</a>
					</div>

					<li><a href="/" on:click={mobileNav}>Home</a></li>
					<li>
						<a href="https://www.chiefdelphi.com/u/hyute/summary" on:click={mobileNav}>Blog</a>
					</li>
					<li><a href="/Ressources" on:click={mobileNav}>Resources</a></li>
					<li><a href="/Sponsors" on:click={mobileNav}>Sponsors</a></li>
					<li><a href="/Contact" on:click={mobileNav}>Contact Us</a></li>
				</ul>
			{/if}
		</div>
	{:else}
		<div id="desktopNav">
			<div on:click={() => nav('/') }>Home</div>
			<div on:click={() => {window.open('https://www.chiefdelphi.com/u/hyute/summary')} }>Blog</div>
			<div on:click={() => nav('/Ressources') }>Resources</div>
			<div on:click={() => nav('/Sponsors') }>Sponsors</div>
			<div on:click={() => nav('/Contact') }>Contact Us</div>
		</div>
	{/if}
</nav>

<slot />

<style>
	@import url('https://fonts.googleapis.com/css2?family=Caveat&family=EB+Garamond&family=Meow+Script&family=Poppins&display=swap');

	nav {
		display: grid;
		place-items: center;
		padding-top: 0;
		z-index: 99;
	}

	#desktopNav {
		display: flex;
	}

	#desktopNav::after{
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

	#desktopNav div {
		font-family: 'Poppins', sans-serif;
		text-decoration: none;
		font-weight: 500;
		padding: 15px;
		color: white;
		opacity: 20%;
		transition: all 100ms ease-in-out;
        font-size: 100%;
	}

	#desktopNav div:hover {
		opacity: 30%;
		cursor: pointer;
	}

	#burgerMenu {
		width: 100vw;
		display: grid;
		place-content: left;
	}

	#mobileNav {
		padding-left: 30px;
		padding-top: 35px;
		width: 30px;
	}

	#mobileNavMenu {
		background-color: #191D1B;
		position: fixed;
		width: 100vw;
		height: 101vh;
		top: 0;
		padding-top: 30px;
		padding-left: 30px;
		list-style-type: none;
		font-size: 200%;
		z-index: 100;
	}

	#mobileNavMenu li a {
		text-decoration: none;
	}

	#backArrow {
		height: 100px;
	}
</style>
