import Swal from 'sweetalert2'

export function dispararSweetBasico(titulo, text, icon, textoBoton) {
    Swal.fire({
        title: titulo,
        text: text,
        icon: icon,
        confirmButtonText: textoBoton,
        imageUrl: "https://radioshark.netlify.app/images/RadioSharkLogo.png",
        imageWidth: 100,
        imageHeight: 100,
        imageAlt: "Custom image"
      })
}