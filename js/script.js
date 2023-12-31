var nombreSelected;
var nombre = $("#nombre");
var nombreBienvenida = $("#user-name");
var bienvenida = $(".bienvenida-block");
var botonNombre = $("#boton-nombre");
var botonMenu = $("#button-menu-btn-block");
var botonCuenta = $("#btn-cuenta");
var brilloEstrella = 1;
var myModal = new bootstrap.Modal('#estrellaModal', {
    keyboard: false
  })
var modalToggle = document.getElementById('toggleMyModal');

var fechaFinal = new Date("Jan 1, 2024 00:00:00 GMT+0100").getTime();

function habilitarBoton() {
    if ($("#nameList").value !== '0') {
        if (!(botonNombre).is(':visible')) {
            botonNombre.fadeIn();
            botonNombre.prop('disabled', false);
        }
    }
}

function setName() {
    nombreSelected = $("#nameList").val();
    nombre.text(nombreSelected);
    nombreBienvenida.text(nombreSelected.substring(2));
    
    switch ($("#nameList").val()) {
        case "👑 La Abuela Viki":
        case "🙈 Ana":
        case "🙊 Lulu":
        case "🙉 Ascen":
        case "🥫 Tania":
        case "🍳 Nerea":
        case "💅🏼 Katia":
            $("#gender").text('a');
            break;
        case "🍦 Javi":
        case "🔐 Richard":
        case "🚗 Paco":
        case "🏎️ Edu":
        case "🫒 Adrián":
        case "🥋 Aarón":
        case "😎 Cristian":
            $("#gender").text('o');
            break;
    }

    $(".user-id-block").hide(2000);
    $(".user-id-btn-block").hide(2000);
    $(".bienvenida-block").fadeToggle(2000);
    $(".button-menu-btn-block").delay(3000).fadeToggle(1000);
}

function verMenu() {
    if ( botonMenu.text() == "Ocultar menú") {
        botonMenu.text("Ver el menú");
    } else {
        botonMenu.text("Ocultar menú");
    }

    $("#bienvenida-texto-block").slideToggle(2000);
    $(".menu-block").fadeToggle(1000);

    despliegue();
}

function despliegue() {
    if ($('.count-block').is(':visible')) {
        showBtnCuentaAtras();
    }

    setTimeout(function() { $(".bloque1").slideToggle(800); }, 600);
    setTimeout(function() { $(".bloque2").slideToggle(800); }, 1200);
    setTimeout(function() { $(".bloque3").slideToggle(800); }, 1800);
    setTimeout(function() { $(".bloque4").slideToggle(800); }, 2400);
    setTimeout(function() { $(".bloque5").slideToggle(800); }, 3000);
    if ($('.bloque6').is(':visible')) {
        $(".bloque6").slideToggle(); 
    } else {
        setTimeout(function() { $(".bloque6").slideToggle(1000); }, 3600);
    }
}

function showBtnCuentaAtras() {
    if ( botonCuenta.text() == "Ocultar cuenta atrás") {
        botonCuenta.text("Y, ¿cuánto queda?");
    } else {
        botonCuenta.text("Ocultar cuenta atrás");
    }

    $(".count-block").slideToggle(1000);
    $('html, body').animate({scrollTop:0}, 'slow');
}

function brillaEstrella() {
    if (brilloEstrella === 3) {
        myModal.show(modalToggle);
        brilloEstrella = 1;
    } else {
        brilloEstrella++;
    }
}

var cuentaAtras = setInterval(function() {
    var ahora = new Date().getTime();
    var diferencia = fechaFinal - ahora;
    var horas = Math.floor(diferencia / (1000 * 60 * 60));
    var minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById('cuentaAtras').innerText = (horas < 10 ? '0' + horas : horas) + ":" + (minutos < 10 ? '0' + minutos : minutos) + ":" + (segundos < 10 ? '0' + segundos : segundos);

    if (diferencia < 0) {
        clearInterval(cuentaAtras);
        document.getElementById('felicitacion').innerHTML = "🎉🥳🎊🍾<br/>¡Feliz 2024!<br/>🍾🎊🥳🎉";
        document.title = "🎉 ¡Feliz 2024! 🎉";
    }
}, 1000);
