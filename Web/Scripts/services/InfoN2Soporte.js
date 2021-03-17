$(document).ready(function () {

    $('#TxtSucursal').hide(); $('#BtnGuardar').hide();
    $(document).on('click', "#BtnEditar", function (e) {
        $('#TxtSucursal').show();
        $('#LblSucursal').hide();
        $('#BtnGuardar').show();
        $('#BtnEditar').hide();
    });

    $(document).on('click', "#BtnGuardar", function (e) {
        $('#TxtSucursal').hide();
        $('#LblSucursal').show();
        $('#BtnGuardar').hide();
        $('#BtnEditar').show();
    });

    var EstadoPrin = $('#DdlEstadoPrin').val(); //Estado principal del combo
    if (EstadoPrin == "2") {
        $('#DvEstadoPen').show();
    }
    else {
        $('#DvEstadoPen').hide(); //Estado pendiente del combo
        $('#DdlEstadoPen').val("0").trigger('change');
    }

    $('#DdlEstadoPrin').change(function () {
        var data = $(this).val(); //Valor de la opcion seleccionada del combo
        if (data == "2") {
            $('#DvEstadoPen').show();
        }
        else {
            $('#DvEstadoPen').hide();
            $('#DdlEstadoPen').val("0").trigger('change');
        }
    });

    $('#BtnGestionTareas').on('click', function (e) {
        var FacId = $('#HdFacId').val();
        $('#myModalData').modal('show');
        cargaFormGesTareas(FacId);
    });

    $('#BtnModificarEq').on('click', function (e) {
        var FacId = $('#HdFacId').val();
        $('#myModalData').modal('show');
        cargaFormEquipamiento(FacId);
    });
});

function RegistroServ(IdOfeSer) {
    $('#myModalData').modal('show');
    cargaFormServicio(IdOfeSer);
}

function VerServicio(IdOfeSer) {
    $('#myModalData').modal('show');
    cargaServicio(IdOfeSer);
}

function cargaServicio(FacId) {
    $("#tituloModalData").text("Información del Servicio");
    $.ajax({
        async: false,
        type: "POST",
        url: "../" + "Tradicional/InfoServicioN2.aspx?parametro=" + FacId,
        contentType: "application/json; charset=utf-8",
        dataType: "html",
    }).done(function (data) {
        $("#contenidoData").html(data);
    }).fail(function (jqXHR, textStatus, errorThrown) {
        var mensajeError = "<b>Error al obtener la información. Datos de Servicio.<b>";
        errorMessage(mensajeError, jqXHR, textStatus, errorThrown);
    });
}

function cargaFormServicio(IdOfeSer) {
    $("#tituloModalData").text("Ingresar Información del Servicio");
    $.ajax({
        async: false,
        type: "POST",
        url: "../" + "Tradicional/RegistroServicioN2.aspx?parametro=" + IdOfeSer,
        contentType: "application/json; charset=utf-8",
        dataType: "html",
    }).done(function (data) {
        $("#contenidoData").html(data);
    }).fail(function (jqXHR, textStatus, errorThrown) {
        var mensajeError = "<b>Error al obtener la información. Formulario de Servicio.<b>";
        errorMessage(mensajeError, jqXHR, textStatus, errorThrown);
    });
}

function cargaFormGesTareas(FacId) {
    var codigo = $('#HdCodigoCaso').val();
    $("#tituloModalData").text("Gestión de Tareas "+ codigo);
    $.ajax({
        async: false,
        type: "POST",
        url: "../" + "Tradicional/GestionTareasN2.aspx?parametro=" + FacId,
        contentType: "application/json; charset=utf-8",
        dataType: "html",
    }).done(function (data) {
        $("#contenidoData").html(data);
    }).fail(function (jqXHR, textStatus, errorThrown) {
        var mensajeError = "<b>Error al obtener la información. Formulario de Gestion Tareas.<b>";
        errorMessage(mensajeError, jqXHR, textStatus, errorThrown);
    });
}

function cargaFormEquipamiento(FacId) {
    var codigo = $('#HdCodigoCaso').val();
    $("#tituloModalData").text("Edición de Equipamiento " + codigo);
    $.ajax({
        async: false,
        type: "POST",
        url: "../" + "Tradicional/ModificarEquipoContacto.aspx?parametro=" + FacId,
        contentType: "application/json; charset=utf-8",
        dataType: "html",
    }).done(function (data) {
        $("#contenidoData").html(data);
    }).fail(function (jqXHR, textStatus, errorThrown) {
        var mensajeError = "<b>Error al obtener la información. Formulario de Equipamiento.<b>";
        errorMessage(mensajeError, jqXHR, textStatus, errorThrown);
    });
}