var URL_WS = $("#BASE_URL_IASI").val();
URL_WS += "WebService/WSComun.asmx/";

function actualizarFechaCompromiso(FacId, fecha) {
    var respuesta = "";
    $.ajax({
        async: false,
        type: "POST",
        url: URL_WS + "ActualizarFechaCompromiso",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: "{'idFac': '" + FacId + "','fecha': '" + fecha + "'}",
    }).done(function (data) {
        respuesta = JSON.parse(data.d);
    }).fail(function (jqXHR, textStatus, errorThrown) {
        var mensajeError = "<b>Tiempo de sesion expirado.<b> <br> No se pudo conectar con la API, Fecha Compromiso";
        errorMessage(mensajeError, jqXHR, textStatus, errorThrown);
    });
    return respuesta;
}

function cerrarCaso(FacId, tipor, obs) {
    var respuesta = "";
    $.ajax({
        async: false,
        type: "POST",
        url: URL_WS + "CerrarProyecto",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: "{'idFac': '" + FacId + "','tipor': '" + tipor + "','obs': '" + obs + "'}",
    }).done(function (data) {
        respuesta = JSON.parse(data.d);
    }).fail(function (jqXHR, textStatus, errorThrown) {
        var mensajeError = "<b>Tiempo de sesion expirado.<b> <br> No se pudo conectar con la API, Cerrar Proyecto ";
        errorMessage(mensajeError, jqXHR, textStatus, errorThrown);
    });
    return respuesta;
}