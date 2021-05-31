$(function () {
    $('.btn').click(function () {
        let validarNombre = $("#nombre").val();
        let validarPass = $("#password").val();

        if (validarNombre == "" || validarPass == "") {
            $(".sinregistro").fadeIn();
            
        } else {
            $('.sinregistro').fadeIn();
            $('.sinregistro').html(`¿Como estas ${validarNombre}? 
            <br> tu contraseña es ${validarPass}`);
        
        }
    })
});


// document.querySelector('.form-box').addEventListener('submit', guardarDatos);

// function guardarDatos(e) {
//     //let nombre = document.querySelector('#nombre').value;
//     let nombre = $('#nombre').val();
//     let pass = $('#password').val();

//     const datos = {
//         nombre,
//         pass
//     };
//     if (localStorage.getItem('ingreso') === null) {
//         let ingreso = [];
//         ingreso.push(datos);
//         localStorage.setItem('ingreso', JSON.stringify(ingreso));
//     } else {
//         let ingreso = JSON.parse(localStorage.getItem('ingreso'));
//         ingreso.push(datos);
//         localStorage.setItem('ingreso', JSON.stringify(ingreso));
//     }

//     obtenerDatos();
//     document.querySelector('.form-box').reset();
//     e.preventDefault();
// }

// function obtenerDatos() {
//     let ingreso = JSON.parse(localStorage.getItem('ingreso'));
//     let mostrarIngreso = document.querySelector('#contenedor');

//     mostrarIngreso.innerHTML = ``;

//     for (let i = 0; i < ingreso.length; i++) {
//         let nombre = ingreso[i].nombre;
//         let pass = ingreso[i].pass; 

//         mostrarIngreso.innerHTML = `<p>¿Como estas ${nombre}?</p> 
//         <p>Su contraseña es ${pass}</p>`;

//         mostrarIngreso.classList.add('sinregistro');
//     }
// }



