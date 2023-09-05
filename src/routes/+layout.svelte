<nav>
	<div>
		<a href="/">Home</a>
		<a href="https://www.chiefdelphi.com/u/hyute/summary">Blog</a>
		<a href="/Ressources">Ressources</a>
		<a href="/Sponsors">Sponsors</a>
		<a href="/Contact">Contact Us</a>
	</div>
</nav>

<slot />

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

	nav {
        display: grid;
        place-items: center;
	}

    a {
        font-family: 'Poppins', sans-serif;
        text-decoration: none;
        font-weight: 500;
        padding: 15px;
        color: white;
        opacity: 17%;
        transition: all 100ms ease-in-out;
    }

    a:hover {
        opacity: 30%;
        cursor: pointer;
    }
</style>
