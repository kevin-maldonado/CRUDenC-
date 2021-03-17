$(document).ready(function () {
    listarVisitas($("#HdFacId").val());
    if ($("#HdReqId").val() == "6" || $("#HdReqId").val() == "7") {
        $('.encuesta').hide(); 
    }

    $(document).on('change', 'input[name=ratingTime]', function (e) {
        $('#HdRatingTime').val($('input:radio[name=ratingTime]:checked').val());
    });

    $(document).on('change', 'input[name=ratingCono]', function (e) {
        $('#HdRatingCono').val($('input:radio[name=ratingCono]:checked').val());
    });

    $(document).on('change', 'input[name=ratingComu]', function (e) {
        $('#HdRatingComu').val($('input:radio[name=ratingComu]:checked').val());
    });

    $(document).on('change', 'input[name=ratingAma]', function (e) {
        $('#HdRatingAma').val($('input:radio[name=ratingAma]:checked').val());
    });

    $(document).on('change', 'input[name=ratingCali]', function (e) {
        $('#HdRatingCali').val($('input:radio[name=ratingCali]:checked').val());
    });

    $('#BtnGuardarVisita').on('click', function (e) {
        if ($("#DdlTipo").val() == '0') {
            bootbox.alert({
                title: "<i class='fa fa-exclamation-triangle'></i> Advertencia",
                message: "<p><b>Por favor ingrese campos requeridos.</b></p>" + "<p>* Seleccione un tipo de visita</p>",
                centerVertical: true,
            });
        } else {
            var jsonVisita = { IdFactibilidad: $("#HdFacId").val(), Fecha: $("#TxtFechaVisita").val(), TipoDetalle: $("#DdlTipo").val(), Observacion: $("#TxtObsGestion").val() }
            var res = guardarDatosVisitas(jsonVisita);
            var respuesta = res[0];
            if (respuesta == '1') {
                bootbox.alert({
                    title: "<i class='fa fa-check-circle'></i> Confirmación",
                    centerVertical: true,
                    message: "Datos de visita guardados exitosamente"
                });
            }
        }
        listarVisitas($("#HdFacId").val());
    });

    $('#BtnGuardarEncues').on('click', function (e) {
        var jsonEncuesta = { IdFactibilidad: $("#HdFacId").val(), TiempoValor: $("#HdRatingTime").val(), ConocimientoValor: $("#HdRatingCono").val(), ComunicacionValor: $("#HdRatingComu").val(), AmabilidadValor: $("#HdRatingAma").val(), CalidadValor: $("#HdRatingCali").val(), Acta: $("#CkxActaCli").prop('checked'), ObsActa: $("#TxtObsFecha").val().trim(), FechaActa: $("#TxtFechaActa").val() }
        var res = guardarDatosEncuesta(jsonEncuesta);
        var respuesta = res[0];
        if (respuesta == '1') {
            bootbox.alert({
                title: "<i class='fa fa-check-circle'></i> Confirmación",
                centerVertical: true,
                message: "Datos de encuesta guardados exitosamente"
            });
            $("#BtnEnviar").prop('disabled', false);
            $("#MainContent_lblMsmValida").hide();
        }
    });
});