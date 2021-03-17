var URL_WS = $("#BASE_URL_IASI").val();
URL_WS += "WebService/WSComun.asmx/";

function guardarDatosVisitas(jsonVisita) {
    var respuesta = ""
    $.ajax({
        async: false,
        type: "POST",
        url: URL_WS + "GuardarDatosVisitas",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: "{'provFac':" + JSON.stringify(jsonVisita) + "}",
    }).done(function (data) {
        respuesta = JSON.parse(data.d);
    }).fail(function (jqXHR, textStatus, errorThrown) {
        var mensajeError = "<b>Tiempo de sesion expirado.<b> <br> No se pudo conectar con la API, Guardar Datos Visitas ";
        errorMessage(mensajeError, jqXHR, textStatus, errorThrown);
    });
    return respuesta;
}

function guardarDatosEncuesta(jsonEncuesta) {
    var respuesta = ""
    $.ajax({
        async: false,
        type: "POST",
        url: URL_WS + "GuardarDatosEncuesta",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: "{'encu':" + JSON.stringify(jsonEncuesta) + "}",
    }).done(function (data) {
        respuesta = JSON.parse(data.d);
    }).fail(function (jqXHR, textStatus, errorThrown) {
        var mensajeError = "<b>Tiempo de sesion expirado.<b> <br> No se pudo conectar con la API, Guardar Datos Encuesta ";
        errorMessage(mensajeError, jqXHR, textStatus, errorThrown);
    });
    return respuesta;
}

function listarVisitas(idFac) {
    $("#tbIdBodVisitas").empty();

    $.ajax({
        async: false,
        type: "POST",
        url: URL_WS + "ObtenerVisitas",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: "{'idFac':" + idFac + "}",
    }).done(function (data) {
        var tabla = "";
        $.each(JSON.parse(data.d), function (key, value) {
            tabla += '<tr class="small">' +
                '<td>' + value.TipoDetalle + '</td>' +
                '<td>' + value.Fecha + '</td>' +
                '<td>' + value.Observacion + '</td>' +
                '</tr>';
        });
        $("#dt_visitas > tbody").append(tabla);
    }).fail(function (jqXHR, textStatus, errorThrown) {
        var mensajeError = "<b>Tiempo de sesion expirado.<b> <br> No se pudo conectar con la API, Listar Visitas";
        errorMessage(mensajeError, jqXHR, textStatus, errorThrown);
    });
}