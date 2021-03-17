var URL_WS = $("#BASE_URL_IASI").val();
URL_WS += "WebService/WSComun.asmx/";

function guardarDatosFechas(jsonCausalidad) {
    var respuesta = ""
    $.ajax({
        async: false,
        type: "POST",
        url: URL_WS + "GuardarCausalidadOT",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: "{'causa':" + JSON.stringify(jsonCausalidad) + "}",
    }).done(function (data) {
        respuesta = JSON.parse(data.d);
    }).fail(function (jqXHR, textStatus, errorThrown) {
        var mensajeError = "<b>Tiempo de sesion expirado.<b> <br> No se pudo conectar con la API, Guardar Datos Fechas ";
        errorMessage(mensajeError, jqXHR, textStatus, errorThrown);
    });
    return respuesta;
}