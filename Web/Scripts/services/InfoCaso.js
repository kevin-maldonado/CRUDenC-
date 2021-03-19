$(document).ready(function () {

    $('#BtnCerrarProyecto').on('click', function (e) {
        var validacionCancelacion = validarDatos();
        if (validacionCancelacion != true) {
            bootbox.alert({
                title: "<i class='fa fa-exclamation-triangle'></i> Advertencia",
                message: "<p><b>Por favor ingrese campos requeridos.</b></p>" + validacionCancelacion,
                centerVertical: true,
            });
        } else {
            var res = cerrarCaso($('#HdFacId').val(), $("#DdlTipoCancelacion option:selected").val(), $("#TxtObservacionCierre").val());
            var respuesta = res[0];
            if (respuesta == '1') {
                bootbox.alert({
                    title: "<i class='fa fa-check-circle'></i> Confirmación",
                    centerVertical: true,
                    message: "Proyecto cerrado exitosamente"
                });
                setTimeout(function () { location.reload(true); }, 3000);
            }
        }
    });

});