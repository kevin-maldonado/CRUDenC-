var URL_WS = $("#BASE_URL_IASI").val();
URL_WS += "WebService/WSComun.asmx/";

$(document).ready(function () {

    $(document).on('click', "span[rel='addParadaReloj']", function (e) {
        e.preventDefault();
        var FacId = $(this).attr('data-id');
        var codigo = $(this).attr('data-codigo');

        bootbox.prompt({
            title: "<i class='fas fa-question-circle'></i> Parada de Reloj Caso " + codigo,
            message: "¿Desea detener el caso en este nodo?",
            inputType: 'select',
            inputOptions: [
                {
                    text: 'Seleccione causa:',
                    value: '',
                },
                {
                    text: 'Cliente no responde',
                    value: 'Cliente no responde',
                },
                {
                    text: 'Cliente propone fecha específica',
                    value: 'Cliente propone fecha específica',
                },
                {
                    text: 'Cliente no consigue permisos de ingreso',
                    value: 'Cliente no consigue permisos de ingreso',
                },
                {
                    text: 'Cliente no cuenta con infraestructura lista',
                    value: 'Cliente no cuenta con infraestructura lista',
                },
                {
                    text: 'Pendiente proyecto digital',
                    value: 'Pendiente proyecto digital',
                }
            ],
            buttons: {
                cancel: {
                    label: '<i class="fa fa-times"></i> No',
                    className: 'btn-danger'
                },
                confirm: {
                    label: '<i class="fa fa-check"></i> Si',
                    className: 'btn-success'
                }
            },
            callback: function (result) {
                if (result != null) {
                    if (result.length > 3) {
                        var ParadaReloj = {
                            IdUsuario: $("#HdUsuarioId").val(),
                            IdFactiblidad: FacId,
                            Causa: result,
                            Nodo: $("#DdlNodoCaso option:selected").val()
                        };
                        guardarParadaReloj(ParadaReloj);
                        setTimeout(function () { location.reload(true); }, 3000);
                    } else {
                        alert("(*) Seleccione una causa");
                    }
                }
            }
        });
    });

    $(document).on('click', "span[rel='removeParadaReloj']", function (e) {
        e.preventDefault();
        var FacId = $(this).attr('data-id');
        var codigo = $(this).attr('data-codigo');

        bootbox.confirm({
            title: "<i class='fas fa-question-circle'></i> Parada de Reloj Caso " + codigo,
            message: "¿Desea finalizar la parada de reloj?",
            buttons: {
                cancel: {
                    label: '<i class="fa fa-times"></i> No',
                    className: 'btn-danger'
                },
                confirm: {
                    label: '<i class="fa fa-check"></i> Si',
                    className: 'btn-success'
                }
            },
            callback: function (result) {
                if (result == true) {
                    var ParadaReloj = {
                        IdUsuario: $("#HdUsuarioId").val(),
                        IdFactiblidad: FacId,
                        Nodo: $("#DdlNodoCaso option:selected").val()
                    };
                    actualizarParadaReloj(ParadaReloj);
                    setTimeout(function () { location.reload(true); }, 3000);
                }
            }
        });
    });

    $(document).on('click', "span[rel='verParadaReloj']", function (e) {
        var codigo = $(this).attr('data-codigo');

        var ParadaReloj = {
            IdFactiblidad: $(this).attr('data-id'),
            Nodo: $(this).attr('data-nodo')
        };
        var res = verParadaReloj(ParadaReloj);

        bootbox.alert({
            title: "<i class='fas fa-info-circle''></i> Causa Parada Reloj " + codigo,
            message: "<p>" + res + "</p>",
            centerVertical: true,
        });
    });

});


/////////////////////PARADA RELOJ////////////////////////
function guardarParadaReloj(jsonData) {
    var respuesta = ""
    $.ajax({
        async: false,
        type: "POST",
        url: URL_WS + "GuardarParadaReloj",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: "{'Parada':" + JSON.stringify(jsonData) + "}",
    }).done(function (data) {
        respuesta = JSON.parse(data.d);
    }).fail(function (jqXHR, textStatus, errorThrown) {
        var mensajeError = "<b>Tiempo de sesion expirado.<b> <br> No se pudo conectar con la API, Guardar Parada de Reloj";
        errorMessage(mensajeError, jqXHR, textStatus, errorThrown);
    });
    return respuesta;
}

function actualizarParadaReloj(jsonData) {
    var respuesta = ""
    $.ajax({
        async: false,
        type: "POST",
        url: URL_WS + "ActualizarParadaReloj",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: "{'Parada':" + JSON.stringify(jsonData) + "}",
    }).done(function (data) {
        respuesta = JSON.parse(data.d);
    }).fail(function (jqXHR, textStatus, errorThrown) {
        var mensajeError = "<b>Tiempo de sesion expirado.<b> <br> No se pudo conectar con la API, Actualizar Parada de Reloj";
        errorMessage(mensajeError, jqXHR, textStatus, errorThrown);
    });
    return respuesta;
}

function verParadaReloj(jsonData) {
    var respuesta = ""
    $.ajax({
        async: false,
        type: "POST",
        url: URL_WS + "VerParadaReloj",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: "{'Parada':" + JSON.stringify(jsonData) + "}",
    }).done(function (data) {
        respuesta = JSON.parse(data.d);
    }).fail(function (jqXHR, textStatus, errorThrown) {
        var mensajeError = "<b>Tiempo de sesion expirado.<b> <br> No se pudo conectar con la API, Actualizar Parada de Reloj";
        errorMessage(mensajeError, jqXHR, textStatus, errorThrown);
    });
    return respuesta;
}