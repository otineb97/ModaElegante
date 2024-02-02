// Cantidad de imágenes en Carousel
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
                nav: true,
                loop: false
            }
        }
    });
});


// Cambiar imágenes al hacer clic en miniaturas
document.addEventListener('DOMContentLoaded', function () {
    const productThumbnailsContainer = document.getElementById('product-thumbnails');
    const mainProductImage = document.getElementById('main-product-image');

    // Lista de imágenes de muestra
    const imageList = [
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/200',
        'https://via.placeholder.com/100'
    ];

    imageList.forEach((imageUrl, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = imageUrl;
        thumbnail.classList.add('thumbnail', 'mb-2');
        thumbnail.addEventListener('click', () => {
            mainProductImage.src = imageUrl;
        });
        productThumbnailsContainer.appendChild(thumbnail);
    });
});
