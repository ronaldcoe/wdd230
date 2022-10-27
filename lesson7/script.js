const images = document.querySelectorAll("[data-src]");

function preloadImage(img) {
    const src = img.getAttribute("data-src");
 

    img.src = src

}


const imageOptions = {
    threshold: 1,
    rootMargin: "0px 0px 300px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imageOptions)


images.forEach(image => {
    imgObserver.observe(image);
})