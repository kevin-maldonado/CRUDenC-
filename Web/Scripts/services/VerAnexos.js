var URL_WS = $("#BASE_URL_IASI").val();
URL_WS += "WebService/WSComun.asmx/";

$(document).ready(function () {
    $('#BtnDescargarAnexo').on('click', function (e) {
        $('#myModalData').modal('show');
        var ruta = obtenerEnlaceAnexoComercial($("#HdFacId").val());
        var data = '<div class="embed-responsive embed-responsive-16by9">';
        data += '<iframe class="embed-responsive-item" src="' + ruta + '" allowfullscreen></iframe>';
        data += '</div>';
        $("#contenidoData").html(data);
    });

    $('#BtnVerEquipoAnexo').on('click', function (e) {
        $('#myModalData').modal('show');
        var ruta = obtenerEnlaceAnexoEquipos($("#HdFacId").val());
        var data = '<div class="embed-responsive embed-responsive-16by9">';
        data += '<iframe class="embed-responsive-item" src="' + ruta + '" allowfullscreen></iframe>';
        data += '</div>';
        $("#contenidoData").html(data);
    });
});

function obtenerEnlaceAnexoComercial(id_fac) {
    var codigo = $('#HdCodigoCaso').val();
    $("#tituloModalData").text("Ver Anexo Comercial " + codigo);
    var user = $('#HdUsuarioId').val();
    $.ajax({
        url: URL_WS + "EnlaceAnexoComercial",
        type: 'POST',
        async: false,
        contentType: 'application/json',
        dataType: 'json',
        data: "{'id_fac': " + id_fac + ", 'user_id':" + user + "}",
    }).done(function (data) {
        valor = JSON.parse(data.d);
    }).fail(function (jqXHR, textStatus, errorThrown) {
        var mensajeError = "<b>Tiempo de sesion expirado.<b> <br> No se puede obtener enlace anexo comercial WS: ";
        errorMessage(mensajeError, jqXHR, textStatus, errorThrown);
    });
    return valor;
}

function obtenerEnlaceAnexoEquipos(id_fac) {
    var codigo = $('#HdCodigoCaso').val();
    $("#tituloModalData").text("Ver Anexo Equipamiento " + codigo);
    var user = $('#HdUsuarioId').val();
    $.ajax({
        url: URL_WS + "EnlaceAnexoEquipos",
        type: 'POST',
        async: false,
        contentType: 'application/json',
        dataType: 'json',
        data: "{'id_fac': " + id_fac + ", 'user_id':" + user + "}",
    }).done(function (data) {
        valor = JSON.parse(data.d);
    }).fail(function (jqXHR, textStatus, errorThrown) {
        var mensajeError = "<b>Tiempo de sesion expirado.<b> <br> No se puede obtener enlace anexo equipamiento WS: ";
        errorMessage(mensajeError, jqXHR, textStatus, errorThrown);
    });
    return valor;
}