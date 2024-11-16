function initCarousel(carouselClass, dotClass, containerId) {
    let slideIndex = 1;
    const container = document.getElementById(containerId);
    const slides = container.getElementsByClassName(carouselClass);
    const dots = container.getElementsByClassName(dotClass);

    function showSlides(n) {
        if (n > slides.length) slideIndex = 1;
        if (n < 1) slideIndex = slides.length;

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[slideIndex - 1].style.display = "block";

        if (dots.length > 0 && dots[slideIndex - 1]) {
            dots[slideIndex - 1].className += " active";
        }
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    const prevButton = container.querySelector(".prev");
    const nextButton = container.querySelector(".next");

    if (prevButton) {
        prevButton.onclick = () => plusSlides(-1);
    }

    if (nextButton) {
        nextButton.onclick = () => plusSlides(1);
    }

    Array.from(dots).forEach((dot, index) => {
        dot.onclick = () => currentSlide(index + 1);
    });

    showSlides(slideIndex);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            plusSlides(-1);
        } else if (e.key === 'ArrowRight') {
            plusSlides(1);
        }
    });

    return { plusSlides, currentSlide };
}

document.addEventListener('DOMContentLoaded', () => {
    initCarousel("mySlides", "dot", "carousel1");
    initCarousel("mySlides1", "dot1", "carousel2");
    initCarousel("mySlides2", "dot2", "carousel3");
});