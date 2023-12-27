
export default function inViewport(e) {
    const root = null;
    const rootMargin = `1000px 0px -150px 0px` //defines intersection zone(?)
    const options = { root, rootMargin}

    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) { //detects intersections
            e.classList.add('textAnimation')
            e.classList.remove('invisible')
        } else {
            e.classList.add('invisible')
            e.classList.remove('textAnimation')
        }
    }, options);

    observer.observe(e)

    return{ //cleanup function
        destroy() {
            if(observer) observer.disconnect();
        }
    }
}