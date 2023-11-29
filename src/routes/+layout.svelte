<nav>
	<div>
		<a href="/">Home</a>
		<a href="https://www.chiefdelphi.com/u/hyute/summary">Blog</a>
		<a href="/Ressources">Resources</a>
		<a href="/Sponsors">Sponsors</a>
		<a href="/Contact">Contact Us</a>
	</div>
</nav>

<slot />

<style>
@import url('https://fonts.googleapis.com/css2?family=Caveat&family=EB+Garamond&family=Meow+Script&family=Poppins&display=swap');

    nav {
        display: grid;
        place-items: center;
        padding-top: 10px;
        z-index: 99;
	}

    a {
        font-family: 'Poppins', sans-serif;
        text-decoration: none;
        font-weight: 500;
        padding: 15px;
        color: white;
        opacity: 20%;
        transition: all 100ms ease-in-out;
    }

    a:hover {
        opacity: 30%;
        cursor: pointer;
    }
</style>
