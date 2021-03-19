$(document).ready(function () {
    $('#VerConsultas').on('click', function (e) {
        var FacId = $('#HdFacId').val();
        $('#myModalData').modal('show');
        cargaConsultasIPRD(FacId);
    });

    $('#VerServicios').on('click', function (e) {
        var FacId = $('#HdFacId').val();
        $('#myModalData').modal('show');
        cargaServicios(FacId);
    });

    $('#VerHistorial').on('click', function (e) {
        var FacId = $('#HdFacId').val();
        $('#myModalData').modal('show');
        cargarDevoluciones(FacId);
    });

    $('#BtnVerCierreProyecto').on('click', function (e) {
        var FacId = $('#HdFacId').val();
        $('#myModalData').modal('show');
        cargarCancelaciones(FacId);
    });

    /////GUARDAR FECHA COMPROMISO///////////
    $('#BtnGuardarFechaComp').on('click', function (e) {
        var res = actualizarFechaCompromiso($('#HdFacId').val(), $('#TxtFechaComp').val());
        var respuesta = res[0];
        if (respuesta == '1') {
            bootbox.alert({
                title: "<i class='fa fa-check-circle'></i> Confirmación",
                centerVertical: true,
                message: "Fecha de compromiso guardada exitosamente"
            });
        }
    });
});

function cargaConsultasIPRD(FacId) {
    var codigo = $('#HdCodigoCaso').val();
    $("#tituloModalData").text("Consultas IPRD " + codigo);
    $.ajax({
        async: false,
        type: "POST",
        url: "../" + "Tradicional/VerConsulIPRD.aspx?parametro=" + FacId,
        contentType: "application/json; charset=utf-8",
        dataType: "html",
    }).done(function (data) {
        $("#contenidoData").html(data);
    }).fail(function (jqXHR, textStatus, errorThrown) {
        var mensajeError = "<b>Error al obtener la información. Consultas IPRD.<b>";
        errorMessage(mensajeError, jqXHR, textStatus, errorThrown);
    });
}

function cargaServicios(FacId) {
    var codigo = $('#HdCodigoCaso').val();
    $("#tituloModalData").text("Servicios " + codigo);
    $.ajax({
        async: false,
        type: "POST",
        url: "../" + "Tradicional/VerServicios.aspx?parametro=" + FacId,
        contentType: "application/json; charset=utf-8",
        dataType: "html",
    }).done(function (data) {
        $("#contenidoData").html(data);
    }).fail(function (jqXHR, textStatus, errorThrown) {
        var mensajeError = "<b>Error al obtener la información. Datos Servicios.<b>";
        errorMessage(mensajeError, jqXHR, textStatus, errorThrown);
    });
}

function cargarDevoluciones(FacId) {
    var codigo = $('#HdCodigoCaso').val();
    $("#tituloModalData").text("Historial de Devoluciones " + codigo);
    $.ajax({
        async: false,
        type: "POST",
        url: "../" + "Tradicional/HistorialDevoluciones.aspx?parametro=" + FacId,
        contentType: "application/json; charset=utf-8",
        dataType: "html",
    }).done(function (data) {
        $("#contenidoData").html(data);
    }).fail(function (jqXHR, textStatus, errorThrown) {
        var mensajeError = "<b>Error al obtener la información. Historial Devoluciones.<b>";
        errorMessage(mensajeError, jqXHR, textStatus, errorThrown);
    });
}

function cargaPermiso(PermisoId) {
    var codigo = $('#HdCodigoCaso').val();
    $("#tituloModalData").text("Permiso " + codigo);
    $.ajax({
        async: false,
        type: "POST",
        url: "../" + "Tradicional/VerInfoPermiso.aspx?parametro=" + PermisoId,
        contentType: "application/json; charset=utf-8",
        dataType: "html",
    }).done(function (data) {
        $("#contenidoData").html(data);
    }).fail(function (jqXHR, textStatus, errorThrown) {
        var mensajeError = "<b>Error al obtener la información. Historial Devoluciones.<b>";
        errorMessage(mensajeError, jqXHR, textStatus, errorThrown);
    });
}

function cargarHisPermisos(DetaPerId) {
    var codigo = $('#HdCodigoCaso').val();
    $("#tituloModalData").text("Historial Permiso " + codigo);
    $.ajax({
        async: false,
        type: "POST",
        url: "../" + "Tradicional/VerHisPermisos.aspx?parametro=" + DetaPerId,
        contentType: "application/json; charset=utf-8",
        dataType: "html",
    }).done(function (data) {
        $("#contenidoData").html(data);
    }).fail(function (jqXHR, textStatus, errorThrown) {
        var mensajeError = "<b>Error al obtener la información. Historial Devoluciones.<b>";
        errorMessage(mensajeError, jqXHR, textStatus, errorThrown);
    });
}

function cargarCancelaciones(DetaPerId) {
    var codigo = $('#HdCodigoCaso').val();
    $("#tituloModalData").text("Cerrar Proyecto " + codigo);
    $.ajax({
        async: false,
        type: "POST",
        url: "../" + "Tradicional/VerCancelacion.aspx?parametro=" + DetaPerId,
        contentType: "application/json; charset=utf-8",
        dataType: "html",
    }).done(function (data) {
        $("#contenidoData").html(data);
    }).fail(function (jqXHR, textStatus, errorThrown) {
        var mensajeError = "<b>Error al obtener la información. Cancelación de proyecto.<b>";
        errorMessage(mensajeError, jqXHR, textStatus, errorThrown);
    });
}
