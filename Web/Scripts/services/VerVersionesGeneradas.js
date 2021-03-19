$(document).ready(function () {
    $('#BtnVersionesGene').on('click', function (e) {
        var FacId = $('#HdFacId').val();
        $('#myModalData').modal('show');
        versionesGeneradas(FacId);
    });

    $(document).on('click', "span[rel='verHistorialSeguimiento']", function () {
        var FacId = $(this).attr('data-id');
        console.log("FACT " + FacId)
        $('#myModalData').modal('show');
        seguimientoFactibilidad(FacId);
    });
});

function versionesGeneradas(FacId) {
    var codigo = $('#HdCodigoCaso').val();
    $("#tituloModalData").text("Versiones Generadas " + codigo);
    $.ajax({
        async: false,
        type: "POST",
        url: "../" + "Tradicional/VerVersionesGeneradas.aspx?parametro=" + FacId,
        contentType: "application/json; charset=utf-8",
        dataType: "html",
    }).done(function (data) {
        $("#contenidoData").html(data);
    }).fail(function (jqXHR, textStatus, errorThrown) {
        var mensajeError = "<b>Error al obtener la información. Versiones Generadas.<b>";
        errorMessage(mensajeError, jqXHR, textStatus, errorThrown);
    });
}

function seguimientoFactibilidad(FacId) {
    var codigo = $('#HdCodigoCaso').val();
    $("#tituloModalData").text("Historial Seguimiento " + codigo);
    $.ajax({
        async: false,
        type: "POST",
        url: "../" + "Tradicional/SeguimientoFactibilidad.aspx?parametro=" + FacId,
        contentType: "application/json; charset=utf-8",
        dataType: "html",
    }).done(function (data) {
        $("#contenidoData").html(data);
    }).fail(function (jqXHR, textStatus, errorThrown) {
        var mensajeError = "<b>Error al obtener la información. Seguimiento Factibilidad.<b>";
        errorMessage(mensajeError, jqXHR, textStatus, errorThrown);
    });
}
