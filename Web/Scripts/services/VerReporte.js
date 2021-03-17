var URL_WS = $("#BASE_URL_IASI").val();
URL_WS += "WebService/WSComun.asmx/";

$(document).ready(function () {
    $('#VerOT').on('click', function (e) {
        $('#myModalData').modal('show');
        var ruta = obtenerEnlaceOT($("#HdFacId").val());//pendiente pasar id,parametros para reporte - posteriormente la ruta puede ser dinamica
        var data = '<div class="embed-responsive embed-responsive-16by9">';
        data += '<iframe class="embed-responsive-item" src="' + ruta + '" allowfullscreen></iframe>';
        data += '</div>';
        $("#contenidoData").html(data);
    });

    $('#VerHisPermisos').on('click', function (e) {
        var DetaPerId = $('#HdPermisoDetaId').val();
        $('#myModalData').modal('show');
        cargarHisPermisos(DetaPerId);
    });
});

function VerPermisos(IdPermiso) {
    $('#myModalData').modal('show');
    cargaPermiso(IdPermiso);
}

function obtenerEnlaceOT(ot_id) {
    var codigo = $('#HdCodigoCaso').val();
    $("#tituloModalData").text("Ver OT " + codigo);
    var user = $('#HdUsuarioId').val();
    $.ajax({
        url: URL_WS + "EnlaceOrdenTrabajo",
        type: 'POST',
        async: false,
        contentType: 'application/json',
        dataType: 'json',
        data: "{'ot_id': " + ot_id + ", 'user_id':" + user + "}",
    }).done(function (data) {
        valor = JSON.parse(data.d);
    }).fail(function (jqXHR, textStatus, errorThrown) {
        var mensajeError = "<b>Tiempo de sesion expirado.<b> <br> No se puede obtener enlace orden de trabajo WS: ";
        errorMessage(mensajeError, jqXHR, textStatus, errorThrown);
    });
    return valor;
}

