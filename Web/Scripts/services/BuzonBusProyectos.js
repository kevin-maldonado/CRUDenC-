var URL_WS = $("#BASE_URL_IASI").val();
URL_WS += "WebService/WSComun.asmx/";
$(document).ready(function () {
    $(document).on('click', "span[rel='verFlujoSolicitud']", function () {
        var FacId = $(this).attr('data-id');
        var codigo = $(this).attr('data-codigo');
        $('#myModalSolicitud').modal('show');
        cargaDatosFlujo(FacId,codigo);
    });

    $(document).on('click', "span[rel='verSolicitud']", function () {
        var FacId = $(this).attr('data-id');
        var codigo = $(this).attr('data-codigo');
        $('#myModalSolicitud').modal('show');
        cargaDatosCaso(FacId,codigo);
    });

    $(document).on('click', "span[rel='verSolicitudJP']", function () {
        $('#myModalSolicitud').modal('show');
        var FacId = $(this).attr('data-id');
        var codigo = $(this).attr('data-codigo');
        var tiporeq = $(this).attr('data-tiporeq');  
        if (tiporeq == 22) {        
            cargaDatosCasoDesinstalacion(FacId, codigo);
        } else {
            cargaDatosCasoJP(FacId, codigo);
        }    
    });
});

function cargaDatosFlujo(FacId,codigo) {
    $("#tituloModalSolicitud").text("Historial del Caso "+codigo);
    $.ajax({
        async: false,
        type: "POST",
        url: "../" + "Tradicional/VerFlujoFac.aspx?parametro=" + FacId,
        contentType: "application/json; charset=utf-8",
        dataType: "html",
    }).done(function (data) {
        $("#contenidoSolicitud").html(data);
    }).fail(function (jqXHR, textStatus, errorThrown) {
        var mensajeError = "<b>Error al obtener la información. Historial del Caso.<b>";
        errorMessage(mensajeError, jqXHR, textStatus, errorThrown);
    });
}

function cargaDatosCaso(FacId, codigo) {
    $("#tituloModalSolicitud").text("Información del Caso " + codigo);
    $.ajax({
        async: false,
        type: "POST",
        url: "../" + "Tradicional/VerCaso.aspx?parametro=" + FacId,
        contentType: "application/json; charset=utf-8",
        dataType: "html",
    }).done(function (data) {
        $("#contenidoSolicitud").html(data);
    }).fail(function (jqXHR, textStatus, errorThrown) {
        var mensajeError = "<b>Error al obtener la información. Información del Caso.<b>";
        errorMessage(mensajeError, jqXHR, textStatus, errorThrown);
    });
}

function cargaDatosCasoJP(FacId,codigo) {
    $("#tituloModalSolicitud").text("Información del Caso "+codigo);
    $.ajax({
        async: false,
        type: "POST",
        url: "../" + "Tradicional/VerCasoJP.aspx?parametro=" + FacId,
        contentType: "application/json; charset=utf-8",
        dataType: "html",
    }).done(function (data) {
        $("#contenidoSolicitud").html(data);
    }).fail(function (jqXHR, textStatus, errorThrown) {
        var mensajeError = "<b>Error al obtener la información. Información del Caso.<b>";
        errorMessage(mensajeError, jqXHR, textStatus, errorThrown);
    });
}

function cargaDatosCasoDesinstalacion(FacId, codigo) {
    $("#tituloModalSolicitud").text("Información del Caso " + codigo);
    $.ajax({
        async: false,
        type: "POST",
        url: "../" + "Tradicional/VerCasoDesinstalacion.aspx?parametro=" + FacId,
        contentType: "application/json; charset=utf-8",
        dataType: "html",
    }).done(function (data) {
        $("#contenidoSolicitud").html(data);
    }).fail(function (jqXHR, textStatus, errorThrown) {
        var mensajeError = "<b>Error al obtener la información. Información del Caso.<b>";
        errorMessage(mensajeError, jqXHR, textStatus, errorThrown);
    });
}