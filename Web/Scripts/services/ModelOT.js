var URL_WS = $("#BASE_URL_IASI").val();
URL_WS += "WebService/WSComun.asmx/";

/////////////////////DATOS OT////////////////////////
function guardarDatosOT(jsonOT) {
    var respuesta = ""
    $.ajax({
        async: false,
        type: "POST",
        url: URL_WS + "GuardarOrdenTrabajo",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: "{'OT':" + JSON.stringify(jsonOT) + "}",
    }).done(function (data) {
        respuesta = JSON.parse(data.d);
    }).fail(function (jqXHR, textStatus, errorThrown) {
        var mensajeError = "<b>Tiempo de sesion expirado.<b> <br> No se pudo conectar con la API, Guardar Datos OT ";
        errorMessage(mensajeError, jqXHR, textStatus, errorThrown);
    });
    return respuesta;
}

///////////////////DATOS EQUIPAMIENTO////////////////////////
function cargaDatosEquipa(EquipaId) {
    var respuesta = ""
    $.ajax({
        async: false,
        type: "POST",
        url: URL_WS + "ObtenerEquipamiento",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: "{'EquipaId':" + EquipaId + "}",
    }).done(function (data) {
        respuesta = JSON.parse(data.d);
    }).fail(function (jqXHR, textStatus, errorThrown) {
        var mensajeError = "<b>Tiempo de sesion expirado.<b> <br> No se pudo conectar con la API, Obtener Equipamiento";
        errorMessage(mensajeError, jqXHR, textStatus, errorThrown);
    });
    return respuesta;
}

function guardarDatosEquipa(jsonEquipamiento) {
    var respuesta = ""
    $.ajax({
        async: false,
        type: "POST",
        url: URL_WS + "GrabarEquipamientoOT",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: "{'Equi':" + JSON.stringify(jsonEquipamiento) + "}",
    }).done(function (data) {
        respuesta = JSON.parse(data.d);
    }).fail(function (jqXHR, textStatus, errorThrown) {
        var mensajeError = "<b>Tiempo de sesion expirado.<b> <br> No se pudo conectar con la API, Guardar Datos Equipamiento";
        errorMessage(mensajeError, jqXHR, textStatus, errorThrown);
    });
    return respuesta;
}

function listarEquipamiento(idFac) {
    $("#tbIdBodEquipamiento").empty();

    $.ajax({
        async: false,
        type: "POST",
        url: URL_WS + "ObtenerEquipamientos",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: "{'idFac':" + idFac + "}",
    }).done(function (data) {
        var tabla = "";
        $.each(JSON.parse(data.d), function (key, value) {
            tabla += '<tr class="small">' +
                '<td>' +
                '<span rel="verSolicitud" data-id="' + value.IdEquipamiento + '"><i class="fas fa-pencil-alt fa-sm"></i>&nbspEditar</span>' +
                '</td>' +
                '<td>' + value.DescripcionEqui + '</td>' +
                '<td>' + value.NumeroSerie + '</td>' +
                '<td>' + value.ModeloEqui + '</td>' +
                '<td>' + value.RentaEqui + '</td>' +
                '<td>' + value.EstadoEqui + '</td>' +
                '</tr>';
        });
        $("#dt_equipamiento > tbody").append(tabla);
    }).fail(function (jqXHR, textStatus, errorThrown) {
        var mensajeError = "<b>Tiempo de sesion expirado.<b> <br> No se pudo conectar con la API, Listar Equipamientos";
        errorMessage(mensajeError, jqXHR, textStatus, errorThrown);
    });
}

///////////////////DATOS CONTACTO////////////////////////
function guadarContactoInfo(jsonContacto) {
    var respuesta = ""
    $.ajax({
        async: false,
        type: "POST",
        url: URL_WS + "GuadarContactoInfo",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: "{'info':" + JSON.stringify(jsonContacto) + "}",
    }).done(function (data) {
        respuesta = JSON.parse(data.d);
    }).fail(function (jqXHR, textStatus, errorThrown) {
        var mensajeError = "<b>Tiempo de sesion expirado.<b> <br> No se pudo conectar con la API, Guardar Datos Contacto ";
        errorMessage(mensajeError, jqXHR, textStatus, errorThrown);
    });
    return respuesta;
}

///////////////////DATOS FECHAS IMPLEMENTACION////////////////////////
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