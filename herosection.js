document.addEventListener( 'DOMContentLoaded', function () {
    const highlightImage = document.querySelectorAll(resized-image-1);
    const floatImage = document.querySelectorAll(main);

    highlightImage.forEach(image => {
        image.addEventListener(mouseenter, () => {
            image.style.filter = brightness(120); //highlighting image
        });
        image.addEventListener(mouseleave, () => {
            image.style.filter = none; //Reset when mouse goes
        });
    });

    floatImage.forEach(image => {
        image.addEventListener(mouseenter, () => {
            image.style.transform = translateY(-10);
        });
        image.addEventListener(mouseleave, () => {
            image.style.transform = none;
        });
    });
});