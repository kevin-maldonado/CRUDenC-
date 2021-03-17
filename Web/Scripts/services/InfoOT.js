$(document).ready(function () {
    $('#ModificarOT').on('click', function (e) {
        var FacId = $('#HdFacId').val();
        $('#myModalData').modal('show');
        cargaModificarOT(FacId);
    });

    $('#VerHistorial').on('click', function (e) {
        var FacId = $('#HdFacId').val();
        $('#myModalData').modal('show');
        cargarDevoluciones(FacId);
    });

    $('#BtnEditarDireccion').hide(); $('#EdicionDir').hide(); $('#DdlCategoriaCli').hide();
    $(document).on('click', "#BtnEditar", function () {
        $('#BtnEditarDireccion').show(); $('#EdicionDir').show(); $('#DdlCategoriaCli').show();
        $('#BtnEditar').hide(); $('#VerDir').hide(); $('#LblCategoriaCli').hide();
    });
    $(document).on('click', "#BtnEditarDireccion", function () {
        $('#BtnEditarDireccion').hide(); $('#EdicionDir').hide(); $('#DdlCategoriaCli').hide();
        $('#BtnEditar').show(); $('#VerDir').show(); $('#LblCategoriaCli').show();
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

function cargaModificarOT(FacId) {
    var codigo = $('#HdCodigoCaso').val();
    $("#tituloModalData").text("Modificación OT " + codigo);
    $.ajax({
        async: false,
        type: "POST",
        url: "../" + "Tradicional/ModificarOT.aspx?parametro=" + FacId,
        contentType: "application/json; charset=utf-8",
        dataType: "html",
    }).done(function (data) {
        $("#contenidoData").html(data);
    }).fail(function (jqXHR, textStatus, errorThrown) {
        var mensajeError = "<b>Error al obtener la información. Modificación OT.<b>";
        errorMessage(mensajeError, jqXHR, textStatus, errorThrown);
    });
}

function cargarDevoluciones(FacId) {
    var codigo = $('#HdCodigoCaso').val();
    $("#tituloModalData").text("Historial de Devoluciones " +codigo);
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