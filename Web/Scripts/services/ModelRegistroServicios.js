var URL_WS = $("#BASE_URL_IASI").val();
URL_WS += "WebService/WSComun.asmx/";
function guardarDatoServicioFac(jsonServicioFac) {
    var respuesta = ""
    $.ajax({
        async: false,
        type: "POST",
        url: URL_WS + "GuardarDatoServicioFac",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: "{'serviciofac':" + JSON.stringify(jsonServicioFac) + "}",
    }).done(function (data) {
        respuesta = JSON.parse(data.d);
    }).fail(function (jqXHR, textStatus, errorThrown) {
        var mensajeError = "<b>Tiempo de sesion expirado.<b> <br> No se pudo conectar con la API, Guardar Datos Visitas ";
        errorMessage(mensajeError, jqXHR, textStatus, errorThrown);
    });
    return respuesta;
}