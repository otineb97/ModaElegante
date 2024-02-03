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

// Comentarios de usuarios
document.addEventListener('DOMContentLoaded', function () {
    const reseñasLista = document.getElementById('reseñas-lista');
    const agregarReseñaBtn = document.getElementById('agregarReseña');
    const modalAgregarReseña = new bootstrap.Modal(document.getElementById('modalAgregarReseña'));
    const formularioReseña = document.getElementById('formularioReseña');

    agregarReseñaBtn.addEventListener('click', function () {
        modalAgregarReseña.show();
    });

    formularioReseña.addEventListener('submit', function (event) {
        event.preventDefault();

        const nombreCliente = document.getElementById('nombreCliente').value;
        const calificacion = document.getElementById('calificacion').value;
        const comentario = document.getElementById('comentario').value;
        const fechaActual = new Date();

        // Formatear la fecha
        const fechaFormateada = fechaActual.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });

        // Crear un nuevo elemento de reseña
        const nuevaReseña = document.createElement('div');
        nuevaReseña.classList.add('card', 'mt-4');

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const nombreClienteElement = document.createElement('h5');
        nombreClienteElement.classList.add('card-title');
        nombreClienteElement.textContent = `${nombreCliente} - `;

        const calificacionElement = document.createElement('span');
        calificacionElement.classList.add('stars');
        calificacionElement.innerHTML = obtenerEstrellas(calificacion);

        const fechaElement = document.createElement('p');
        fechaElement.classList.add('card-text');
        fechaElement.textContent = `Calificado el ${fechaFormateada}`;

        const comentarioElement = document.createElement('p');
        comentarioElement.classList.add('card-text');
        comentarioElement.textContent = comentario;

        const eliminarIcono = document.createElement('i');
        eliminarIcono.classList.add('fas', 'fa-trash-alt', 'eliminar-icono');
        eliminarIcono.addEventListener('click', function () {
            reseñasLista.removeChild(nuevaReseña);
        });

        nombreClienteElement.appendChild(calificacionElement);
        cardBody.appendChild(nombreClienteElement);
        cardBody.appendChild(fechaElement);
        cardBody.appendChild(comentarioElement);
        cardBody.appendChild(eliminarIcono);
        nuevaReseña.appendChild(cardBody);

        // Agregar la nueva reseña a la lista
        reseñasLista.appendChild(nuevaReseña);

        // Cerrar el modal
        modalAgregarReseña.hide();
    });

    function obtenerEstrellas(calificacion) {
        const estrellas = '★'.repeat(calificacion) + '☆'.repeat(5 - calificacion);
        return estrellas;
    }
});
